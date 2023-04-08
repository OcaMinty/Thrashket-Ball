gdjs.PvCCode = {};
gdjs.PvCCode.GDGroundObjects1= [];
gdjs.PvCCode.GDGroundObjects2= [];
gdjs.PvCCode.GDGroundObjects3= [];
gdjs.PvCCode.GDGroundObjects4= [];
gdjs.PvCCode.GDPlayerObjects1= [];
gdjs.PvCCode.GDPlayerObjects2= [];
gdjs.PvCCode.GDPlayerObjects3= [];
gdjs.PvCCode.GDPlayerObjects4= [];
gdjs.PvCCode.GDBallObjects1= [];
gdjs.PvCCode.GDBallObjects2= [];
gdjs.PvCCode.GDBallObjects3= [];
gdjs.PvCCode.GDBallObjects4= [];
gdjs.PvCCode.GDNPCObjects1= [];
gdjs.PvCCode.GDNPCObjects2= [];
gdjs.PvCCode.GDNPCObjects3= [];
gdjs.PvCCode.GDNPCObjects4= [];
gdjs.PvCCode.GDGoalObjects1= [];
gdjs.PvCCode.GDGoalObjects2= [];
gdjs.PvCCode.GDGoalObjects3= [];
gdjs.PvCCode.GDGoalObjects4= [];
gdjs.PvCCode.GDPlayerScoreObjects1= [];
gdjs.PvCCode.GDPlayerScoreObjects2= [];
gdjs.PvCCode.GDPlayerScoreObjects3= [];
gdjs.PvCCode.GDPlayerScoreObjects4= [];
gdjs.PvCCode.GDNpcScoreObjects1= [];
gdjs.PvCCode.GDNpcScoreObjects2= [];
gdjs.PvCCode.GDNpcScoreObjects3= [];
gdjs.PvCCode.GDNpcScoreObjects4= [];
gdjs.PvCCode.GDTeamWonObjects1= [];
gdjs.PvCCode.GDTeamWonObjects2= [];
gdjs.PvCCode.GDTeamWonObjects3= [];
gdjs.PvCCode.GDTeamWonObjects4= [];
gdjs.PvCCode.GDPlayerLightObjects1= [];
gdjs.PvCCode.GDPlayerLightObjects2= [];
gdjs.PvCCode.GDPlayerLightObjects3= [];
gdjs.PvCCode.GDPlayerLightObjects4= [];
gdjs.PvCCode.GDNpcLightObjects1= [];
gdjs.PvCCode.GDNpcLightObjects2= [];
gdjs.PvCCode.GDNpcLightObjects3= [];
gdjs.PvCCode.GDNpcLightObjects4= [];

gdjs.PvCCode.conditionTrue_0 = {val:false};
gdjs.PvCCode.condition0IsTrue_0 = {val:false};
gdjs.PvCCode.condition1IsTrue_0 = {val:false};
gdjs.PvCCode.condition2IsTrue_0 = {val:false};
gdjs.PvCCode.condition3IsTrue_0 = {val:false};
gdjs.PvCCode.conditionTrue_1 = {val:false};
gdjs.PvCCode.condition0IsTrue_1 = {val:false};
gdjs.PvCCode.condition1IsTrue_1 = {val:false};
gdjs.PvCCode.condition2IsTrue_1 = {val:false};
gdjs.PvCCode.condition3IsTrue_1 = {val:false};


gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects1});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects1});
gdjs.PvCCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition1IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].setPosition((( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")),(( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")) - 25);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].isFlippedX() ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(-(50), -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects1);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects1Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDPlayerObjects1[i].isFlippedX()) ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDPlayerObjects1[k] = gdjs.PvCCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects1.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects1 */
/* Reuse gdjs.PvCCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects1[i].getBehavior("Physics2").applyForce(50, -(50), (( gdjs.PvCCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects1[0].getPointY("")));
}
}}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects3Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects3Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition1IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects3 */
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].setPosition((( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointX("")),(( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointY("")) - 25);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].isFlippedX() ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].getBehavior("Physics2").applyForce(-(50), -(50), (( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDNPCObjects2[i].isFlippedX()) ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(50, -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.PvCCode.GDGroundObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.PvCCode.GDGroundObjects2});
gdjs.PvCCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDNPCObjects2[i].isFlippedX()) ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(50, -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].isFlippedX() ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(-(50), -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.PvCCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGroundObjects2Objects, (( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointY("")), 0, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.PvCCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGroundObjects2Objects, (( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointY("")), 180, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "MovementRand", gdjs.randomInRange(1, 5), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].returnVariable(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")).setNumber(gdjs.randomInRange(1, 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) > (( gdjs.PvCCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDBallObjects2[0].getPointX("")));
}
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 1 ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) < (( gdjs.PvCCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDBallObjects2[0].getPointX("")));
}
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 1 ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) > (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")));
}
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 2 ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) < (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")));
}
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 2 ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects1);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects1.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects1[k] = gdjs.PvCCode.GDNPCObjects1[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects1.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects1 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects1[i].flipX(false);
}
}}

}


};gdjs.PvCCode.eventsList3 = function(runtimeScene) {

{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "Local";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "VsCPU";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback11915924 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback11915924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback11917332 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback11917332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback11919892 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback11919892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback11921348 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback11921348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "Player" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11915068);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("PlayerScore").add(1);
}
{ //Subevents
gdjs.PvCCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "NPC" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11916732);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("NpcScore").add(1);
}
{ //Subevents
gdjs.PvCCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) >= 10;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].setString("Red Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects3[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) >= 10;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].setString("Green Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects2Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects2});
gdjs.PvCCode.asyncCallback11925116 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback11925116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects2Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects2});
gdjs.PvCCode.asyncCallback11927196 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback11927196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback11928828 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback11928828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback11930252 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback11930252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList13 = function(runtimeScene) {

{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("NpcScore").setNumber(5);
}{runtimeScene.getScene().getVariables().get("PlayerScore").setNumber(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects2[i].getVariableString(gdjs.PvCCode.GDBallObjects2[i].getVariables().get("BallHolder")) == "Player" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects2[k] = gdjs.PvCCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects2.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11924036);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("PlayerScore").add(1);
}{runtimeScene.getScene().getVariables().get("NpcScore").sub(1);
}
{ //Subevents
gdjs.PvCCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects2[i].getVariableString(gdjs.PvCCode.GDBallObjects2[i].getVariables().get("BallHolder")) == "NPC" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects2[k] = gdjs.PvCCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects2.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11926052);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("NpcScore").add(1);
}{runtimeScene.getScene().getVariables().get("PlayerScore").sub(1);
}
{ //Subevents
gdjs.PvCCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) <= 0;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].setString("Green Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) <= 0;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects1);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects1[i].setString("Red Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.eventsList14 = function(runtimeScene) {

{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].returnVariable(gdjs.PvCCode.GDBallObjects2[i].getVariables().get("BallHolder")).setString("Player");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, false, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].returnVariable(gdjs.PvCCode.GDBallObjects2[i].getVariables().get("BallHolder")).setString("NPC");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PlayerScore"), gdjs.PvCCode.GDPlayerScoreObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerScoreObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerScoreObjects2[i].setBBText("[outline=#E73C3C]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore"))) + "[/outline]");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NpcScore"), gdjs.PvCCode.GDNpcScoreObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNpcScoreObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNpcScoreObjects2[i].setBBText("[outline=#3CE776]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore"))) + "[/outline]");
}
}}

}


