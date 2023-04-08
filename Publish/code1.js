gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDTitleObjects1= [];
gdjs.Title_32ScreenCode.GDTitleObjects2= [];
gdjs.Title_32ScreenCode.GDTitleObjects3= [];
gdjs.Title_32ScreenCode.GDTitleObjects4= [];
gdjs.Title_32ScreenCode.GDVsCPUObjects1= [];
gdjs.Title_32ScreenCode.GDVsCPUObjects2= [];
gdjs.Title_32ScreenCode.GDVsCPUObjects3= [];
gdjs.Title_32ScreenCode.GDVsCPUObjects4= [];
gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects1= [];
gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects2= [];
gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects3= [];
gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects4= [];
gdjs.Title_32ScreenCode.GDArrowControlsObjects1= [];
gdjs.Title_32ScreenCode.GDArrowControlsObjects2= [];
gdjs.Title_32ScreenCode.GDArrowControlsObjects3= [];
gdjs.Title_32ScreenCode.GDArrowControlsObjects4= [];
gdjs.Title_32ScreenCode.GDMovementObjects1= [];
gdjs.Title_32ScreenCode.GDMovementObjects2= [];
gdjs.Title_32ScreenCode.GDMovementObjects3= [];
gdjs.Title_32ScreenCode.GDMovementObjects4= [];
gdjs.Title_32ScreenCode.GDJumpObjects1= [];
gdjs.Title_32ScreenCode.GDJumpObjects2= [];
gdjs.Title_32ScreenCode.GDJumpObjects3= [];
gdjs.Title_32ScreenCode.GDJumpObjects4= [];
gdjs.Title_32ScreenCode.GDGrabObjects1= [];
gdjs.Title_32ScreenCode.GDGrabObjects2= [];
gdjs.Title_32ScreenCode.GDGrabObjects3= [];
gdjs.Title_32ScreenCode.GDGrabObjects4= [];
gdjs.Title_32ScreenCode.GDClassicGamemodeObjects1= [];
gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2= [];
gdjs.Title_32ScreenCode.GDClassicGamemodeObjects3= [];
gdjs.Title_32ScreenCode.GDClassicGamemodeObjects4= [];
gdjs.Title_32ScreenCode.GDLivesGamemodeObjects1= [];
gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2= [];
gdjs.Title_32ScreenCode.GDLivesGamemodeObjects3= [];
gdjs.Title_32ScreenCode.GDLivesGamemodeObjects4= [];
gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects1= [];
gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects2= [];
gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects3= [];
gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects4= [];
gdjs.Title_32ScreenCode.GDLocalObjects1= [];
gdjs.Title_32ScreenCode.GDLocalObjects2= [];
gdjs.Title_32ScreenCode.GDLocalObjects3= [];
gdjs.Title_32ScreenCode.GDLocalObjects4= [];
gdjs.Title_32ScreenCode.GDLocalConfirmObjects1= [];
gdjs.Title_32ScreenCode.GDLocalConfirmObjects2= [];
gdjs.Title_32ScreenCode.GDLocalConfirmObjects3= [];
gdjs.Title_32ScreenCode.GDLocalConfirmObjects4= [];
gdjs.Title_32ScreenCode.GDWObjects1= [];
gdjs.Title_32ScreenCode.GDWObjects2= [];
gdjs.Title_32ScreenCode.GDWObjects3= [];
gdjs.Title_32ScreenCode.GDWObjects4= [];
gdjs.Title_32ScreenCode.GDAObjects1= [];
gdjs.Title_32ScreenCode.GDAObjects2= [];
gdjs.Title_32ScreenCode.GDAObjects3= [];
gdjs.Title_32ScreenCode.GDAObjects4= [];
gdjs.Title_32ScreenCode.GDSObjects1= [];
gdjs.Title_32ScreenCode.GDSObjects2= [];
gdjs.Title_32ScreenCode.GDSObjects3= [];
gdjs.Title_32ScreenCode.GDSObjects4= [];
gdjs.Title_32ScreenCode.GDDObjects1= [];
gdjs.Title_32ScreenCode.GDDObjects2= [];
gdjs.Title_32ScreenCode.GDDObjects3= [];
gdjs.Title_32ScreenCode.GDDObjects4= [];
gdjs.Title_32ScreenCode.GDRedObjects1= [];
gdjs.Title_32ScreenCode.GDRedObjects2= [];
gdjs.Title_32ScreenCode.GDRedObjects3= [];
gdjs.Title_32ScreenCode.GDRedObjects4= [];
gdjs.Title_32ScreenCode.GDGreenObjects1= [];
gdjs.Title_32ScreenCode.GDGreenObjects2= [];
gdjs.Title_32ScreenCode.GDGreenObjects3= [];
gdjs.Title_32ScreenCode.GDGreenObjects4= [];

