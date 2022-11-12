tags_category = {
    "Electricity": ['#powergenerator', '#electrical', '#blackout', '#nopower', '#inverter', '#businessbackup',
                    '#generatorsales', '#backupgenerator', '#kva', '#energysales', '#checkusout', '#kw',
                    ' #noelectricity', '#invertergenerator', '#backuppower', '#solarenergy', '#storm',
                    '#belafontelifestyle', '#mumbaipowercut', '#theblacktour', '#marketingmercenary',
                    '#dieselgenerator', '#powerout', '#barrybelafonte', '#genset'],

    "Water": ['#watercrisis', '#dranagewater','#health', '#india', '#water', '#rain', '#ecofriendly', '#environment',
              '#zerowaste', '#gogreen', '#bethechange', '#sustainableliving', '#climatechange',
              '#savetheplanet', '#dogood'],

    "Air": ['#airpollution', '#pollution', '#environment', '#climatechange', '#cleanair', '#airquality',
            '#saveearth', '#nature', '#india', '#globalwarming', '#savetheplanet', '#pollutionfree',
            '#gogreen', '#ecofriendly', '#delhipollution', '#earth'],

    "Road": ['#roads', '#travelgram', '#night', '#india', '#trip', '#wanderlust']

}


def category(stm):
    cat = ""
    if (('elec' in stm) or ('pow' in stm)):
        cat = "Electricity"
    if (('wat' in stm) or ('pani' in stm)):
        cat = "Water"
    if (('air' in stm) or ('hawa' in stm)):
        cat = "Air"
    if (('roa' in stm) or ('sadak' in stm)):
        cat = "Road"
    return cat
