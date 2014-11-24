/**
 * Copyright (c) 2011-2014 by Andrew Mustun. All rights reserved.
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
#ifndef RARCEXPORTER_H
#define RARCEXPORTER_H

#include "RArc.h"
#include "RExporter.h"

class RArcExporter : public RExporter {
public:
    RArcExporter(RExporter& exporter, const RArc& arc, double offset, bool firstOrLast);
    virtual void exportLineSegment(const RLine& line, double angle = RNANDOUBLE);
    //virtual void exportLinetypeShape(QList<RPainterPath>& pps, const RLine& line, double total, double length, bool optimizeEnds, double angle, const RVector& cursor);

    virtual RLinetypePattern getLinetypePattern() {
        return exporter.getLinetypePattern();
    }
    double getLineTypePatternScale(const RLinetypePattern& p) const {
        return exporter.getLineTypePatternScale(p);
    }

    virtual void exportPainterPaths(const QList<RPainterPath>& paths) {
        exporter.exportPainterPaths(paths);
    }

    virtual void exportPainterPaths(const QList<RPainterPath>& paths, double angle, const RVector& pos);

    virtual void exportXLine(const RXLine& xLine) {}
    virtual void exportRay(const RRay& ray) {}
    virtual void exportPoint(const RPoint& point) {}
    virtual void exportTriangle(const RTriangle& triangle) {}

private:
    RExporter& exporter;
    RArc arc;
};

#endif
