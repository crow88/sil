define(["backbone","model/data"],function(a,b){var c=b.extend({urlRoot:function(){return this.get("snsflag")?Game.baseUri+"user/user_id/1":Game.baseUri+"user/user_id/0"},defaults:{snsflag:0}});return c});