var wms_layers = [];


        var lyr_Streets_0 = new ol.layer.Tile({
            'title': 'Streets',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://api.maptiler.com/maps/streets-v4/tiles.json?key=8PtesD5ImHtJPuZawmPa"><a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a></a>',
                url: 'https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}@2x.png?key=8PtesD5ImHtJPuZawmPa'
            })
        });
var format_PrimtrePIG_Pacte_1 = new ol.format.GeoJSON();
var features_PrimtrePIG_Pacte_1 = format_PrimtrePIG_Pacte_1.readFeatures(json_PrimtrePIG_Pacte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimtrePIG_Pacte_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtrePIG_Pacte_1.addFeatures(features_PrimtrePIG_Pacte_1);
var lyr_PrimtrePIG_Pacte_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimtrePIG_Pacte_1, 
                style: style_PrimtrePIG_Pacte_1,
                popuplayertitle: 'Périmètre PIG_Pacte',
                interactive: false,
    title: 'Périmètre PIG_Pacte<br />\
    <img src="styles/legend/PrimtrePIG_Pacte_1_0.png" /> 2023-oct2026 Programme d\'intérêt général avec secteurs renforcés sur le Pays d\'Aix<br />\
    <img src="styles/legend/PrimtrePIG_Pacte_1_1.png" /> Pacte territorial (2025-2029)<br />\
    <img src="styles/legend/PrimtrePIG_Pacte_1_2.png" /> 2022-nov2027 Programme d’intérêt Général à secteurs renforcés pour la réhabilitation des logements privés<br />' });
var format_OprateursPIG_2 = new ol.format.GeoJSON();
var features_OprateursPIG_2 = format_OprateursPIG_2.readFeatures(json_OprateursPIG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OprateursPIG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OprateursPIG_2.addFeatures(features_OprateursPIG_2);
var lyr_OprateursPIG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OprateursPIG_2, 
                style: style_OprateursPIG_2,
                popuplayertitle: 'Opérateurs PIG',
                interactive: true,
    title: 'Opérateurs PIG<br />\
    <img src="styles/legend/OprateursPIG_2_0.png" /> ADRIM<br />\
    <img src="styles/legend/OprateursPIG_2_1.png" /> ETH<br />\
    <img src="styles/legend/OprateursPIG_2_2.png" /> SOLIHA<br />' });
var format_PrimtreSPR_3 = new ol.format.GeoJSON();
var features_PrimtreSPR_3 = format_PrimtreSPR_3.readFeatures(json_PrimtreSPR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimtreSPR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtreSPR_3.addFeatures(features_PrimtreSPR_3);
var lyr_PrimtreSPR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimtreSPR_3, 
                style: style_PrimtreSPR_3,
                popuplayertitle: 'Périmètre SPR ',
                interactive: false,
                title: '<img src="styles/legend/PrimtreSPR_3.png" /> Périmètre SPR '
            });
var format_V1Primtredesbtimentshistoriques_4 = new ol.format.GeoJSON();
var features_V1Primtredesbtimentshistoriques_4 = format_V1Primtredesbtimentshistoriques_4.readFeatures(json_V1Primtredesbtimentshistoriques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V1Primtredesbtimentshistoriques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V1Primtredesbtimentshistoriques_4.addFeatures(features_V1Primtredesbtimentshistoriques_4);
var lyr_V1Primtredesbtimentshistoriques_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_V1Primtredesbtimentshistoriques_4, 
                style: style_V1Primtredesbtimentshistoriques_4,
                popuplayertitle: 'V1 Périmètre des bâtiments historiques',
                interactive: false,
                title: '<img src="styles/legend/V1Primtredesbtimentshistoriques_4.png" /> V1 Périmètre des bâtiments historiques'
            });
var format_PermisdelouerhorsOPAH_5 = new ol.format.GeoJSON();
var features_PermisdelouerhorsOPAH_5 = format_PermisdelouerhorsOPAH_5.readFeatures(json_PermisdelouerhorsOPAH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermisdelouerhorsOPAH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisdelouerhorsOPAH_5.addFeatures(features_PermisdelouerhorsOPAH_5);
var lyr_PermisdelouerhorsOPAH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisdelouerhorsOPAH_5, 
                style: style_PermisdelouerhorsOPAH_5,
                popuplayertitle: 'Permis de louer hors OPAH ',
                interactive: false,
                title: '<img src="styles/legend/PermisdelouerhorsOPAH_5.png" /> Permis de louer hors OPAH '
            });
