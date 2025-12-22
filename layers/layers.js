var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'GoogleSatelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Desa_2 = new ol.format.GeoJSON();
var features_Desa_2 = format_Desa_2.readFeatures(json_Desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_2.addFeatures(features_Desa_2);
var lyr_Desa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_2, 
                style: style_Desa_2,
                popuplayertitle: 'Desa',
                interactive: true,
    title: 'Desa<br />\
    <img src="styles/legend/Desa_2_0.png" /> Kalibagor<br />\
    <img src="styles/legend/Desa_2_1.png" /> Kalicupak Kidul<br />\
    <img src="styles/legend/Desa_2_2.png" /> Kalicupak Lor<br />\
    <img src="styles/legend/Desa_2_3.png" /> Kaliori<br />\
    <img src="styles/legend/Desa_2_4.png" /> Kalisogra Wetan<br />\
    <img src="styles/legend/Desa_2_5.png" /> Karangdadap<br />\
    <img src="styles/legend/Desa_2_6.png" /> Pajerukan<br />\
    <img src="styles/legend/Desa_2_7.png" /> Pekaja<br />\
    <img src="styles/legend/Desa_2_8.png" /> Petir<br />\
    <img src="styles/legend/Desa_2_9.png" /> Srowot<br />\
    <img src="styles/legend/Desa_2_10.png" /> Suro<br />\
    <img src="styles/legend/Desa_2_11.png" /> Wlahar Wetan<br />' });
var format_Kuliner_3 = new ol.format.GeoJSON();
var features_Kuliner_3 = format_Kuliner_3.readFeatures(json_Kuliner_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuliner_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuliner_3.addFeatures(features_Kuliner_3);
var lyr_Kuliner_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuliner_3, 
                style: style_Kuliner_3,
                popuplayertitle: 'Kuliner',
                interactive: true,
                title: '<img src="styles/legend/Kuliner_3.png" /> Kuliner'
            });
var format_JalanRW_4 = new ol.format.GeoJSON();
var features_JalanRW_4 = format_JalanRW_4.readFeatures(json_JalanRW_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRW_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRW_4.addFeatures(features_JalanRW_4);
var lyr_JalanRW_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRW_4, 
                style: style_JalanRW_4,
                popuplayertitle: 'Jalan RW',
                interactive: true,
                title: '<img src="styles/legend/JalanRW_4.png" /> Jalan RW'
            });
var format_JalanRT_5 = new ol.format.GeoJSON();
var features_JalanRT_5 = format_JalanRT_5.readFeatures(json_JalanRT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRT_5.addFeatures(features_JalanRT_5);
var lyr_JalanRT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRT_5, 
                style: style_JalanRT_5,
                popuplayertitle: 'Jalan RT',
                interactive: true,
                title: '<img src="styles/legend/JalanRT_5.png" /> Jalan RT'
            });
var format_TempatIbadah_6 = new ol.format.GeoJSON();
var features_TempatIbadah_6 = format_TempatIbadah_6.readFeatures(json_TempatIbadah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_6.addFeatures(features_TempatIbadah_6);
var lyr_TempatIbadah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_6, 
                style: style_TempatIbadah_6,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_6.png" /> Tempat Ibadah'
            });
var format_Sekolah_7 = new ol.format.GeoJSON();
var features_Sekolah_7 = format_Sekolah_7.readFeatures(json_Sekolah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_7.addFeatures(features_Sekolah_7);
var lyr_Sekolah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_7, 
                style: style_Sekolah_7,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_7.png" /> Sekolah'
            });
var format_KantorPemerintahan_8 = new ol.format.GeoJSON();
var features_KantorPemerintahan_8 = format_KantorPemerintahan_8.readFeatures(json_KantorPemerintahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPemerintahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPemerintahan_8.addFeatures(features_KantorPemerintahan_8);
var lyr_KantorPemerintahan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorPemerintahan_8, 
                style: style_KantorPemerintahan_8,
                popuplayertitle: 'Kantor Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/KantorPemerintahan_8.png" /> Kantor Pemerintahan'
            });
var format_JalanProvinsi_9 = new ol.format.GeoJSON();
var features_JalanProvinsi_9 = format_JalanProvinsi_9.readFeatures(json_JalanProvinsi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanProvinsi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanProvinsi_9.addFeatures(features_JalanProvinsi_9);
var lyr_JalanProvinsi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanProvinsi_9, 
                style: style_JalanProvinsi_9,
                popuplayertitle: 'Jalan Provinsi',
                interactive: true,
                title: '<img src="styles/legend/JalanProvinsi_9.png" /> Jalan Provinsi'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_Desa_2.setVisible(true);lyr_Kuliner_3.setVisible(true);lyr_JalanRW_4.setVisible(true);lyr_JalanRT_5.setVisible(true);lyr_TempatIbadah_6.setVisible(true);lyr_Sekolah_7.setVisible(true);lyr_KantorPemerintahan_8.setVisible(true);lyr_JalanProvinsi_9.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelite_1,lyr_Desa_2,lyr_Kuliner_3,lyr_JalanRW_4,lyr_JalanRT_5,lyr_TempatIbadah_6,lyr_Sekolah_7,lyr_KantorPemerintahan_8,lyr_JalanProvinsi_9];
lyr_Desa_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Kuliner_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanRW_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis Jala': 'Jenis Jala', 'Lebar': 'Lebar', 'Permukaan': 'Permukaan', 'Kondisi': 'Kondisi', 'Status': 'Status', });
lyr_JalanRT_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatIbadah_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sekolah_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KantorPemerintahan_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanProvinsi_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Desa_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Kuliner_3.set('fieldImages', {'id': '', 'Nama': '', });
lyr_JalanRW_4.set('fieldImages', {'id': '', 'Nama': '', 'Jenis Jala': '', 'Lebar': '', 'Permukaan': '', 'Kondisi': '', 'Status': '', });
lyr_JalanRT_5.set('fieldImages', {'id': '', 'Nama': '', });
lyr_TempatIbadah_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sekolah_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_KantorPemerintahan_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JalanProvinsi_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Desa_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Kuliner_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_JalanRW_4.set('fieldLabels', {'id': 'header label - visible with data', 'Nama': 'inline label - always visible', 'Jenis Jala': 'no label', 'Lebar': 'no label', 'Permukaan': 'no label', 'Kondisi': 'no label', 'Status': 'no label', });
lyr_JalanRT_5.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_TempatIbadah_6.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_Sekolah_7.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_KantorPemerintahan_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_JalanProvinsi_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_JalanProvinsi_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});