{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Classic";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Lives";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.eventsList15 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1450, 800, false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects1);
gdjs.copyArray(runtimeScene.getObjects("NpcLight"), gdjs.PvCCode.GDNpcLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerLight"), gdjs.PvCCode.GDPlayerLightObjects1);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerLightObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerLightObjects1[i].setPosition((( gdjs.PvCCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects1[0].getCenterXInScene()),(( gdjs.PvCCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.PvCCode.GDNpcLightObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDNpcLightObjects1[i].setPosition((( gdjs.PvCCode.GDNPCObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects1[0].getCenterXInScene()),(( gdjs.PvCCode.GDNPCObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects1[0].getCenterYInScene()));
}
}}

}


};gdjs.PvCCode.eventsList16 = function(runtimeScene) {

{


gdjs.PvCCode.eventsList0(runtimeScene);
}


{


gdjs.PvCCode.eventsList3(runtimeScene);
}


{


gdjs.PvCCode.eventsList14(runtimeScene);
}


{


gdjs.PvCCode.eventsList15(runtimeScene);
}


};

gdjs.PvCCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PvCCode.GDGroundObjects1.length = 0;
gdjs.PvCCode.GDGroundObjects2.length = 0;
gdjs.PvCCode.GDGroundObjects3.length = 0;
gdjs.PvCCode.GDGroundObjects4.length = 0;
gdjs.PvCCode.GDPlayerObjects1.length = 0;
gdjs.PvCCode.GDPlayerObjects2.length = 0;
gdjs.PvCCode.GDPlayerObjects3.length = 0;
gdjs.PvCCode.GDPlayerObjects4.length = 0;
gdjs.PvCCode.GDBallObjects1.length = 0;
gdjs.PvCCode.GDBallObjects2.length = 0;
gdjs.PvCCode.GDBallObjects3.length = 0;
gdjs.PvCCode.GDBallObjects4.length = 0;
gdjs.PvCCode.GDNPCObjects1.length = 0;
gdjs.PvCCode.GDNPCObjects2.length = 0;
gdjs.PvCCode.GDNPCObjects3.length = 0;
gdjs.PvCCode.GDNPCObjects4.length = 0;
gdjs.PvCCode.GDGoalObjects1.length = 0;
gdjs.PvCCode.GDGoalObjects2.length = 0;
gdjs.PvCCode.GDGoalObjects3.length = 0;
gdjs.PvCCode.GDGoalObjects4.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects1.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects2.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects3.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects4.length = 0;
gdjs.PvCCode.GDNpcScoreObjects1.length = 0;
gdjs.PvCCode.GDNpcScoreObjects2.length = 0;
gdjs.PvCCode.GDNpcScoreObjects3.length = 0;
gdjs.PvCCode.GDNpcScoreObjects4.length = 0;
gdjs.PvCCode.GDTeamWonObjects1.length = 0;
gdjs.PvCCode.GDTeamWonObjects2.length = 0;
gdjs.PvCCode.GDTeamWonObjects3.length = 0;
gdjs.PvCCode.GDTeamWonObjects4.length = 0;
gdjs.PvCCode.GDPlayerLightObjects1.length = 0;
gdjs.PvCCode.GDPlayerLightObjects2.length = 0;
gdjs.PvCCode.GDPlayerLightObjects3.length = 0;
gdjs.PvCCode.GDPlayerLightObjects4.length = 0;
gdjs.PvCCode.GDNpcLightObjects1.length = 0;
gdjs.PvCCode.GDNpcLightObjects2.length = 0;
gdjs.PvCCode.GDNpcLightObjects3.length = 0;
gdjs.PvCCode.GDNpcLightObjects4.length = 0;

gdjs.PvCCode.eventsList16(runtimeScene);

return;

}

gdjs['PvCCode'] = gdjs.PvCCode;