var format_PrimtrePDS_6 = new ol.format.GeoJSON();
var features_PrimtrePDS_6 = format_PrimtrePDS_6.readFeatures(json_PrimtrePDS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimtrePDS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtrePDS_6.addFeatures(features_PrimtrePDS_6);
var lyr_PrimtrePDS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimtrePDS_6, 
                style: style_PrimtrePDS_6,
                popuplayertitle: 'Périmètre PDS ',
                interactive: false,
                title: '<img src="styles/legend/PrimtrePDS_6.png" /> Périmètre PDS '
            });
var format_secteurNPNRU_7 = new ol.format.GeoJSON();
var features_secteurNPNRU_7 = format_secteurNPNRU_7.readFeatures(json_secteurNPNRU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secteurNPNRU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteurNPNRU_7.addFeatures(features_secteurNPNRU_7);
var lyr_secteurNPNRU_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secteurNPNRU_7, 
                style: style_secteurNPNRU_7,
                popuplayertitle: 'secteur NPNRU ',
                interactive: false,
                title: '<img src="styles/legend/secteurNPNRU_7.png" /> secteur NPNRU '
            });
var format_OPAHRU_POPAC_8 = new ol.format.GeoJSON();
var features_OPAHRU_POPAC_8 = format_OPAHRU_POPAC_8.readFeatures(json_OPAHRU_POPAC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPAHRU_POPAC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPAHRU_POPAC_8.addFeatures(features_OPAHRU_POPAC_8);
var lyr_OPAHRU_POPAC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPAHRU_POPAC_8, 
                style: style_OPAHRU_POPAC_8,
                popuplayertitle: 'OPAH-RU_POPAC',
                interactive: true,
    title: 'OPAH-RU_POPAC<br />\
    <img src="styles/legend/OPAHRU_POPAC_8_0.png" /> OPAH<br />\
    <img src="styles/legend/OPAHRU_POPAC_8_1.png" /> POPAC<br />' });
var format_RCUNordProjet_9 = new ol.format.GeoJSON();
var features_RCUNordProjet_9 = format_RCUNordProjet_9.readFeatures(json_RCUNordProjet_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCUNordProjet_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCUNordProjet_9.addFeatures(features_RCUNordProjet_9);
var lyr_RCUNordProjet_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCUNordProjet_9, 
                style: style_RCUNordProjet_9,
                popuplayertitle: 'RCU Nord Projet ',
                interactive: false,
                title: '<img src="styles/legend/RCUNordProjet_9.png" /> RCU Nord Projet '
            });
var format_RCUexistant_10 = new ol.format.GeoJSON();
var features_RCUexistant_10 = format_RCUexistant_10.readFeatures(json_RCUexistant_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCUexistant_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCUexistant_10.addFeatures(features_RCUexistant_10);
var lyr_RCUexistant_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCUexistant_10, 
                style: style_RCUexistant_10,
                popuplayertitle: 'RCU existant ',
                interactive: true,
                title: '<img src="styles/legend/RCUexistant_10.png" /> RCU existant '
            });
var format_RuesPEHI_11 = new ol.format.GeoJSON();
var features_RuesPEHI_11 = format_RuesPEHI_11.readFeatures(json_RuesPEHI_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuesPEHI_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuesPEHI_11.addFeatures(features_RuesPEHI_11);
var lyr_RuesPEHI_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuesPEHI_11, 
                style: style_RuesPEHI_11,
                popuplayertitle: 'Rues PEHI ',
                interactive: false,
                title: '<img src="styles/legend/RuesPEHI_11.png" /> Rues PEHI '
            });
var group_RseaudeChaleurUrbain = new ol.layer.Group({
                                layers: [lyr_OPAHRU_POPAC_8,lyr_RCUNordProjet_9,lyr_RCUexistant_10,],
                                fold: 'open',
                                title: 'Réseau de Chaleur Urbain'});
var group_Bonnification20MPRCopro = new ol.layer.Group({
                                layers: [lyr_PrimtrePDS_6,lyr_secteurNPNRU_7,],
                                fold: 'open',
                                title: 'Bonnification 20% MPR Copro'});
var group_Primtresdeprotectionarchitecturale = new ol.layer.Group({
                                layers: [lyr_PrimtreSPR_3,lyr_V1Primtredesbtimentshistoriques_4,],
                                fold: 'open',
                                title: 'Périmètres de protection architecturale'});
var group_Streets = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Streets'});

