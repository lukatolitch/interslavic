import { parseIntelligibility } from './parseIntelligibility';

test.each([
  [''],
  ['#ru cz'],
  ['#v'],
  ['#yu'],
  ['be'],
  ['be cs j'],
  ['be cs sh'],
  ['be pl'],
  ['be pl cs'],
  ['be pl sh bm'],
  ['be pl sh mk'],
  ['be pl sk bg'],
  ['be sh bm cu'],
  ['be z'],
  ['be z j'],
  ['be z ru~ uk~'],
  ['be z sh bg'],
  ['be z sh mk'],
  ['be z sl'],
  ['be z yu'],
  ['be z yu mk'],
  ['be~ z'],
  ['bg'],
  ['bg ru~ sh~ mk~'],
  ['bm'],
  ['cs'],
  ['cs bg'],
  ['cs bm'],
  ['cs hsb'],
  ['cs hsb yu cu'],
  ['cs j'],
  ['cs j cu'],
  ['cs ps'],
  ['cs rue'],
  ['cs sb j'],
  ['cs sb sl'],
  ['cs sb yu mk'],
  ['cs sh'],
  ['cs sh bm'],
  ['cs sh bm sb'],
  ['cs sh mk'],
  ['cs sh~ bg~'],
  ['cs sl'],
  ['cs sl bm'],
  ['cs sl csb sb'],
  ['cs sl cu'],
  ['cs sl hsb rue'],
  ['cs sl mk'],
  ['cs sl rue'],
  ['cs sl sb'],
  ['cs yu'],
  ['cs yu cu'],
  ['cs yu mk'],
  ['cs yu mk (pl)'],
  ['cs~ j'],
  ['cs~ sl sh~ mk~ bg'],
  ['cs~ yu'],
  ['cs~ yu mk'],
  ['cu'],
  ['cz'],
  ['cz j'],
  ['cz ps'],
  ['cz sh'],
  ['cz sh bm'],
  ['cz sl hr'],
  ['cz yu'],
  ['cz~ sk'],
  ['cz~ sk sl sh'],
  ['cz~ sk yu'],
  ['dsb'],
  ['hsb'],
  ['j'],
  ['j z'],
  ['j+z'],
  ['mk'],
  ['n'],
  ['ns'],
  ['pl'],
  ['pl bg'],
  ['pl cs sl'],
  ['pl cz'],
  ['pl cz sh'],
  ['pl cz yu mk'],
  ['pl j'],
  ['pl sh'],
  ['pl sh bm'],
  ['pl sh mk'],
  ['pl sk j'],
  ['pl sk sh'],
  ['pl sk yu'],
  ['pl sl'],
  ['pl sl bg'],
  ['pl uk'],
  ['pl yu'],
  ['pl yu bg'],
  ['pl yu mk'],
  ['pl~ cs yu'],
  ['pl~ cs yu~'],
  ['pl~ cz sh'],
  ['pl~ sb~ cs'],
  ['pl~ sl'],
  ['ru'],
  ['ru (cz sh)'],
  ['ru (sh)'],
  ['ru be'],
  ['ru be bg'],
  ['ru be bm'],
  ['ru be cs'],
  ['ru be cs j'],
  ['ru be cs sh bm'],
  ['ru be cs sr bm'],
  ['ru be cz bm'],
  ['ru be cz sl bg'],
  ['ru be cz sl mk bg'],
  ['ru be dsb sk sl'],
  ['ru be dsb yu bg'],
  ['ru be j'],
  ['ru be j~'],
  ['ru be pl'],
  ['ru be pl bm'],
  ['ru be pl cs bg'],
  ['ru be pl cz'],
  ['ru be pl sh'],
  ['ru be pl sh bm'],
  ['ru be sh'],
  ['ru be sh bm'],
  ['ru be sh bm uk~'],
  ['ru be sh mk'],
  ['ru be sk bg'],
  ['ru be sl bg'],
  ['ru be yu mk'],
  ['ru be z'],
  ['ru be z j'],
  ['ru be z sh'],
  ['ru be z yu mk'],
  ['ru bg'],
  ['ru bg cs~'],
  ['ru bg cu'],
  ['ru bm'],
  ['ru bm sb'],
  ['ru cs'],
  ['ru cs (sh)'],
  ['ru cs bg'],
  ['ru cs bg cu'],
  ['ru cs j'],
  ['ru cs sb'],
  ['ru cs sh'],
  ['ru cs sh bm'],
  ['ru cs sh mk'],
  ['ru cs sl'],
  ['ru cs sl bm'],
  ['ru cs sl hr'],
  ['ru cs yu'],
  ['ru cs yu bg'],
  ['ru cs yu mk'],
  ['ru cs~'],
  ['ru cs~ bg'],
  ['ru cs~ j'],
  ['ru cs~ sh bm'],
  ['ru cs~ yu'],
  ['ru cz'],
  ['ru cz bg'],
  ['ru cz hsb yu'],
  ['ru cz j'],
  ['ru cz sb sh bm'],
  ['ru cz sh'],
  ['ru cz sh bg'],
  ['ru cz sl'],
  ['ru cz sl hr'],
  ['ru cz~ sh'],
  ['ru cz~ sh~'],
  ['ru j'],
  ['ru pl'],
  ['ru pl (cz)'],
  ['ru pl bg'],
  ['ru pl bm'],
  ['ru pl cs'],
  ['ru pl cs sl'],
  ['ru pl cz'],
  ['ru pl cz sl hr'],
  ['ru pl j'],
  ['ru pl sb sh mk'],
  ['ru pl sh'],
  ['ru pl sh bm'],
  ['ru pl sh mk'],
  ['ru pl sk'],
  ['ru pl sk j'],
  ['ru pl sk sl'],
  ['ru pl sl bg'],
  ['ru pl sl bm'],
  ['ru pl yu'],
  ['ru pl yu mk'],
  ['ru pl~ bg'],
  ['ru pl~ cz'],
  ['ru pl~ cz~'],
  ['ru pl~ j'],
  ['ru pl~ sh'],
  ['ru pl~ sh bm'],
  ['ru sb bm'],
  ['ru sh'],
  ['ru sh (cz)'],
  ['ru sh bg'],
  ['ru sh bg sl'],
  ['ru sh bm'],
  ['ru sh mk'],
  ['ru sh mk bg'],
  ['ru sh~'],
  ['ru sk'],
  ['ru sk j'],
  ['ru sk sl mk'],
  ['ru sl'],
  ['ru sl bg'],
  ['ru ub cs yu'],
  ['ru ub cz bm'],
  ['ru ub sh bg'],
  ['ru ub~ sh~ mk~ bg'],
  ['ru uk'],
  ['ru uk bg'],
  ['ru uk bm'],
  ['ru uk bm pl~ be~'],
  ['ru uk cs'],
  ['ru uk cs bg'],
  ['ru uk cs bm'],
  ['ru uk cs j'],
  ['ru uk cs mk'],
  ['ru uk cz mk'],
  ['ru uk cz sh bm'],
  ['ru uk cz sl bm'],
  ['ru uk cz sl cu'],
  ['ru uk hr'],
  ['ru uk hr bg'],
  ['ru uk j'],
  ['ru uk pl'],
  ['ru uk pl bg'],
  ['ru uk pl bm'],
  ['ru uk pl cz bg'],
  ['ru uk pl j'],
  ['ru uk pl sh'],
  ['ru uk pl sk'],
  ['ru uk pl sk bm'],
  ['ru uk sh bm'],
  ['ru uk yu bg'],
  ['ru uk yu~ bg'],
  ['ru uk z'],
  ['ru uk z j'],
  ['ru uk z sh'],
  ['ru uk z sl'],
  ['ru uk z yu'],
  ['ru uk z yu mk'],
  ['ru uk z~ j~'],
  ['ru uk~ pl~ j'],
  ['ru yu'],
  ['ru yu mk'],
  ['ru z'],
  ['ru z bg'],
  ['ru z bm'],
  ['ru z j'],
  ['ru z sl'],
  ['ru z yu'],
  ['ru z yu bg'],
  ['ru z yu mk'],
  ['rue cs yu'],
  ['rue cs yu mk'],
  ['rue z yu mk (ub)'],
  ['ru~ be~ uk hsb sh bm'],
  ['ru~ be~ uk z sh~'],
  ['ru~ cs yu'],
  ['ru~ j'],
  ['ru~ sh'],
  ['ru~ ub pl sk j~'],
  ['ru~ ub pl sk~'],
  ['ru~ ub z j'],
  ['ru~ ub z yu bg~'],
  ['ru~ uk pl bg~'],
  ['ru~ uk pl cs~ sl sh~'],
  ['ru~ z bg~'],
  ['sb'],
  ['sb cs sh bm'],
  ['sh'],
  ['sh (ub pl)'],
  ['sh bg'],
  ['sh bm'],
  ['sh mk'],
  ['sk'],
  ['sk bg'],
  ['sk j'],
  ['sk sl'],
  ['sk yu'],
  ['sk yu mk'],
  ['sl'],
  ['sl bg'],
  ['sl bm'],
  ['sl rue'],
  ['sl sh mk'],
  ['sl sk~ uk~'],
  ['sx'],
  ['ub'],
  ['ub bg'],
  ['ub cs'],
  ['ub cs yu'],
  ['ub cs yu mk'],
  ['ub hsb'],
  ['ub j'],
  ['ub pl'],
  ['ub pl bg (sh)'],
  ['ub pl bm'],
  ['ub pl cs'],
  ['ub pl cs~'],
  ['ub pl cs~ yu '],
  ['ub pl cs~ yu~'],
  ['ub pl cz'],
  ['ub pl hsb'],
  ['ub pl hsb yu'],
  ['ub pl j'],
  ['ub pl mk~'],
  ['ub pl sb cz'],
  ['ub pl sb sl'],
  ['ub pl sh'],
  ['ub pl sh mk'],
  ['ub pl sk'],
  ['ub pl sk bg'],
  ['ub pl sk j'],
  ['ub pl sk sh'],
  ['ub pl sk sh mk'],
  ['ub pl sk sl'],
  ['ub pl sk yu'],
  ['ub pl sk yu bg'],
  ['ub pl sl hr'],
  ['ub pl yu'],
  ['ub pl yu mk'],
  ['ub pl yu~'],
  ['ub pl~ cs sl~'],
  ['ub pl~ j'],
  ['ub sh'],
  ['ub sh bm'],
  ['ub sk bm'],
  ['ub yu'],
  ['ub yu mk'],
  ['ub z'],
  ['ub z bg'],
  ['ub z j'],
  ['ub z mk'],
  ['ub z sh'],
  ['ub z sh bm'],
  ['ub z sh mk'],
  ['ub z sh~'],
  ['ub z sl'],
  ['ub z sl bg'],
  ['ub z sl sh~ mk~'],
  ['ub z yu'],
  ['ub z yu mk'],
  ['ub z yu~ mk~'],
  ['ub z~ sh bm'],
  ['ub~ z j'],
  ['uk'],
  ['uk cs'],
  ['uk cs j'],
  ['uk cs sh bm'],
  ['uk cs yu mk'],
  ['uk cz j'],
  ['uk cz sh'],
  ['uk j'],
  ['uk pl'],
  ['uk pl cs~'],
  ['uk pl hr bg'],
  ['uk pl sb sk sh'],
  ['uk pl sh'],
  ['uk pl sh mk'],
  ['uk pl sk bg'],
  ['uk pl sk sh'],
  ['uk pl sk yu mk'],
  ['uk pl sl bg'],
  ['uk pl yu'],
  ['uk pl yu mk'],
  ['uk rue pl cz'],
  ['uk sb'],
  ['uk sh'],
  ['uk sh bg'],
  ['uk sh bm'],
  ['uk sh mk'],
  ['uk sk'],
  ['uk sk sh bm'],
  ['uk sk sh mk'],
  ['uk sl'],
  ['uk yu mk'],
  ['uk z'],
  ['uk z bg'],
  ['uk z j'],
  ['uk z sh bm'],
  ['uk z sh mk'],
  ['uk z sl'],
  ['uk z yu'],
  ['uk z yu mk'],
  ['uk~ pl'],
  ['uk~ pl cs sb'],
  ['uk~ z'],
  ['uk~ z sh'],
  ['v'],
  ['v bg'],
  ['v bg sb'],
  ['v bm'],
  ['v bm sh~'],
  ['v cs'],
  ['v cs bg'],
  ['v cs bm'],
  ['v cs j'],
  ['v cs mk'],
  ['v cs sh bg'],
  ['v cs sh bm'],
  ['v cs sh~'],
  ['v cs sl'],
  ['v cs sl bg'],
  ['v cs sl bm'],
  ['v cs sl mk'],
  ['v cs yu'],
  ['v cs yu bg'],
  ['v cs yu bm'],
  ['v cs yu mk'],
  ['v csb hsb cs'],
  ['v cs~'],
  ['v cs~ sh~ bm~'],
  ['v cs~ sl bg'],
  ['v cs~ sl sh~ bm'],
  ['v cs~ sl~ bg'],
  ['v cs~ yu~'],
  ['v cz'],
  ['v cz bg'],
  ['v cz j'],
  ['v cz sh'],
  ['v cz sh bm'],
  ['v cz sh bm pl~'],
  ['v cz sh mk'],
  ['v cz sl'],
  ['v dsb'],
  ['v hr'],
  ['v j'],
  ['v j cu'],
  ['v j~'],
  ['v mk'],
  ['v mk~ bg'],
  ['v pl'],
  ['v pl (cs)'],
  ['v pl (sh)'],
  ['v pl ? bg'],
  ['v pl bg'],
  ['v pl bg cs~'],
  ['v pl bm'],
  ['v pl bm~'],
  ['v pl cs'],
  ['v pl csb'],
  ['v pl cs~'],
  ['v pl cs~ bg'],
  ['v pl cs~ j~'],
  ['v pl cs~ yu~ bg'],
  ['v pl cz'],
  ['v pl cz sh bg'],
  ['v pl cz sh bm'],
  ['v pl cz sl~'],
  ['v pl cz yu mk'],
  ['v pl cz~ sl~'],
  ['v pl j'],
  ['v pl mk'],
  ['v pl sb'],
  ['v pl sb bm'],
  ['v pl sh'],
  ['v pl sh bg'],
  ['v pl sh bm'],
  ['v pl sh mk'],
  ['v pl sh~ mk~'],
  ['v pl sk'],
  ['v pl sk bg'],
  ['v pl sk bm'],
  ['v pl sk j'],
  ['v pl sk sh'],
  ['v pl sk sh bm'],
  ['v pl sk sl'],
  ['v pl sk yu'],
  ['v pl sk yu bm'],
  ['v pl sk yu mk'],
  ['v pl sk~'],
  ['v pl sl'],
  ['v pl sl bg'],
  ['v pl sl bm'],
  ['v pl sl~'],
  ['v pl sl~ bg'],
  ['v pl yu'],
  ['v pl yu bg'],
  ['v pl yu bm'],
  ['v pl yu mk'],
  ['v pl yu~ mk~'],
  ['v pl~'],
  ['v pl~ bg'],
  ['v pl~ bm'],
  ['v pl~ cs sh bm'],
  ['v pl~ cs sh~'],
  ['v pl~ j~'],
  ['v pl~ sh mk'],
  ['v pl~ sh~ bg'],
  ['v pl~ sk j'],
  ['v pl~ yu~'],
  ['v sh'],
  ['v sh bg'],
  ['v sh bm'],
  ['v sh mk'],
  ['v sk'],
  ['v sk bg'],
  ['v sk bm'],
  ['v sk j'],
  ['v sk j~'],
  ['v sk sh bm'],
  ['v sk~ sh~ bg~'],
  ['v sl'],
  ['v sl bg'],
  ['v yu bm~'],
  ['v yu mk'],
  ['v yu~ mk~ bg'],
  ['v z'],
  ['v z bg'],
  ['v z bm'],
  ['v z j'],
  ['v z j~'],
  ['v z mk'],
  ['v z sh'],
  ['v z sh bg'],
  ['v z sh bm'],
  ['v z sh mk'],
  ['v z sl'],
  ['v z sl bg'],
  ['v z sl bm'],
  ['v z sl mk'],
  ['v z sl~ sh bg'],
  ['v z yu'],
  ['v z yu bg'],
  ['v z yu bm'],
  ['v z yu mk'],
  ['v z yu mk~'],
  ['v z yu~'],
  ['v z~'],
  ['v z~ j'],
  ['v z~ j~'],
  ['v z~ sh~'],
  ['v~ '],
  ['v~ bg'],
  ['v~ cs'],
  ['v~ cs yu bm~'],
  ['v~ pl j'],
  ['v~ pl~ yu mk'],
  ['v~ sh bm'],
  ['v~ z j'],
  ['v~ z j~'],
  ['v~ z sl'],
  ['v~ z~'],
  ['v~ z~ sh mk'],
  ['v~ z~ yu mk~'],
  ['yu'],
  ['yu bg'],
  ['yu cu'],
  ['yu mk'],
  ['yu mk uk~ z~'],
  ['yu mk~'],
  ['z'],
  ['z bg'],
  ['z cs j'],
  ['z j'],
  ['z j rue'],
  ['z j~'],
  ['z sh'],
  ['z sh bm'],
  ['z sh mk'],
  ['z sh mk bg~'],
  ['z sl'],
  ['z sl bg'],
  ['z sl bg~'],
  ['z sl mk'],
  ['z sl sh~ bg~'],
  ['z ub'],
  ['z yu'],
  ['z yu bm'],
  ['z yu mk'],
  ['z~ sh~'],
])('should parse correctly %j', (encoded) => {
  expect(parseIntelligibility(encoded)).toMatchSnapshot();
});
