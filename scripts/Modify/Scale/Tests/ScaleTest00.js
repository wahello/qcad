/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Modify/Scale/Tests/ScaleTest00.js
// Timestamp   : 2011-08-15 11:03:21
// Description : scaling lines, factor 0.5

include('scripts/Developer/TestingDashboard/TdbTest.js');

function ScaleTest00() {
    TdbTest.call(this, 'scripts/Modify/Scale/Tests/ScaleTest00.js');
}

ScaleTest00.prototype = new TdbTest();

ScaleTest00.prototype.test00 = function() {
    qDebug('running ScaleTest00.test00()...');
    this.setUp();
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(33, 431), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(33, 432), Qt.LeftButton, 0, 0);
    this.importFile('scripts/Modify/Scale/Tests/data/lines.dxf');
    this.setZoom(4.910179640718563, new RVector(0.0256098, -7.71341, 0) );
    var p = new RVector(20.747561, 14.637805);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.triggerCommand('scale');
    this.setZoom(4.910179640718563, new RVector(0.0256098, -7.71341, 0) );
    var p = new RVector(89.787805, 89.787805);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.dlgStart();
    this.dlgAppendCode('var map = new MapCompat()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/groupBox', 'KeepOriginal')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/NumberOfCopies',  [ 2, 0 ] )");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/FactorX',  [ 0.5, 0 ] )");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/KeepProportions', true)");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/FactorY',  [ 0.5, 0 ] )");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/FactorByMouse', false)");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/UseCurrentAttributes', false)");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('ScaleTest00_000.dxf');
    this.tearDown();
    qDebug('finished ScaleTest00.test00()');
};

