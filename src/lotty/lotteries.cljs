;; src/lotty/lotteries.cljs 

(ns lotty.lotteries)

(def countries
  [{:id "germany" :name "Germany"
    :games [{:id "6aus49" :name "Lotto 6aus49"
             :main-count 6 :main-max 49
             :bonus-count 1 :bonus-min 0 :bonus-max 9
             :bonus-label "Superzahl"}
            {:id "eurojackpot-de" :name "Eurojackpot"
             :main-count 5 :main-max 50
             :bonus-count 2 :bonus-min 1 :bonus-max 12
             :bonus-label "Eurozahlen"}]}
   {:id "united-states" :name "United States"
    :games [{:id "powerball" :name "Powerball"
             :main-count 5 :main-max 69
             :bonus-count 1 :bonus-min 1 :bonus-max 26
             :bonus-label "Powerball"}]}
   {:id "australia" :name "Australia"
    :games [{:id "oz-lotto" :name "Oz Lotto"
             :main-count 7 :main-max 47
             :bonus-count 3 :bonus-min 1 :bonus-max 47
             :bonus-label "Supplementary"
             :bonus-from-main-pool true}]}])