gdjs.Title_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_1 = {val:false};


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Title_32ScreenCode.GDTitleObjects2, gdjs.Title_32ScreenCode.GDTitleObjects3);


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDTitleObjects3.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDTitleObjects3[i].getVariableBoolean(gdjs.Title_32ScreenCode.GDTitleObjects3[i].getVariables().get("Angle"), true) ) {
        gdjs.Title_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32ScreenCode.GDTitleObjects3[k] = gdjs.Title_32ScreenCode.GDTitleObjects3[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDTitleObjects3.length = k;}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDTitleObjects3 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitleObjects3.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitleObjects3[i].getBehavior("Tween").addObjectAngleTween("Rotation", -(5) * (gdjs.RuntimeObject.getVariableNumber(gdjs.Title_32ScreenCode.GDTitleObjects3[i].getVariables().get("Angle"))), "linear", 2000, false);
}
}}

}


{

/* Reuse gdjs.Title_32ScreenCode.GDTitleObjects2 */

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDTitleObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDTitleObjects2[i].getVariableBoolean(gdjs.Title_32ScreenCode.GDTitleObjects2[i].getVariables().get("Angle"), false) ) {
        gdjs.Title_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32ScreenCode.GDTitleObjects2[k] = gdjs.Title_32ScreenCode.GDTitleObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDTitleObjects2.length = k;}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDTitleObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitleObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitleObjects2[i].getBehavior("Tween").addObjectAngleTween("Rotation", 5, "linear", 2000, false);
}
}}

}


};gdjs.Title_32ScreenCode.eventsList1 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1450, 800, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Title_32ScreenCode.GDTitleObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDTitleObjects2.length;i<l;++i) {
    if ( !(gdjs.Title_32ScreenCode.GDTitleObjects2[i].getBehavior("Tween").exists("Rotation")) ) {
        gdjs.Title_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32ScreenCode.GDTitleObjects2[k] = gdjs.Title_32ScreenCode.GDTitleObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDTitleObjects2.length = k;}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Title_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Title_32ScreenCode.GDTitleObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDTitleObjects1[i].getBehavior("Tween").hasFinished("Rotation") ) {
        gdjs.Title_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32ScreenCode.GDTitleObjects1[k] = gdjs.Title_32ScreenCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDTitleObjects1.length = k;}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition1IsTrue_0;
