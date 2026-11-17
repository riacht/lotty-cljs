;; src/lotty/draw.clj

(ns lotty.draw)

(defn shuffle-v [v]
  (let [a (object-array v)]
    (loop [i (dec (alength a))]
      (when (pos? i)
        (let [j (rand-int (inc i))
              t (aget a i)]
          (aset a i (aget a j))
          (aset a j t)
          (recur (dec i)))))
    (vec a)))

(defn start-draw [{:keys [main-count main-max bonus-count bonus-min bonus-max bonus-from-main-pool]}]
  {:phase (if (pos? main-count) :main :bonus)
   :main-pool (shuffle-v (mapv inc (range main-max)))
   :main-nums []
   :bonus-nums []
   :main-count main-count
   :main-max main-max
   :bonus-count (or bonus-count 0)
   :bonus-min (or bonus-min 0)
   :bonus-max (or bonus-max 9)
   :bonus-from-main-pool (boolean bonus-from-main-pool)})

(defn draw-next [s]
  (case (:phase s)
    :main
    (let [n (first (:main-pool s))
          nums (vec (sort (conj (:main-nums s) n)))
          done? (>= (count nums) (:main-count s))]
      (assoc s
             :main-pool (vec (rest (:main-pool s)))
             :main-nums nums
             :phase (cond
                      (not done?) :main
                      (pos? (:bonus-count s)) :bonus
                      :else :done)))
    :bonus
    (let [n (if (:bonus-from-main-pool s)
              (rand-nth (remove (set (concat (:main-nums s) (:bonus-nums s)))
                    (range 1 (inc (:main-max s)))))
                  (+ (:bonus-min s) (rand-int (inc (- (:bonus-max s) (:bonus-min s))))))
          nums (conj (:bonus-nums s) n)]
      (assoc s :bonus-nums nums
             :phase (if (>= (count nums) (:bonus-count s)) :done :bonus)))
    s))

