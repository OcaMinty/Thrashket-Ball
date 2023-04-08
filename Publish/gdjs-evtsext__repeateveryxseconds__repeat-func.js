
if (typeof gdjs.evtsExt__RepeatEveryXSeconds__Repeat !== "undefined") {
  gdjs.evtsExt__RepeatEveryXSeconds__Repeat.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RepeatEveryXSeconds__Repeat = {};

gdjs.evtsExt__RepeatEveryXSeconds__Repeat.conditionTrue_0 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__Repeat.conditionTrue_1 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__RepeatEveryXSeconds__Repeat.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__RepeatEveryXSeconds__Repeat.conditionTrue_1 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition0IsTrue_0;
gdjs.evtsExt__RepeatEveryXSeconds__Repeat.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(11751924);
}
}if (gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : ""));
}}

}


{


gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("time")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : ""));
}if (gdjs.evtsExt__RepeatEveryXSeconds__Repeat.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("timerName") : ""));
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func = function(runtimeScene, timerName, time, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "timerName") return timerName;
if (argName === "time") return time;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RepeatEveryXSeconds__Repeat.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__RepeatEveryXSeconds__Repeat.registeredGdjsCallbacks = [];