lyr_Streets_0.setVisible(true);lyr_PrimtrePIG_Pacte_1.setVisible(false);lyr_OprateursPIG_2.setVisible(false);lyr_PrimtreSPR_3.setVisible(false);lyr_V1Primtredesbtimentshistoriques_4.setVisible(false);lyr_PermisdelouerhorsOPAH_5.setVisible(false);lyr_PrimtrePDS_6.setVisible(false);lyr_secteurNPNRU_7.setVisible(true);lyr_OPAHRU_POPAC_8.setVisible(true);lyr_RCUNordProjet_9.setVisible(false);lyr_RCUexistant_10.setVisible(false);lyr_RuesPEHI_11.setVisible(false);
var layersList = [lyr_Streets_0,lyr_PrimtrePIG_Pacte_1,lyr_OprateursPIG_2,group_Primtresdeprotectionarchitecturale,lyr_PermisdelouerhorsOPAH_5,group_Bonnification20MPRCopro,group_RseaudeChaleurUrbain,lyr_RuesPEHI_11];
lyr_PrimtrePIG_Pacte_1.set('fieldAliases', {'fid': 'fid', 'dispositif': 'dispositif', 'typologie': 'typologie', 'nom_conv': 'nom_conv', 'date_sign': 'date_sign', 'date_deb': 'date_deb', 'date_proro': 'date_proro', 'date_fin': 'date_fin', 'commune': 'commune', 'codeinsee': 'codeinsee', 'code_opal': 'code_opal', 'operateur': 'operateur', });
lyr_OprateursPIG_2.set('fieldAliases', {'code_epci': 'code_epci', 'insee_reg': 'insee_reg', 'bv2022_name': 'bv2022_name', 'com_arm_name_lower': 'com_arm_name_lower', 'com_arm_current_code': 'com_arm_current_code', 'com_arm_cv_code': 'com_arm_cv_code', 'com_arm_cateaav2020_code': 'com_arm_cateaav2020_code', 'ze2020_name': 'ze2020_name', 'com_arm_uu2020_status': 'com_arm_uu2020_status', 'year': 'year', 'nom_reg': 'nom_reg', 'com_arm_aav2020_code': 'com_arm_aav2020_code', 'com_arm_area_code': 'com_arm_area_code', 'com_arm_in_ctu': 'com_arm_in_ctu', 'insee_com': 'insee_com', 'com_arm_name': 'com_arm_name', 'nom_com': 'nom_com', 'arrdep_name': 'arrdep_name', 'statut': 'statut', 'insee_com_simple': 'insee_com_simple', 'com_arm_is_mountain_area': 'com_arm_is_mountain_area', 'nom_com_m': 'nom_com_m', 'com_arm_cateaav2020_name': 'com_arm_cateaav2020_name', 'com_arm_uu2020_code': 'com_arm_uu2020_code', 'nom_dep': 'nom_dep', 'bv2022_code': 'bv2022_code', 'com_arm_siren_code': 'com_arm_siren_code', 'ze2020_code': 'ze2020_code', 'insee_dep': 'insee_dep', 'arrdep_code': 'arrdep_code', 'nom_epci': 'nom_epci', 'Opérateur PIG ': 'Opérateur PIG ', 'Coordonnées opérateur': 'Coordonnées opérateur', });
lyr_PrimtreSPR_3.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_V1Primtredesbtimentshistoriques_4.set('fieldAliases', {'reference': 'reference', 'destination_actuelle_de_l_edifice': 'destination_actuelle_de_l_edifice', 'adresse_forme_index': 'adresse_forme_index', 'etablissement_affectataire_de_l_edifice': 'etablissement_affectataire_de_l_edifice', 'autre_appellation_de_l_edifice': 'autre_appellation_de_l_edifice', 'nature_de_la_protection': 'nature_de_la_protection', 'auteur_de_l_edifice': 'auteur_de_l_edifice', 'cadastre': 'cadastre', 'commune_forme_index': 'commune_forme_index', 'copyright': 'copyright', 'type_de_couverture': 'type_de_couverture', 'datation_de_l_edifice': 'datation_de_l_edifice', 'denomination_de_l_edifice': 'denomination_de_l_edifice', 'lieu_de_conservation_d_un_element_architectural_deplace': 'lieu_de_conservation_d_un_element_architectural_deplace', 'description_de_l_edifice': 'description_de_l_edifice', 'dimensions_normalisees_des_edicules_uniquement': 'dimensions_normalisees_des_edicules_uniquement', 'date_de_label': 'date_de_label', 'date_de_la_derniere_mise_a_jour': 'date_de_la_derniere_mise_a_jour', 'date_de_creation_de_la_notice': 'date_de_creation_de_la_notice', 'domaine': 'domaine', 'typologie_du_dossier': 'typologie_du_dossier', 'date_et_typologie_de_la_protection': 'date_et_typologie_de_la_protection', 'departement_format_numerique': 'departement_format_numerique', 'partie_d_elevation_exterieure': 'partie_d_elevation_exterieure', 'source_de_l_energie_utilisee_par_l_edifice': 'source_de_l_energie_utilisee_par_l_edifice', 'emplacement_forme_et_structure_de_l_escalier': 'emplacement_forme_et_structure_de_l_escalier', 'description_de_l_elevation_interieure': 'description_de_l_elevation_interieure', 'etat_de_conservation': 'etat_de_conservation', 'cadre_de_l_etude': 'cadre_de_l_etude', 'genre_du_destinataire': 'genre_du_destinataire', 'historique': 'historique', 'nom_du_cours_d_eau_traversant_ou_bordant_l_edifice': 'nom_du_cours_d_eau_traversant_ou_bordant_l_edifice', 'identifiant_agregee': 'identifiant_agregee', 'cog_insee_lors_de_la_protection': 'cog_insee_lors_de_la_protection', 'justification_attribution': 'justification_attribution', 'justification_de_la_datation': 'justification_de_la_datation', 'liens_externes': 'liens_externes', 'lieudit': 'lieudit', 'lien_vers_la_base_archiv_mh': 'lien_vers_la_base_archiv_mh', 'materiaux_du_gros_oeuvre': 'materiaux_du_gros_oeuvre', 'observations': 'observations', 'precision_affectataire': 'precision_affectataire', 'partie_constituante_non_etudiee': 'partie_constituante_non_etudiee', 'partie_constituante': 'partie_constituante', 'precision_sur_la_denomination': 'precision_sur_la_denomination', 'personnes_liees_a_l_edifice': 'personnes_liees_a_l_edifice', 'typologie_de_plan': 'typologie_de_plan', 'precision_de_la_localisation': 'precision_de_la_localisation', 'precision_de_la_protection': 'precision_de_la_protection', 'description_de_l_iconographie': 'description_de_l_iconographie', 'typologie_de_la_protection': 'typologie_de_la_protection', 'precision_sur_le_statut_de_l_edifice': 'precision_sur_le_statut_de_l_edifice', 'reference_a_un_ensemble': 'reference_a_un_ensemble', 'lien_vers_la_base_joconde': 'lien_vers_la_base_joconde', 'lien_vers_la_base_palissy': 'lien_vers_la_base_palissy', 'references_des_parties_constituantes_etudiees': 'references_des_parties_constituantes_etudiees', 'region': 'region', 'departement_en_lettres': 'departement_en_lettres', 'elements_remarquables_dans_l_edifice': 'elements_remarquables_dans_l_edifice', 'remploi': 'remploi', 'renvoi_vers_une_notice_de_la_base_merimee_ou_palissy': 'renvoi_vers_une_notice_de_la_base_merimee_ou_palissy', 'indexation_iconographique_normalisee': 'indexation_iconographique_normalisee', 'siecle_de_campagne_secondaire_de_construction': 'siecle_de_campagne_secondaire_de_construction', 'siecle_de_la_campagne_principale_de_construction': 'siecle_de_la_campagne_principale_de_construction', 'format_abrege_du_siecle_de_construction': 'format_abrege_du_siecle_de_construction', 'typologie_de_la_zone_de_protection': 'typologie_de_la_zone_de_protection', 'statut_juridique_de_l_edifice': 'statut_juridique_de_l_edifice', 'technique_du_decor_porte_de_l_edifice': 'technique_du_decor_porte_de_l_edifice', 'titre_editorial_de_la_notice': 'titre_editorial_de_la_notice', 'materiaux_de_la_couverture': 'materiaux_de_la_couverture', 'couverts_ou_decouverts_du_jardin_de_l_edifice': 'couverts_ou_decouverts_du_jardin_de_l_edifice', 'vocable_pour_les_edifices_cultuels': 'vocable_pour_les_edifices_cultuels', 'typologie_du_couvrement': 'typologie_du_couvrement', 'adresse_forme_editoriale': 'adresse_forme_editoriale', 'commune_forme_editoriale': 'commune_forme_editoriale', 'coordonnees_au_format_wgs84': 'coordonnees_au_format_wgs84', 'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'departemen': 'departemen', 'commune': 'commune', 'layer': 'layer', 'path': 'path', });
lyr_PermisdelouerhorsOPAH_5.set('fieldAliases', {'secteur': 'secteur', 'codeinsee': 'codeinsee', 'commune': 'commune', 'date_deb': 'date_deb', 'Commentaire': 'Commentaire', });
lyr_PrimtrePDS_6.set('fieldAliases', {'fid': 'fid', 'dispositif': 'dispositif', 'typologie': 'typologie', 'nom_conv': 'nom_conv', 'date_sign': 'date_sign', 'date_deb': 'date_deb', 'date_proro': 'date_proro', 'date_fin': 'date_fin', 'commune': 'commune', 'codeinsee': 'codeinsee', 'code_opal': 'code_opal', 'operateur': 'operateur', });
lyr_secteurNPNRU_7.set('fieldAliases', {'CODE_QP': 'CODE_QP', 'NOM_QP': 'NOM_QP', 'COMMUNE_QP': 'COMMUNE_QP', 'NOM_EPCI': 'NOM_EPCI', 'INTERET': 'INTERET', 'X_ETIQ': 'X_ETIQ', 'Y_ETIQ': 'Y_ETIQ', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', });
lyr_OPAHRU_POPAC_8.set('fieldAliases', {'fid': 'fid', 'dispositif': 'dispositif', 'typologie': 'typologie', 'nom_conv': 'nom_conv', 'date_sign': 'date_sign', 'date_deb': 'date_deb', 'date_proro': 'date_proro', 'date_fin': 'date_fin', 'commune': 'commune', 'codeinsee': 'codeinsee', 'code_opal': 'code_opal', 'operateur': 'operateur', });
lyr_RCUNordProjet_9.set('fieldAliases', {'id_fcu': 'id_fcu', 'name': 'name', });
lyr_RCUexistant_10.set('fieldAliases', {'id_fcu': 'id_fcu', 'name': 'name', 'layer': 'layer', 'path': 'path', });
lyr_RuesPEHI_11.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_PrimtrePIG_Pacte_1.set('fieldImages', {'fid': 'Range', 'dispositif': 'TextEdit', 'typologie': 'TextEdit', 'nom_conv': 'TextEdit', 'date_sign': 'DateTime', 'date_deb': 'DateTime', 'date_proro': 'TextEdit', 'date_fin': 'DateTime', 'commune': 'TextEdit', 'codeinsee': 'TextEdit', 'code_opal': 'TextEdit', 'operateur': 'TextEdit', });
lyr_OprateursPIG_2.set('fieldImages', {'code_epci': 'TextEdit', 'insee_reg': 'TextEdit', 'bv2022_name': 'TextEdit', 'com_arm_name_lower': 'TextEdit', 'com_arm_current_code': 'TextEdit', 'com_arm_cv_code': 'TextEdit', 'com_arm_cateaav2020_code': 'TextEdit', 'ze2020_name': 'TextEdit', 'com_arm_uu2020_status': 'TextEdit', 'year': 'TextEdit', 'nom_reg': 'TextEdit', 'com_arm_aav2020_code': 'TextEdit', 'com_arm_area_code': 'TextEdit', 'com_arm_in_ctu': 'TextEdit', 'insee_com': 'TextEdit', 'com_arm_name': 'TextEdit', 'nom_com': 'TextEdit', 'arrdep_name': 'TextEdit', 'statut': 'TextEdit', 'insee_com_simple': 'TextEdit', 'com_arm_is_mountain_area': 'TextEdit', 'nom_com_m': 'TextEdit', 'com_arm_cateaav2020_name': 'TextEdit', 'com_arm_uu2020_code': 'TextEdit', 'nom_dep': 'TextEdit', 'bv2022_code': 'TextEdit', 'com_arm_siren_code': 'TextEdit', 'ze2020_code': 'TextEdit', 'insee_dep': 'TextEdit', 'arrdep_code': 'TextEdit', 'nom_epci': 'TextEdit', 'Opérateur PIG ': 'TextEdit', 'Coordonnées opérateur': 'TextEdit', });
lyr_PrimtreSPR_3.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_V1Primtredesbtimentshistoriques_4.set('fieldImages', {'reference': 'TextEdit', 'destination_actuelle_de_l_edifice': 'TextEdit', 'adresse_forme_index': 'TextEdit', 'etablissement_affectataire_de_l_edifice': 'TextEdit', 'autre_appellation_de_l_edifice': 'TextEdit', 'nature_de_la_protection': 'TextEdit', 'auteur_de_l_edifice': 'TextEdit', 'cadastre': 'TextEdit', 'commune_forme_index': 'TextEdit', 'copyright': 'TextEdit', 'type_de_couverture': 'TextEdit', 'datation_de_l_edifice': 'TextEdit', 'denomination_de_l_edifice': 'TextEdit', 'lieu_de_conservation_d_un_element_architectural_deplace': 'TextEdit', 'description_de_l_edifice': 'TextEdit', 'dimensions_normalisees_des_edicules_uniquement': 'TextEdit', 'date_de_label': 'TextEdit', 'date_de_la_derniere_mise_a_jour': 'DateTime', 'date_de_creation_de_la_notice': 'DateTime', 'domaine': 'TextEdit', 'typologie_du_dossier': 'TextEdit', 'date_et_typologie_de_la_protection': 'TextEdit', 'departement_format_numerique': 'TextEdit', 'partie_d_elevation_exterieure': 'TextEdit', 'source_de_l_energie_utilisee_par_l_edifice': 'TextEdit', 'emplacement_forme_et_structure_de_l_escalier': 'TextEdit', 'description_de_l_elevation_interieure': 'TextEdit', 'etat_de_conservation': 'TextEdit', 'cadre_de_l_etude': 'TextEdit', 'genre_du_destinataire': 'TextEdit', 'historique': 'TextEdit', 'nom_du_cours_d_eau_traversant_ou_bordant_l_edifice': 'TextEdit', 'identifiant_agregee': 'TextEdit', 'cog_insee_lors_de_la_protection': 'List', 'justification_attribution': 'TextEdit', 'justification_de_la_datation': 'TextEdit', 'liens_externes': 'TextEdit', 'lieudit': 'TextEdit', 'lien_vers_la_base_archiv_mh': 'TextEdit', 'materiaux_du_gros_oeuvre': 'TextEdit', 'observations': 'TextEdit', 'precision_affectataire': 'TextEdit', 'partie_constituante_non_etudiee': 'TextEdit', 'partie_constituante': 'TextEdit', 'precision_sur_la_denomination': 'TextEdit', 'personnes_liees_a_l_edifice': 'TextEdit', 'typologie_de_plan': 'TextEdit', 'precision_de_la_localisation': 'TextEdit', 'precision_de_la_protection': 'TextEdit', 'description_de_l_iconographie': 'TextEdit', 'typologie_de_la_protection': 'TextEdit', 'precision_sur_le_statut_de_l_edifice': 'TextEdit', 'reference_a_un_ensemble': 'TextEdit', 'lien_vers_la_base_joconde': 'TextEdit', 'lien_vers_la_base_palissy': 'TextEdit', 'references_des_parties_constituantes_etudiees': 'TextEdit', 'region': 'TextEdit', 'departement_en_lettres': 'List', 'elements_remarquables_dans_l_edifice': 'TextEdit', 'remploi': 'TextEdit', 'renvoi_vers_une_notice_de_la_base_merimee_ou_palissy': 'TextEdit', 'indexation_iconographique_normalisee': 'TextEdit', 'siecle_de_campagne_secondaire_de_construction': 'TextEdit', 'siecle_de_la_campagne_principale_de_construction': 'TextEdit', 'format_abrege_du_siecle_de_construction': 'TextEdit', 'typologie_de_la_zone_de_protection': 'TextEdit', 'statut_juridique_de_l_edifice': 'TextEdit', 'technique_du_decor_porte_de_l_edifice': 'TextEdit', 'titre_editorial_de_la_notice': 'TextEdit', 'materiaux_de_la_couverture': 'TextEdit', 'couverts_ou_decouverts_du_jardin_de_l_edifice': 'TextEdit', 'vocable_pour_les_edifices_cultuels': 'TextEdit', 'typologie_du_couvrement': 'TextEdit', 'adresse_forme_editoriale': 'TextEdit', 'commune_forme_editoriale': 'TextEdit', 'coordonnees_au_format_wgs84': 'TextEdit', 'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PermisdelouerhorsOPAH_5.set('fieldImages', {'secteur': 'TextEdit', 'codeinsee': 'TextEdit', 'commune': 'TextEdit', 'date_deb': 'DateTime', 'Commentaire': 'TextEdit', });
lyr_PrimtrePDS_6.set('fieldImages', {'fid': 'Range', 'dispositif': 'TextEdit', 'typologie': 'TextEdit', 'nom_conv': 'TextEdit', 'date_sign': 'DateTime', 'date_deb': 'DateTime', 'date_proro': 'TextEdit', 'date_fin': 'DateTime', 'commune': 'TextEdit', 'codeinsee': 'TextEdit', 'code_opal': 'TextEdit', 'operateur': 'TextEdit', });
lyr_secteurNPNRU_7.set('fieldImages', {'CODE_QP': 'TextEdit', 'NOM_QP': 'TextEdit', 'COMMUNE_QP': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'INTERET': 'TextEdit', 'X_ETIQ': 'TextEdit', 'Y_ETIQ': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', });
lyr_OPAHRU_POPAC_8.set('fieldImages', {'fid': 'Range', 'dispositif': 'TextEdit', 'typologie': 'TextEdit', 'nom_conv': 'TextEdit', 'date_sign': 'DateTime', 'date_deb': 'DateTime', 'date_proro': 'TextEdit', 'date_fin': 'DateTime', 'commune': 'TextEdit', 'codeinsee': 'TextEdit', 'code_opal': 'TextEdit', 'operateur': 'TextEdit', });
lyr_RCUNordProjet_9.set('fieldImages', {'id_fcu': 'Range', 'name': 'TextEdit', });
lyr_RCUexistant_10.set('fieldImages', {'id_fcu': 'Range', 'name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_RuesPEHI_11.set('fieldImages', {'fid': 'Range', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'Range', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_PrimtrePIG_Pacte_1.set('fieldLabels', {'fid': 'no label', 'dispositif': 'no label', 'typologie': 'no label', 'nom_conv': 'no label', 'date_sign': 'no label', 'date_deb': 'no label', 'date_proro': 'no label', 'date_fin': 'no label', 'commune': 'no label', 'codeinsee': 'no label', 'code_opal': 'no label', 'operateur': 'no label', });
lyr_OprateursPIG_2.set('fieldLabels', {'code_epci': 'hidden field', 'insee_reg': 'hidden field', 'bv2022_name': 'hidden field', 'com_arm_name_lower': 'hidden field', 'com_arm_current_code': 'hidden field', 'com_arm_cv_code': 'hidden field', 'com_arm_cateaav2020_code': 'hidden field', 'ze2020_name': 'hidden field', 'com_arm_uu2020_status': 'hidden field', 'year': 'hidden field', 'nom_reg': 'hidden field', 'com_arm_aav2020_code': 'hidden field', 'com_arm_area_code': 'hidden field', 'com_arm_in_ctu': 'hidden field', 'insee_com': 'hidden field', 'com_arm_name': 'hidden field', 'nom_com': 'hidden field', 'arrdep_name': 'hidden field', 'statut': 'hidden field', 'insee_com_simple': 'hidden field', 'com_arm_is_mountain_area': 'hidden field', 'nom_com_m': 'hidden field', 'com_arm_cateaav2020_name': 'hidden field', 'com_arm_uu2020_code': 'hidden field', 'nom_dep': 'hidden field', 'bv2022_code': 'hidden field', 'com_arm_siren_code': 'hidden field', 'ze2020_code': 'hidden field', 'insee_dep': 'hidden field', 'arrdep_code': 'hidden field', 'nom_epci': 'hidden field', 'Opérateur PIG ': 'hidden field', 'Coordonnées opérateur': 'inline label - visible with data', });
lyr_PrimtreSPR_3.set('fieldLabels', {'idTigre': 'no label', 'idApp': 'no label', 'appTigre': 'no label', 'type': 'no label', 'parcelle': 'no label', 'appelation': 'no label', 'categorie': 'no label', 'localisati': 'no label', 'ressource': 'no label', 'evenement': 'no label', 'legende': 'no label', 'precision': 'no label', 'statut': 'no label', 'maj': 'no label', 'region': 'no label', 'departemen': 'no label', 'commune': 'no label', });
lyr_V1Primtredesbtimentshistoriques_4.set('fieldLabels', {'reference': 'no label', 'destination_actuelle_de_l_edifice': 'no label', 'adresse_forme_index': 'no label', 'etablissement_affectataire_de_l_edifice': 'no label', 'autre_appellation_de_l_edifice': 'no label', 'nature_de_la_protection': 'no label', 'auteur_de_l_edifice': 'no label', 'cadastre': 'no label', 'commune_forme_index': 'no label', 'copyright': 'no label', 'type_de_couverture': 'no label', 'datation_de_l_edifice': 'no label', 'denomination_de_l_edifice': 'no label', 'lieu_de_conservation_d_un_element_architectural_deplace': 'no label', 'description_de_l_edifice': 'no label', 'dimensions_normalisees_des_edicules_uniquement': 'no label', 'date_de_label': 'no label', 'date_de_la_derniere_mise_a_jour': 'no label', 'date_de_creation_de_la_notice': 'no label', 'domaine': 'no label', 'typologie_du_dossier': 'no label', 'date_et_typologie_de_la_protection': 'no label', 'departement_format_numerique': 'no label', 'partie_d_elevation_exterieure': 'no label', 'source_de_l_energie_utilisee_par_l_edifice': 'no label', 'emplacement_forme_et_structure_de_l_escalier': 'no label', 'description_de_l_elevation_interieure': 'no label', 'etat_de_conservation': 'no label', 'cadre_de_l_etude': 'no label', 'genre_du_destinataire': 'no label', 'historique': 'no label', 'nom_du_cours_d_eau_traversant_ou_bordant_l_edifice': 'no label', 'identifiant_agregee': 'no label', 'cog_insee_lors_de_la_protection': 'no label', 'justification_attribution': 'no label', 'justification_de_la_datation': 'no label', 'liens_externes': 'no label', 'lieudit': 'no label', 'lien_vers_la_base_archiv_mh': 'no label', 'materiaux_du_gros_oeuvre': 'no label', 'observations': 'no label', 'precision_affectataire': 'no label', 'partie_constituante_non_etudiee': 'no label', 'partie_constituante': 'no label', 'precision_sur_la_denomination': 'no label', 'personnes_liees_a_l_edifice': 'no label', 'typologie_de_plan': 'no label', 'precision_de_la_localisation': 'no label', 'precision_de_la_protection': 'no label', 'description_de_l_iconographie': 'no label', 'typologie_de_la_protection': 'no label', 'precision_sur_le_statut_de_l_edifice': 'no label', 'reference_a_un_ensemble': 'no label', 'lien_vers_la_base_joconde': 'no label', 'lien_vers_la_base_palissy': 'no label', 'references_des_parties_constituantes_etudiees': 'no label', 'region': 'no label', 'departement_en_lettres': 'no label', 'elements_remarquables_dans_l_edifice': 'no label', 'remploi': 'no label', 'renvoi_vers_une_notice_de_la_base_merimee_ou_palissy': 'no label', 'indexation_iconographique_normalisee': 'no label', 'siecle_de_campagne_secondaire_de_construction': 'no label', 'siecle_de_la_campagne_principale_de_construction': 'no label', 'format_abrege_du_siecle_de_construction': 'no label', 'typologie_de_la_zone_de_protection': 'no label', 'statut_juridique_de_l_edifice': 'no label', 'technique_du_decor_porte_de_l_edifice': 'no label', 'titre_editorial_de_la_notice': 'no label', 'materiaux_de_la_couverture': 'no label', 'couverts_ou_decouverts_du_jardin_de_l_edifice': 'no label', 'vocable_pour_les_edifices_cultuels': 'no label', 'typologie_du_couvrement': 'no label', 'adresse_forme_editoriale': 'no label', 'commune_forme_editoriale': 'no label', 'coordonnees_au_format_wgs84': 'no label', 'idTigre': 'no label', 'idApp': 'no label', 'appTigre': 'no label', 'type': 'no label', 'parcelle': 'no label', 'appelation': 'no label', 'categorie': 'no label', 'localisati': 'no label', 'ressource': 'no label', 'evenement': 'no label', 'legende': 'no label', 'precision': 'no label', 'statut': 'no label', 'maj': 'no label', 'departemen': 'no label', 'commune': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PermisdelouerhorsOPAH_5.set('fieldLabels', {'secteur': 'no label', 'codeinsee': 'no label', 'commune': 'no label', 'date_deb': 'no label', 'Commentaire': 'no label', });
lyr_PrimtrePDS_6.set('fieldLabels', {'fid': 'no label', 'dispositif': 'no label', 'typologie': 'no label', 'nom_conv': 'no label', 'date_sign': 'no label', 'date_deb': 'no label', 'date_proro': 'no label', 'date_fin': 'no label', 'commune': 'no label', 'codeinsee': 'no label', 'code_opal': 'no label', 'operateur': 'no label', });
lyr_secteurNPNRU_7.set('fieldLabels', {'CODE_QP': 'no label', 'NOM_QP': 'no label', 'COMMUNE_QP': 'no label', 'NOM_EPCI': 'no label', 'INTERET': 'no label', 'X_ETIQ': 'no label', 'Y_ETIQ': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', });
lyr_OPAHRU_POPAC_8.set('fieldLabels', {'fid': 'hidden field', 'dispositif': 'hidden field', 'typologie': 'hidden field', 'nom_conv': 'hidden field', 'date_sign': 'hidden field', 'date_deb': 'hidden field', 'date_proro': 'hidden field', 'date_fin': 'inline label - visible with data', 'commune': 'hidden field', 'codeinsee': 'hidden field', 'code_opal': 'hidden field', 'operateur': 'inline label - visible with data', });
lyr_RCUNordProjet_9.set('fieldLabels', {'id_fcu': 'no label', 'name': 'no label', });
lyr_RCUexistant_10.set('fieldLabels', {'id_fcu': 'no label', 'name': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_RuesPEHI_11.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_RuesPEHI_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
