import dice from './dice';

var urls = [
    "https://www.zeit.de/politik/ausland/2019-11/gaza-raketen-israel-luftwaffe-nahost-konflikt",
    "https://www.zeit.de/politik/deutschland/2019-11/stephan-brandner-afd-abwahl-rechtsausschuss-bundestag",
    "https://www.zeit.de/politik/ausland/2019-11/hongkong-protest-verkehr-schulschliessung-demonstrationen",
    "https://www.zeit.de/politik/deutschland/2019-11/klimaschutz-wohngeld-heizkosten-sozialvertraeglichkeit-bundesregierung",
    "https://www.zeit.de/politik/ausland/2019-11/impeachment-anhoerungen-donald-trump-ukraine-affaere",
    "https://www.zeit.de/politik/ausland/2019-11/katalonien-blockade-autobahn-separatismus-proteste",
    "https://www.zeit.de/politik/deutschland/2019-11/airbus-a400m-bundeswehr-maengel-truppentransporter",
    "https://www.zeit.de/politik/ausland/2019-11/adam-schiff-impeachment-donald-trump-usa",
    "https://www.zeit.de/politik/deutschland/2019-11/stephan-brandner-als-vorsitzender-des-rechtsausschusses-abgewaehlt",
    "https://www.zeit.de/gesellschaft/schule/2019-11/grundschule-ganztagsbetreuung-rechtsanspruch-bildung-bundesregierung",
    "https://www.zeit.de/politik/deutschland/2019-11/verteidigungsministerin-bundeswehr-annegret-kramp-karrenbauer",
    "https://www.zeit.de/politik/ausland/2019-11/nordsyrien-al-hasaka-kurden-flucht-tuerkei",
    "https://www.zeit.de/politik/deutschland/2019-11/waffenindustrie-ruestungsexporte-deutschland-genehmigungen-anstieg-2",
    "https://www.zeit.de/politik/ausland/2019-11/usa-grenzschutz-smartphones-durchsuchungen-bundesgericht-urteil",
    "https://www.zeit.de/politik/ausland/2019-11/nato-emmanuel-macron-europa-verteidigungspolitik",
    "https://www.zeit.de/politik/2019-11/nachrichtenpodcast-was-jetzt-13-11-19",
    "https://www.zeit.de/politik/deutschland/2019-11/spd-vorsitz-stichwahl-doppelspitze-kandidaten",
    "https://www.zeit.de/politik/ausland/2019-11/einwanderung-dreamers-usa-daca-donald-trump",
    "https://www.zeit.de/politik/ausland/2019-11/chile-demonstrationen-streik-regierung",
    "https://www.zeit.de/politik/deutschland/2019-11/sigmar-gabriel-ex-spd-chef-eurasia-group-job",
    "https://www.zeit.de/politik/deutschland/2019-11/wagenknecht-nachfolge-die-linke-linksfraktion-bundestag",
    "https://www.zeit.de/politik/deutschland/2019-11/linke-amira-mohamed-ali-ist-neue-co-chefin-der-bundestagsfraktion",
    "https://www.zeit.de/politik/ausland/2019-11/nato-europa-militaerbuendnis-sicherheitspolitik",
    "https://www.zeit.de/wirtschaft/2019-11/handelsstreit-usa-eu-autozoelle-donald-trump",
    "https://www.zeit.de/politik/ausland/2019-11/bolivien-evo-morales-praesident-asyl-mexiko",
    "https://www.zeit.de/politik/ausland/2019-11/gaza-israel-raketenangriffe-nahost-konflikt",
    "https://www.zeit.de/politik/ausland/2019-11/donald-trump-amtsenthebungsverfahren-impeachment-usa-wahl",
    "https://www.zeit.de/gesellschaft/2019-11/hochwasser-venedig-unwetter-italien-touristen-fs",
    "https://www.zeit.de/gesellschaft/2019-11/felix-klein-antisemitismus-bestrafung-judenfeindlichkeit-strafgesetzbuch",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/berlin-hohenschoenhausen-stasi-gedenkstaette-kuendigung-vizedirektor-arbeitsgericht",
    "https://www.zeit.de/gesellschaft/schule/2019-11/grundschule-ganztagsbetreuung-rechtsanspruch-bildung-bundesregierung",
    "https://www.zeit.de/angebote/verantwortung-verbindet/index",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/menschenschmuggel-schleuser-migration-razzia-bundespolizei",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/italien-venedig-hochwasser-acqua-alta-rekord",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/fridays-for-future-greta-thunberg-weltklimakonferenz-madrid-reise",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/george-pell-kardinal-australien-missbrauch-urteil-einspruch",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/meinungsfreiheit-ddr-pressefreiheit-ostdeutschland-uschi-bruening",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/justizopfer-gustl-mollath-bayern-freistaat-einigung",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/kindesmissbrauch-evangelische-kirche-aufarbeitung-sexueller-missbrauch",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/wolfgang-schaeuble-bundeswehr-gruendungstag-annegret-kramp-karrenbauer",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/australien-braende-buschfeuer-sydney-fs",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/eugh-urteil-asylunterkuenfte-bewohner-gewalt-lebensstandard",
    "https://www.zeit.de/gesellschaft/2019-11/offenbach-islamismus-is-anschlag-festnahme-hessen",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/islamischer-staat-tuerkei-abschiebung-niedersachsen-familie",
    "https://www.zeit.de/gesellschaft/zeitgeschehen/2019-11/hongkong-demonstration-gewalt-reaktion-usa-morgan-ortagus",
    "https://www.zeit.de/gesellschaft/schule/2019-11/digitalisierung-bildung-schule-technik-birigt-eickelmann-studie",
    "https://www.zeit.de/gesellschaft/schule/2019-11/digitale-bildung-digitalkompetenz-jugendliche-icils-studie",
    "https://www.zeit.de/2019/45/oeffentliche-schulen-usa-spenden-schulsystem",
    "https://www.zeit.de/gesellschaft/familie/2019-11/wednesday-martin-autorin-frauen-sexualitaet-untreue",
    "https://www.zeit.de/gesellschaft/familie/2019-11/pflegekinder-kostenheranziehung-auszubildende-selbststaendigkeit-unzufriedenheit",
    "https://www.zeit.de/gesellschaft/schule/2019-10/vorlesestudie-buecher-kinder-erziehung-vorlesen",
    "https://www.zeit.de/wirtschaft/unternehmen/2019-11/elektromobilitaet-tesla-dietmar-woidke-foerdermittel-eu",
    "https://www.zeit.de/wirtschaft/unternehmen/2019-11/elektroauto-tesla-brandenburg-grossfabrik-peter-altmaier",
    "https://www.zeit.de/wirtschaft/2019-11/statitisches-bundesamt-inflation-teuerungsrate-verbraucherpreise-ezb",
    "https://www.zeit.de/wirtschaft/2019-11/isabel-schnabel-ezb-einlagensicherung-banken-eu",
    "https://www.zeit.de/wirtschaft/unternehmen/2019-11/elon-musk-tesla-gigafactory-berlin-brandenburg",
    "https://www.zeit.de/wirtschaft/unternehmen/2019-11/flugbegleiter-streik-lufthansa-ufo-gewerkschaft-schlichtung",
    "https://www.zeit.de/wirtschaft/unternehmen/2019-11/volkswagen-vw-manager-untreue-staatsanwaltschaft",
    "https://www.zeit.de/wirtschaft/unternehmen/2019-11/reiseveranstalter-thomas-cook-insolvenz-reisen-absage",
    "https://www.zeit.de/wirtschaft/2019-11/westjordanland-siedlerprodukte-kennzeichnung-israel-eugh",
    "https://www.zeit.de/wirtschaft/2019-11/bgh-urteil-mietspiegel-mieterhoehung",
    "https://www.zeit.de/2019/46/us-diplomat-christopher-ford-huawei-5g-netz",
    "https://www.zeit.de/wirtschaft/unternehmen/2019-11/american-airlines-boeing-737-max-flugbetrieb-aufschub",
    "https://www.zeit.de/wirtschaft/unternehmen/2019-11/enercon-windindustrie-stellenabbau-energiepolitik-windkraftanlagen",
    "https://www.zeit.de/wirtschaft/geldanlage/2019-11/europaeische-zentralbank-ezb-praesidentin-christine-lagarde-geldpolitik",
    "https://www.zeit.de/2019/41/geldpolitik-zinsen-sparen-ezb-mario-draghi",
    "https://www.zeit.de/wirtschaft/geldanlage/2019-09/finanzaufsicht-kundenbeschwerden-banken-rekordwert"
];

(function () {
    var acceptedUrls = [];
    for (var i = 0; i < urls.length; i++) {
        var url = urls[i];
        if (dice(url, 3)) {
            console.log('yep', url);
            acceptedUrls.push(url);
        } else {
            console.log('no', url);
        }
    }
    console.log('urls total', urls.length);
    console.log('accepted urls', acceptedUrls.length);
})();