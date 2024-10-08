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
// File        : scripts/Draw/Hatch/HatchFromSelection/Tests/HatchFromSelectionTest02.js
// Timestamp   : 2011-08-16 14:54:19
// Description : contour, solid fill

include('scripts/Developer/TestingDashboard/TdbTest.js');

function HatchFromSelectionTest02() {
    TdbTest.call(this, 'scripts/Draw/Hatch/HatchFromSelection/Tests/HatchFromSelectionTest02.js');
}

HatchFromSelectionTest02.prototype = new TdbTest();

HatchFromSelectionTest02.prototype.test00 = function() {
    qDebug('running HatchFromSelectionTest02.test00()...');
    this.setUp();
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(58, 381), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(58, 381), Qt.LeftButton, 0, 0);
    this.importFile('scripts/Draw/Hatch/HatchFromSelection/Tests/data/contour.dxf');
    this.selectAll();
    this.dlgStart();
    this.dlgAppendCode('var map = new MapCompat()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Type', 'SolidFill')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Pattern', 'HOUND')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Scale',  [ 0.5, 0 ] )");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Angle',  [ 15, 0 ] )");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    this.clickOnWidget('MainWindow::MainToolsPanel::HatchToolsPanelButton');
    this.clickOnWidget('MainWindow::HatchToolsPanel::HatchFromSelectionButton');
    this.verifyDrawing('HatchFromSelectionTest02_000.dxf');
    this.tearDown();
    qDebug('finished HatchFromSelectionTest02.test00()');
};

