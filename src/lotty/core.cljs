;; src/lotty/core.cljs
(ns lotty.core
  (:require [reagent.dom.client :as rdomc]
            [lotty.ui :as ui]))

(defonce root
  (rdomc/create-root (js/document.getElementById "app")))

(defn init []
  (rdomc/render root [ui/app]))
