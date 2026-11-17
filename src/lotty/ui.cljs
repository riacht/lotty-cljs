;; src/lotty/ui.cljs
(ns lotty.ui
  (:require [reagent.core :as r]
            [lotty.draw :as draw]
            [lotty.lotteries :as lotteries]
            [lotty.storage :as storage]))

(defonce state
  (r/atom {:view :setup
           :country-id nil
           :game-id nil
           :draw nil
           :tickets (storage/load-tickets)}))

(defn country []
  (first (filter #(= (:id %) (:country-id @state)) lotteries/countries)))

(defn game []
  (first (filter #(= (:id %) (:game-id @state)) (:games (country)))))

(defn start []
  (let [g (game)]
    (swap! state assoc :view :draw :draw (draw/start-draw g))))

(defn save-ticket []
  (let [g (game)
        d (:draw @state)
        ticket {:id (.now js/Date)
                :name (:name g)
                :date (.toISOString (js/Date.))
                :mainNums (:main-nums d)
                :bonusNums (:bonus-nums d)}]
    (swap! state update :tickets conj ticket)
    (storage/save-tickets! (:tickets @state))))

(defn setup-view []
  [:div
   [:h1 "Lottery Number Picker"]
   [:select {:value (or (:country-id @state) "")
             :on-change #(swap! state assoc :country-id (.. % -target -value) :game-id nil)}
    [:option {:value ""} "Country…"]
    (for [c lotteries/countries]
      [:option {:key (:id c) :value (:id c)} (:name c)])]
   [:select {:value (or (:game-id @state) "")
             :on-change #(swap! state assoc :game-id (.. % -target -value))}
    [:option {:value ""} "Lottery…"]
    (for [g (:games (country))]
      [:option {:key (:id g) :value (:id g)} (:name g)])]
   [:button {:disabled (nil? (game)) :on-click start} "Start"]
   [:button {:on-click #(swap! state assoc :view :history)} "Tickets"]])

(defn draw-view []
  (let [d (:draw @state)]
    [:div
     [:p (pr-str (:main-nums d))]
     [:p (pr-str (:bonus-nums d)) " " (pr-str (:phase d))]
     (if (= :done (:phase d))
       [:button {:on-click save-ticket} "Save"]
       [:button {:on-click #(swap! state update :draw draw/draw-next)} "Next"])
     [:button {:on-click #(swap! state assoc :view :setup)} "Back"]]))

(defn history-view []
  [:div
   [:button {:on-click #(swap! state assoc :view :setup)} "Back"]
   (for [t (:tickets @state)]
     [:p {:key (:id t)} (:name t) " " (pr-str (:mainNums t)) " " (pr-str (:bonusNums t))])])

(defn app []
  (case (:view @state)
    :draw [draw-view]
    :history [history-view]
    [setup-view]))