gdjs.Title_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11976660);
}
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDTitleObjects1 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitleObjects1[i].getBehavior("Tween").removeTween("Rotation");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitleObjects1[i].toggleVariableBoolean(gdjs.Title_32ScreenCode.GDTitleObjects1[i].getVariables().get("Angle"));
}
}}

}


};gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDVsCPUObjects2Objects = Hashtable.newFrom({"VsCPU": gdjs.Title_32ScreenCode.GDVsCPUObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDVsCPUObjects2Objects = Hashtable.newFrom({"VsCPU": gdjs.Title_32ScreenCode.GDVsCPUObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDVsCPUObjects2Objects = Hashtable.newFrom({"VsCPU": gdjs.Title_32ScreenCode.GDVsCPUObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLocalObjects2Objects = Hashtable.newFrom({"Local": gdjs.Title_32ScreenCode.GDLocalObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLocalObjects2Objects = Hashtable.newFrom({"Local": gdjs.Title_32ScreenCode.GDLocalObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLocalObjects1Objects = Hashtable.newFrom({"Local": gdjs.Title_32ScreenCode.GDLocalObjects1});
gdjs.Title_32ScreenCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("VsCPU"), gdjs.Title_32ScreenCode.GDVsCPUObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDVsCPUObjects2Objects, runtimeScene, true, false);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDVsCPUObjects2 */
gdjs.copyArray(runtimeScene.getObjects("VsCpuConfirm"), gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects2);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDVsCPUObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDVsCPUObjects2[i].setAnimationName("Hover");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDVsCPUObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDVsCPUObjects2[i].rotateTowardAngle(-(5), 60, runtimeScene);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VsCPU"), gdjs.Title_32ScreenCode.GDVsCPUObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDVsCPUObjects2Objects, runtimeScene, true, true);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDVsCPUObjects2 */
gdjs.copyArray(runtimeScene.getObjects("VsCpuConfirm"), gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects2);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDVsCPUObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDVsCPUObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDVsCPUObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDVsCPUObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VsCPU"), gdjs.Title_32ScreenCode.GDVsCPUObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDVsCPUObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Playermode").setString("VsCPU");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PvC", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Local"), gdjs.Title_32ScreenCode.GDLocalObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLocalObjects2Objects, runtimeScene, true, false);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.Title_32ScreenCode.GDAObjects2);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.Title_32ScreenCode.GDDObjects2);
gdjs.copyArray(runtimeScene.getObjects("Green"), gdjs.Title_32ScreenCode.GDGreenObjects2);
/* Reuse gdjs.Title_32ScreenCode.GDLocalObjects2 */
gdjs.copyArray(runtimeScene.getObjects("LocalConfirm"), gdjs.Title_32ScreenCode.GDLocalConfirmObjects2);
gdjs.copyArray(runtimeScene.getObjects("S"), gdjs.Title_32ScreenCode.GDSObjects2);
gdjs.copyArray(runtimeScene.getObjects("W"), gdjs.Title_32ScreenCode.GDWObjects2);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLocalObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLocalObjects2[i].setAnimationName("Hover");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLocalObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLocalObjects2[i].rotateTowardAngle(-(5), 60, runtimeScene);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLocalConfirmObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLocalConfirmObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDWObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDWObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDDObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDDObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDGreenObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDGreenObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Local"), gdjs.Title_32ScreenCode.GDLocalObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLocalObjects2Objects, runtimeScene, true, true);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.Title_32ScreenCode.GDAObjects2);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.Title_32ScreenCode.GDDObjects2);
gdjs.copyArray(runtimeScene.getObjects("Green"), gdjs.Title_32ScreenCode.GDGreenObjects2);
/* Reuse gdjs.Title_32ScreenCode.GDLocalObjects2 */
gdjs.copyArray(runtimeScene.getObjects("LocalConfirm"), gdjs.Title_32ScreenCode.GDLocalConfirmObjects2);
gdjs.copyArray(runtimeScene.getObjects("S"), gdjs.Title_32ScreenCode.GDSObjects2);
gdjs.copyArray(runtimeScene.getObjects("W"), gdjs.Title_32ScreenCode.GDWObjects2);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLocalObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLocalObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLocalObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLocalObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLocalConfirmObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLocalConfirmObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDWObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDWObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDDObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDDObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDGreenObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDGreenObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Local"), gdjs.Title_32ScreenCode.GDLocalObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLocalObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Playermode").setString("Local");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PvC", false);
}}

}


};gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDClassicGamemodeObjects2Objects = Hashtable.newFrom({"ClassicGamemode": gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDClassicGamemodeObjects2Objects = Hashtable.newFrom({"ClassicGamemode": gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDClassicGamemodeObjects2Objects = Hashtable.newFrom({"ClassicGamemode": gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLivesGamemodeObjects2Objects = Hashtable.newFrom({"LivesGamemode": gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLivesGamemodeObjects2Objects = Hashtable.newFrom({"LivesGamemode": gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLivesGamemodeObjects2Objects = Hashtable.newFrom({"LivesGamemode": gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2});
gdjs.Title_32ScreenCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Gamemode").setString("Classic");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClassicGamemode"), gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDClassicGamemodeObjects2Objects, runtimeScene, true, false);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2[i].setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClassicGamemode"), gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDClassicGamemodeObjects2Objects, runtimeScene, true, true);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClassicGamemode"), gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDClassicGamemodeObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Gamemode").setString("Classic");
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Classic";
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ClassicGamemode"), gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2);
gdjs.copyArray(runtimeScene.getObjects("GamemodeDescription"), gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects2);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2[i].setAnimationName("Select");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects2[i].setString("Each hoop you score nets you one point for your team. First to reach 10 points wins!");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LivesGamemode"), gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLivesGamemodeObjects2Objects, runtimeScene, true, false);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2[i].setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LivesGamemode"), gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLivesGamemodeObjects2Objects, runtimeScene, true, true);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LivesGamemode"), gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLivesGamemodeObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Gamemode").setString("Lives");
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Lives";
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GamemodeDescription"), gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("LivesGamemode"), gdjs.Title_32ScreenCode.GDLivesGamemodeObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLivesGamemodeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLivesGamemodeObjects1[i].setAnimationName("Select");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects1[i].setString("Every time you score, you gain one life and the opponents lose one life! First to reach 0 lives loses.");
}
}}

}


};gdjs.Title_32ScreenCode.eventsList4 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.eventsList1(runtimeScene);
}


{


gdjs.Title_32ScreenCode.eventsList2(runtimeScene);
}


