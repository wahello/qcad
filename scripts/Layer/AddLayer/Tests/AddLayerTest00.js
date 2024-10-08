// Auto generated by Testing Dashboard
// File        : scripts/Layer/AddLayer/Tests/AddLayerTest00.js
// Timestamp   : 2015-04-22 09:55:05
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function AddLayerTest00() {
    TdbTest.call(this, 'scripts/Layer/AddLayer/Tests/AddLayerTest00.js');
}

AddLayerTest00.prototype = new TdbTest();

AddLayerTest00.prototype.test00 = function() {
    qDebug('running AddLayerTest00.test00()...');
    this.setUp();
    this.dlgStart();
    this.dlgAppendCode('var map = new MapCompat()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/LayerName', 'layer 1')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Color', new RColor(0,0,0,255,RColor.Fixed))");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Lineweight', 25)");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Linetype', new RLinetypePattern(true,'Continuous','Solid line',[]))");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Parent', '')");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    TdbTest.clickOnWidget('MainWindow::LayerListProDock::LayerWidgetPro::Add');
    this.verifyDrawing('AddLayerTest00_000.dxf');
    this.tearDown();
    qDebug('finished AddLayerTest00.test00()');
};

