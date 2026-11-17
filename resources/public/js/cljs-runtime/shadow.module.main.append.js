
shadow.cljs.devtools.client.env.module_loaded('main');

try { lotty.core.init(); } catch (e) { console.error("An error occurred when calling (lotty.core/init)"); console.error(e); }