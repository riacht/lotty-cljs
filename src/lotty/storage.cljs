;; src/lotty/storage.cljs
(ns lotty.storage)
(def storage-key "lottery-picker-v4-tickets")

(defn load-tickets []
  (js->clj (js/JSON.parse (or (.getItem js/localStorage storage-key) "[]"))
           :keywordize-keys true))

(defn save-tickets! [tickets]
  (.setItem js/localStorage storage-key (js/JSON.stringify (clj->js tickets))))