{


gdjs.Title_32ScreenCode.eventsList3(runtimeScene);
}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDTitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects3.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects4.length = 0;
gdjs.Title_32ScreenCode.GDVsCPUObjects1.length = 0;
gdjs.Title_32ScreenCode.GDVsCPUObjects2.length = 0;
gdjs.Title_32ScreenCode.GDVsCPUObjects3.length = 0;
gdjs.Title_32ScreenCode.GDVsCPUObjects4.length = 0;
gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects1.length = 0;
gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects2.length = 0;
gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects3.length = 0;
gdjs.Title_32ScreenCode.GDVsCpuConfirmObjects4.length = 0;
gdjs.Title_32ScreenCode.GDArrowControlsObjects1.length = 0;
gdjs.Title_32ScreenCode.GDArrowControlsObjects2.length = 0;
gdjs.Title_32ScreenCode.GDArrowControlsObjects3.length = 0;
gdjs.Title_32ScreenCode.GDArrowControlsObjects4.length = 0;
gdjs.Title_32ScreenCode.GDMovementObjects1.length = 0;
gdjs.Title_32ScreenCode.GDMovementObjects2.length = 0;
gdjs.Title_32ScreenCode.GDMovementObjects3.length = 0;
gdjs.Title_32ScreenCode.GDMovementObjects4.length = 0;
gdjs.Title_32ScreenCode.GDJumpObjects1.length = 0;
gdjs.Title_32ScreenCode.GDJumpObjects2.length = 0;
gdjs.Title_32ScreenCode.GDJumpObjects3.length = 0;
gdjs.Title_32ScreenCode.GDJumpObjects4.length = 0;
gdjs.Title_32ScreenCode.GDGrabObjects1.length = 0;
gdjs.Title_32ScreenCode.GDGrabObjects2.length = 0;
gdjs.Title_32ScreenCode.GDGrabObjects3.length = 0;
gdjs.Title_32ScreenCode.GDGrabObjects4.length = 0;
gdjs.Title_32ScreenCode.GDClassicGamemodeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDClassicGamemodeObjects2.length = 0;
gdjs.Title_32ScreenCode.GDClassicGamemodeObjects3.length = 0;
gdjs.Title_32ScreenCode.GDClassicGamemodeObjects4.length = 0;
gdjs.Title_32ScreenCode.GDLivesGamemodeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLivesGamemodeObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLivesGamemodeObjects3.length = 0;
gdjs.Title_32ScreenCode.GDLivesGamemodeObjects4.length = 0;
gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects1.length = 0;
gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects2.length = 0;
gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects3.length = 0;
gdjs.Title_32ScreenCode.GDGamemodeDescriptionObjects4.length = 0;
gdjs.Title_32ScreenCode.GDLocalObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLocalObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLocalObjects3.length = 0;
gdjs.Title_32ScreenCode.GDLocalObjects4.length = 0;
gdjs.Title_32ScreenCode.GDLocalConfirmObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLocalConfirmObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLocalConfirmObjects3.length = 0;
gdjs.Title_32ScreenCode.GDLocalConfirmObjects4.length = 0;
gdjs.Title_32ScreenCode.GDWObjects1.length = 0;
gdjs.Title_32ScreenCode.GDWObjects2.length = 0;
gdjs.Title_32ScreenCode.GDWObjects3.length = 0;
gdjs.Title_32ScreenCode.GDWObjects4.length = 0;
gdjs.Title_32ScreenCode.GDAObjects1.length = 0;
gdjs.Title_32ScreenCode.GDAObjects2.length = 0;
gdjs.Title_32ScreenCode.GDAObjects3.length = 0;
gdjs.Title_32ScreenCode.GDAObjects4.length = 0;
gdjs.Title_32ScreenCode.GDSObjects1.length = 0;
gdjs.Title_32ScreenCode.GDSObjects2.length = 0;
gdjs.Title_32ScreenCode.GDSObjects3.length = 0;
gdjs.Title_32ScreenCode.GDSObjects4.length = 0;
gdjs.Title_32ScreenCode.GDDObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDObjects3.length = 0;
gdjs.Title_32ScreenCode.GDDObjects4.length = 0;
gdjs.Title_32ScreenCode.GDRedObjects1.length = 0;
gdjs.Title_32ScreenCode.GDRedObjects2.length = 0;
gdjs.Title_32ScreenCode.GDRedObjects3.length = 0;
gdjs.Title_32ScreenCode.GDRedObjects4.length = 0;
gdjs.Title_32ScreenCode.GDGreenObjects1.length = 0;
gdjs.Title_32ScreenCode.GDGreenObjects2.length = 0;
gdjs.Title_32ScreenCode.GDGreenObjects3.length = 0;
gdjs.Title_32ScreenCode.GDGreenObjects4.length = 0;

gdjs.Title_32ScreenCode.eventsList4(runtimeScene);

return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
