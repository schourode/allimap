var Event = {
	start: new Date(2013, 02, 02, 17, 55),
	end: new Date(2013, 02, 03, 14, 00),
	maxScore: 500
};

var Controls = [
	{ x: 27.06, y: 40.22 },
	{ x: 24.50, y: 41.06 },
	{ x: 20.39, y: 39.08 },
	{ x: 17.93, y: 38.32 },
	{ x: 15.26, y: 19.31 },
	{ x: 31.92, y: 21.45 },
	{ x: 34.47, y: 28.36 },
	{ x: 46.49, y: 32.07 },
	{ x: 50.30, y: 51.51 },
	{ x: 57.79, y: 50.79 },
	{ x: 52.04, y: 38.25 },
	{ x: 45.77, y: 37.46 },
	{ x: 50.81, y: 56.23 },
	{ x: 62.32, y: 63.97 },
	{ x: 49.91, y: 68.83 },
	{ x: 71.24, y: 83.20 },
];

var Runners = [
	{name:'1',track:[[0,0,10],[877,0,10],[1489,1,13],[2331,2,16],[2777,3,24],[3161,3,24],[5233,4,38],[8575,4,52],[13455,5,66],[17237,5,85],[18292,6,95],[20967,7,104],[29088,7,162],[31684,8,176],[34463,8,189],[37423,9,203],[40110,9,222],[42502,10,236],[42735,10,236],[46541,10,245],[49228,10,262],[51744,12,276],[55788,12,286],[58917,13,300],[60743,13,314],[65116,14,336],[72203,15,345]]},
	{name:'2',track:[[0,0,10],[980,0,10],[2937,3,20],[3406,3,20],[5993,4,30],[9870,4,48],[14983,5,57],[18066,5,67],[19525,6,75],[22984,7,82],[26094,7,98],[29977,8,108],[31910,8,117],[36626,9,127],[38481,9,140],[43252,10,149],[43397,10,149],[45909,11,152],[45922,11,152],[47714,10,154],[49574,10,154],[56567,12,164],[57934,12,182]]},
	{name:'3',track:[[0,0,9],[1066,0,9],[4587,2,14],[5502,3,21],[6064,3,21],[9866,4,33],[13004,4,43],[18764,5,55],[21721,5,66],[23405,6,75],[27794,7,83],[29507,7,83],[33709,8,95],[36040,8,103],[39941,9,115],[41314,9,128],[46375,10,140],[48158,10,147],[52562,12,159],[54620,12,166],[58584,13,178],[60240,13,185],[63798,14,208],[71077,15,215]]},
	{name:'4',track:[[0,0,9],[405,0,9],[2374,2,12],[3175,3,18],[3904,3,18],[6817,4,27],[9947,4,32],[16547,5,42],[19302,5,48],[20760,6,55],[25025,7,62],[29648,7,69],[35808,8,78],[38800,8,83],[50791,12,105],[52017,12,105],[57611,13,114],[59754,13,129],[65198,15,137]]},
	{name:'5',track:[[0,0,10],[310,0,10],[1003,1,13],[2593,3,23],[3055,3,23],[5118,4,36],[7733,4,51],[11744,5,63],[13508,5,66],[14596,6,75],[17807,7,84],[22748,7,93],[26235,8,106],[28955,8,119],[36345,9,132],[40519,9,143],[43442,10,155],[47189,10,163],[50138,12,176],[52360,12,182],[55586,13,195],[58460,13,214],[61715,14,246]]},
	{name:'6',track:[[0,0,8],[290,0,8],[914,1,10],[2194,2,12],[2678,3,19],[3154,3,19],[5926,4,31],[8497,4,44],[14474,5,55],[17696,5,68],[19042,6,76],[22216,7,84],[28458,7,129],[31618,8,141],[35711,8,158],[38159,9,169],[40898,9,188],[46304,10,199],[47179,10,206],[50346,12,217],[53845,12,235],[57987,13,246],[61127,13,266],[68938,15,279]]},
	{name:'7',track:[[0,0,10],[260,0,10],[674,1,12],[1583,2,13],[2267,3,20],[2717,3,20],[5149,4,30],[7934,4,50],[12573,5,61],[14867,5,72],[16448,6,79],[19480,7,87],[26920,7,132],[30394,8,142],[33430,8,149],[36311,9,159],[40686,9,177],[45060,10,187],[47278,10,201],[50291,12,212],[52683,12,226],[56457,13,236],[59310,13,251],[63809,15,261]]},
	{name:'8',track:[[0,0,10],[820,0,10],[1300,1,12],[2701,2,14],[3490,3,21],[4130,3,21],[7529,4,32],[9571,4,47],[14721,5,58],[18593,5,70],[20569,6,78],[23978,7,86],[28379,7,95],[31862,8,106],[35820,8,115],[40028,9,126],[42022,9,143],[45254,10,153],[47334,10,159],[50742,12,170],[53066,12,183],[56997,13,194],[60345,13,215],[70294,15,227]]},
	{name:'9',track:[[0,0,10],[567,0,10],[899,1,14],[2227,2,17],[2552,3,26],[2851,3,26],[5057,4,42],[7716,4,60],[11739,5,76],[13811,5,90],[14918,6,100],[18743,7,110],[25307,7,162],[27685,8,178],[31314,8,190],[33960,9,206],[37787,9,225],[40895,10,241],[41023,10,241],[44492,11,246],[44566,11,286],[46180,10,292],[48058,10,306],[50906,12,322],[53738,12,341],[56861,13,356],[58969,13,373],[61620,14,402],[69755,15,413]]},
	{name:'10',track:[[0,0,10],[325,0,10],[905,1,13],[1933,2,16],[2349,3,24],[2846,3,24],[5719,4,39],[7425,4,59],[11985,5,73],[14840,5,94],[16444,6,104],[19464,7,113],[25434,7,161],[27704,8,176],[30654,8,192],[33711,9,206],[35829,9,222],[39082,10,236],[39169,10,236],[41100,11,241],[41229,11,281],[42531,10,286],[47240,10,299],[50290,12,313],[51972,12,332],[55092,13,346],[56260,13,364],[60019,14,390],[66758,15,399]]},
	{name:'11',track:[[0,0,7],[1049,0,7],[2247,1,8],[4573,2,9],[5676,3,15],[7322,3,15],[11699,4,22],[14873,4,39],[26102,7,49],[32143,7,51],[48745,12,69],[51566,12,74],[68443,15,81]]},
	{name:'12',track:[[0,0,6],[1388,0,6],[2304,1,7],[4591,2,7],[5711,3,13],[6629,3,13],[12074,4,20],[16765,4,38],[26419,7,46],[35307,7,46],[43089,10,57],[49187,10,59],[53561,12,66],[56621,12,82],[61996,13,88],[63396,13,98],[69921,15,102]]},
	{name:'13',track:[[0,0,10],[850,0,10],[1311,1,12],[2658,2,13],[3550,3,20],[4188,3,20],[7362,4,30],[10663,4,49],[18357,5,59],[21934,5,70],[23392,6,78],[26986,7,85],[34024,7,104],[39175,9,120],[41575,9,138],[45793,10,148],[47755,10,163],[50910,12,173],[54072,12,185],[57404,13,195],[60815,13,211],[67087,15,221]]},
	{name:'14',track:[[0,0,5],[811,0,5],[1457,1,6],[2794,2,7],[3576,3,14],[4218,3,14],[9112,4,22],[12739,4,30],[18014,5,39],[21812,5,49],[23700,6,55],[28741,7,62],[36159,7,70],[43044,10,86],[48236,10,100],[71757,15,114]]},
	{name:'15',track:[[0,0,9],[1019,0,9],[1697,1,10],[2930,2,11],[3680,3,17],[4347,3,17],[8851,4,26],[12409,4,43],[18017,5,51],[21716,5,58],[25161,6,65],[29169,7,72],[35913,7,79],[59534,8,82],[51327,12,101],[54784,12,111],[60323,14,135],[70765,15,138]]},
	{name:'16',track:[[0,0,9],[840,0,9],[1322,1,10],[3026,3,18],[3543,3,18],[6519,4,26],[9663,4,43],[15523,5,52],[19617,5,64],[20941,6,70],[25287,7,77],[31924,7,82],[37524,10,98],[48855,10,113],[57610,13,125],[59867,13,144],[67638,15,151]]},
	{name:'17',track:[[0,0,10],[942,0,10],[3098,3,20],[3691,3,20],[6901,4,30],[10022,4,47],[15786,5,58],[19488,5,64],[20773,6,71],[24289,7,79],[28554,7,81],[32242,8,91],[35049,8,97],[38066,9,107],[41021,9,118],[45947,10,128],[47918,10,138],[51892,12,149],[55461,12,164],[58850,13,174],[61346,13,186],[71790,15,196]]},
	{name:'18',track:[[0,0,9],[1201,0,9],[2049,1,11],[4669,2,12],[5435,3,19],[6700,3,19],[11036,4,29],[14737,4,48],[21589,5,57],[24753,5,67],[27146,6,75],[31834,7,82],[38536,7,92],[43132,9,107],[43549,9,111],[51873,12,130],[56557,12,136],[60611,13,146],[63914,13,161],[70043,15,170]]},
	{name:'19',track:[[0,0,10],[800,0,10],[1278,1,12],[2230,2,14],[2807,3,22],[3335,3,22],[5846,4,33],[10932,4,51],[16354,5,63],[20382,5,71],[21497,6,79],[25047,7,88],[25015,7,88],[34122,8,99],[37597,8,104],[40950,9,116],[41580,9,120],[45772,10,132],[47259,10,141],[50301,12,153],[53310,12,174],[58455,13,186],[60141,13,206],[70254,15,219]]},
	{name:'20',track:[[0,0,10],[908,0,10],[1700,1,12],[2842,2,14],[3647,3,21],[4281,3,21],[7350,4,31],[10435,4,48],[15714,5,59],[18613,5,72],[20644,6,80],[24877,7,88],[31792,7,95],[36145,10,117],[48277,10,144],[52645,12,155],[55524,12,164],[59179,13,175],[61478,13,192],[70391,15,203]]},
	{name:'21',track:[[0,0,9],[388,0,9],[1034,1,11],[3325,3,21],[4331,3,21],[8122,4,33],[11120,4,50],[17184,5,61],[20478,5,74],[22485,6,83],[26098,7,91],[31190,7,98],[35212,8,110],[37330,8,121],[41149,9,133],[42405,9,142],[47279,12,167],[49444,12,184],[54560,13,196],[56287,13,211],[62814,14,226],[72320,15,233]]},
	{name:'22',track:[[0,0,10],[407,0,10],[980,1,12],[2571,2,15],[3294,3,22],[3870,3,22],[5933,4,35],[9767,4,56],[14480,5,68],[18031,5,81],[19216,6,90],[21863,7,98],[29969,7,128],[32613,8,141],[36117,8,153],[38105,9,165],[40664,9,181],[44052,10,193],[48654,10,216],[52461,12,228],[55083,12,247],[57861,13,259],[60770,13,272],[71009,15,287]]},
	{name:'23',track:[[0,0,9],[1231,0,9],[2095,1,10],[4738,2,11],[5958,3,17],[6716,3,17],[10743,4,25],[15420,4,35],[29088,10,53],[47441,10,69],[51624,12,77],[54842,12,82],[58598,13,90],[61788,13,99],[69188,15,104]]},
	{name:'24',track:[[0,0,10],[292,0,10],[921,1,11],[2283,2,13],[2918,3,19],[3502,3,19],[6432,4,28],[9504,4,50],[15000,5,60],[17826,5,72],[19221,6,79],[23216,7,86],[29876,7,106],[33921,8,115],[37292,8,122],[40664,10,135],[47173,10,158],[51001,12,168],[53110,12,182],[57770,13,191],[61100,13,206],[66938,15,214]]},
	{name:'25',track:[[0,0,10],[404,0,10],[994,1,13],[2220,2,15],[2727,3,23],[3315,3,23],[5925,4,35],[9041,4,55],[14471,5,68],[17968,5,75],[19060,6,83],[22217,7,92],[29084,7,121],[33272,8,134],[36091,8,144],[38088,9,156],[42873,9,171],[45644,10,184],[48451,10,208],[51746,12,221],[53706,12,238],[56859,13,250],[60504,13,265],[63128,14,289],[70889,15,296]]},
	{name:'26',track:[[0,0,9],[952,0,9],[2888,3,18],[3662,3,18],[6043,4,26],[10235,4,43],[15758,5,52],[19016,5,66],[20652,6,72],[23980,7,79],[33844,7,90],[39989,9,102],[42109,9,111],[45080,10,120],[47288,10,123],[50731,12,132],[54364,12,145],[58161,13,153],[62877,13,165],[68271,15,172]]},
	{name:'27',track:[[0,0,8],[925,0,8],[2995,3,20],[3759,3,20],[6523,4,33],[9148,4,48],[15011,5,60],[17574,5,70],[19352,6,78],[23011,7,87],[30494,7,117],[33935,8,129],[36106,8,134],[39992,9,147],[42051,9,163],[45405,10,175],[47825,10,194],[51822,12,206],[54512,12,219],[58624,13,232],[60800,13,243],[64154,14,265],[72035,15,272]]},
	{name:'29',track:[[0,0,9],[906,0,9],[1879,1,10],[4604,2,11],[5752,3,18],[6913,3,18],[11641,4,26],[15241,4,36],[22743,5,45],[25395,5,57],[27669,6,64],[32226,7,71],[37183,7,71],[43340,10,87],[47324,10,90],[51830,12,99],[54659,12,105],[60029,13,114],[63124,13,143]]},
	{name:'30',track:[[0,0,7],[1083,0,7],[4596,2,8],[5861,3,13],[7450,3,13],[11713,4,20],[17076,4,40],[26103,7,47],[30983,7,52],[36930,8,59],[39256,8,63],[54873,12,73],[57899,12,86],[69069,15,90]]},
	{name:'31',track:[[0,0,6],[811,0,6],[1248,1,7],[2408,2,8],[3369,3,15],[3948,3,15],[7306,4,23],[11032,4,40],[16947,5,49],[20816,5,57],[22618,6,63],[26605,7,70],[36054,7,78],[43079,10,94],[47382,10,97],[51824,12,106],[55194,12,121],[61061,13,129],[63065,13,140],[69865,15,147]]},
	{name:'32',track:[[0,0,10],[1043,0,10],[1756,1,11],[3470,2,13],[4190,3,19],[4849,3,19],[8496,4,28],[11349,4,43],[17710,5,51],[22238,5,61],[24443,6,68],[29139,7,75],[30288,7,75],[35265,8,84],[38590,8,91],[55476,12,111],[57897,12,123],[70443,15,134]]},
	{name:'33',track:[[0,0,8],[1052,0,8],[1644,1,10],[2844,2,12],[3608,3,19],[4249,3,19],[7245,4,30],[10075,4,49],[15770,5,60],[19138,5,69],[20777,6,76],[24308,7,84],[28557,7,87],[32238,8,98],[34796,8,116],[38067,9,127],[40950,9,134],[45955,10,145],[47447,10,156],[50903,12,167],[52606,12,181],[57002,13,191],[59368,13,201],[69301,15,213]]},
	{name:'34',track:[[0,0,9],[1091,0,9],[1579,1,11],[2704,2,12],[3454,3,19],[4054,3,19],[6663,4,29],[11014,4,46],[16529,5,56],[20055,5,64],[21422,6,71],[24887,7,78],[31046,7,116],[34182,8,126],[36800,8,137],[41244,9,147],[43196,9,159],[47590,10,169],[49596,10,174],[56302,12,184],[58818,12,194],[62729,13,203],[64762,13,217],[71715,15,222]]},
	{name:'35',track:[[0,0,9],[1170,0,9],[2270,1,10],[4750,2,12],[5909,3,18],[6660,3,18],[11175,4,28],[14326,4,46],[21716,5,55],[25306,5,66],[27593,6,73],[32285,7,80],[39020,7,101],[49526,12,128],[51912,12,139],[58668,13,148],[62001,13,166],[72373,15,175]]},
	{name:'36',track:[[0,0,9],[853,0,9],[1444,1,11],[3271,3,20],[3841,3,20],[6752,4,32],[10757,4,50],[17393,5,61],[20709,5,72],[22411,6,80],[25846,7,88],[30745,7,108],[34156,8,120],[37576,8,130],[42145,9,141],[43201,9,146],[46593,10,157],[49009,10,164],[52920,12,175],[55797,12,183],[60294,13,194],[63202,13,220]]},
	{name:'37',track:[[0,0,2],[1106,0,2],[1608,1,3],[3091,2,4],[3805,3,10],[5205,3,10],[8112,4,19],[13919,4,25],[19383,5,33],[23075,5,36],[27974,6,43],[33700,7,49],[38358,7,51],[45481,10,66],[48929,10,70],[52370,12,78],[55816,12,81],[60307,13,89],[61585,13,89],[71339,15,91]]},
	{name:'38',track:[[0,0,9],[302,0,9],[917,1,11],[2197,2,13],[2705,3,20],[3234,3,20],[5928,4,31],[8948,4,46],[14516,5,56],[17694,5,67],[19052,6,75],[22222,7,83],[28459,7,110],[31619,8,121],[35661,8,137],[38125,9,148],[40892,9,163],[46301,10,173],[47183,10,179],[50343,12,190],[53842,12,206],[57970,13,217],[61116,13,247]]},
	{name:'39',track:[[0,0,9],[683,0,9],[2320,2,14],[2861,3,21],[3554,3,21],[6061,4,33],[9226,4,48],[15728,5,60],[18842,5,69],[20607,6,77],[23984,7,85],[29717,7,97],[33699,8,109],[37826,8,123],[48055,12,156],[52167,12,161],[55588,13,172],[58469,13,186],[61505,14,210],[69621,15,217]]},
	{name:'40',track:[[0,0,3],[1431,0,3],[2450,1,4],[4757,2,4],[5641,3,10],[6899,3,10],[17117,4,17],[20571,4,30],[32375,7,38],[39243,7,41],[45800,10,52],[49416,10,54],[53552,12,61],[56959,12,68],[64203,13,74],[64704,13,80],[70967,15,84]]},
	{name:'41',track:[[0,0,9],[818,0,9],[2834,2,12],[3744,3,19],[4692,3,19],[8116,4,29],[12622,4,44],[18743,5,54],[22134,5,68],[23737,6,76],[27492,7,83],[36699,7,108],[42643,9,124],[43083,9,130],[46507,10,140],[49016,10,155],[53044,12,165],[55534,12,180],[59209,13,190],[62074,13,204],[71571,15,214]]},
	{name:'42',track:[[0,0,1],[976,0,1],[2199,1,3],[4527,2,4],[5296,3,11],[5965,3,11],[9841,4,21],[14525,4,37],[24596,5,46],[27859,5,68],[30134,6,76],[33656,7,83],[38920,7,101],[43344,10,120],[49586,10,142],[52891,12,152],[58059,12,165],[61841,13,175],[63469,13,185],[70522,15,194]]},
	{name:'44',track:[[0,0,9],[1119,0,9],[1706,1,10],[3465,2,12],[4083,3,18],[5303,3,18],[8835,4,27],[11963,4,45],[18015,5,54],[22017,5,66],[25128,6,73],[29129,7,80],[38154,7,105],[45804,10,122],[47751,10,126],[52410,12,135],[55105,12,142],[62262,13,151],[64048,13,161],[71252,15,169]]},
	{name:'45',track:[[0,0,2],[1440,0,2],[2260,1,4],[4882,2,6],[6005,3,13],[6744,3,13],[10418,4,24],[15086,4,44],[22085,5,55],[23630,5,65],[25857,6,73],[29765,7,81],[38925,7,103],[43472,10,126],[47410,10,139],[50845,12,150],[54810,12,165],[58574,13,176],[60178,13,184],[71884,15,196]]},
	{name:'46',track:[[0,0,8],[1283,0,8],[2176,1,9],[4823,2,11],[5548,3,17],[6213,3,17],[11056,4,26],[15847,4,46],[22022,5,56],[25338,5,66],[26344,6,73],[29674,7,80],[39349,7,98],[51978,12,124],[55109,12,134],[60058,13,143],[63490,13,154],[72293,15,162]]},
	{name:'47',track:[[0,0,10],[1270,0,10],[2051,1,11],[4541,2,11],[5601,3,17],[6561,3,17],[12058,4,24],[16732,4,42],[26413,7,50],[36061,7,62],[43086,10,73],[49146,10,79],[53544,12,86],[56644,12,101],[61994,13,107],[63719,13,119],[70102,15,123]]},
	{name:'48',track:[[0,0,10],[571,0,10],[2384,2,15],[2960,3,23],[3440,3,23],[6047,4,36],[10505,4,52],[14985,5,65],[17837,5,85],[18936,6,94],[21881,7,103],[28494,7,151],[31327,8,164],[34719,8,182],[37724,9,196],[39130,9,214],[42020,10,227],[42118,10,227],[44246,11,231],[44397,11,271],[46070,10,275],[48965,10,291],[52563,12,304],[54543,12,320],[58149,13,333],[61240,13,340],[64171,14,361],[71398,15,369]]},
	{name:'49',track:[[0,0,10],[857,0,10],[3203,3,21],[3770,3,21],[6928,4,31],[9372,4,50],[14751,5,61],[18632,5,71],[20669,6,79],[24181,7,87],[27452,7,87],[31348,8,97],[34911,8,111],[37731,9,122],[40704,9,139],[44339,10,150],[48126,10,159],[51214,12,170],[53456,12,188],[56993,13,199],[59552,13,213],[65320,15,224]]},
	{name:'50',track:[[0,0,10],[425,0,10],[1007,1,11],[1902,2,12],[2335,3,18],[2887,3,18],[5499,4,27],[7640,4,43],[13235,5,51],[16043,5,65],[18416,6,72],[21847,7,78],[28054,7,123],[31871,8,132],[34958,8,150],[41014,9,158],[42470,9,172],[66160,15,192]]},
	{name:'51',track:[[0,0,10],[869,0,10],[5179,2,16],[6133,3,24],[6933,3,24],[10342,4,38],[12868,4,50],[17646,5,64],[19281,5,69],[21035,6,78],[25046,7,87],[30423,7,105],[33722,8,119],[35621,8,134],[39367,9,148],[40887,9,155],[44560,10,169],[47185,10,188],[50739,12,202],[52498,12,222],[55655,13,235],[58727,13,253],[62987,14,279],[72096,15,288]]},
	{name:'52',track:[[0,0,10],[780,0,10],[2004,2,18],[2298,3,27],[2595,3,27],[4512,4,44],[6859,4,68],[10262,5,85],[12869,5,108],[14058,6,119],[16769,7,130],[23939,7,187],[26262,8,204],[29349,8,225],[31852,9,242],[35340,9,268],[37565,10,285],[37712,10,285],[39794,11,291],[39929,11,331],[41252,10,337],[47402,10,360],[49464,12,377],[51796,12,398],[53839,13,415],[56804,13,428],[59661,14,458],[67199,15,470]]},
	{name:'53',track:[[0,0,9],[205,0,9],[2404,2,15],[3415,3,22],[4008,3,22],[7201,4,36],[9342,4,51],[14777,5,64],[17759,5,76],[19591,6,85],[24012,7,94],[30286,7,128],[33924,8,141],[36961,8,152],[42264,9,166],[43191,9,175],[47771,10,188],[49329,10,196],[54047,12,209],[56799,12,216],[60266,13,230],[63581,13,244],[72251,15,260]]},
	{name:'54',track:[[0,0,10],[522,0,10],[1927,2,14],[2397,3,21],[2947,3,21],[5412,4,31],[8330,4,42],[12801,5,53],[15141,5,76],[17963,6,84],[20944,7,92],[28913,7,141],[31668,8,151],[34098,8,163],[37719,9,174],[39658,9,188],[42699,10,199],[42942,10,199],[44614,11,202],[44674,11,242],[46588,10,244],[48650,10,256],[52374,12,267],[55701,12,283],[59431,13,294],[61391,13,309],[72495,15,320]]},
	{name:'55',track:[[0,0,10],[339,0,10],[1878,2,17],[2375,3,25],[2956,3,25],[5614,4,41],[8087,4,58],[12600,5,73],[14893,5,96],[16437,6,106],[19707,7,116],[19678,7,172],[28083,8,187],[31211,8,207],[34700,9,223],[36781,9,242],[40422,10,257],[40822,10,257],[43442,11,262],[43539,11,302],[45529,10,307],[48519,10,328],[52886,12,343],[54614,12,362],[57433,13,378],[59022,13,392],[62766,14,421],[72185,15,431]]},
	{name:'56',track:[[0,0,10],[801,0,10],[2002,2,17],[2311,3,26],[2640,3,26],[4509,4,42],[6756,4,60],[10257,5,76],[12695,5,90],[14076,6,100],[16774,7,110],[24086,7,171],[26266,8,187],[29224,8,211],[31872,9,227],[34209,9,249],[36909,10,265],[36961,10,265],[39375,11,270],[39529,11,310],[41006,10,316],[47175,10,339],[49466,12,355],[51490,12,371],[53831,13,386],[59661,14,428],[67485,15,439]]},
	{name:'57',track:[[0,0,9],[1045,0,9],[2065,1,9],[4558,2,9],[6049,3,15],[7228,3,15],[11940,4,20],[16800,4,31],[26380,7,38],[35213,7,55],[41910,10,62],[48340,10,73]]},
	{name:'58',track:[[0,0,10],[929,0,10],[3526,3,19],[4203,3,19],[7100,4,27],[11186,4,44],[16363,5,53],[20954,5,63],[22696,6,69],[26089,7,76],[31965,7,98],[38040,9,110],[41294,9,127],[46224,10,136],[49195,10,150],[52367,12,159],[55148,12,176],[58224,13,184],[60625,13,197],[69397,15,204]]},
	{name:'59',track:[[0,0,4],[1129,0,4],[1720,1,6],[3353,2,8],[4027,3,16],[4704,3,16],[9080,4,27],[11800,4,45],[17758,5,57],[21617,5,78],[23333,6,86],[27367,7,94],[36470,7,116],[63716,8,123],[42235,10,141],[48428,10,155],[52185,12,167],[54568,12,176],[58024,13,187],[60094,13,200],[64362,14,226],[72353,15,232]]},
	{name:'60',track:[[0,0,9],[270,0,9],[2206,2,15],[2650,3,22],[3075,3,22],[5716,4,36],[8876,4,53],[15025,5,66],[19166,5,80],[20622,6,89],[23676,7,99],[30836,7,134],[33507,8,147],[36252,8,159],[39079,9,173],[41354,9,180],[45058,10,193],[48630,10,224],[51970,12,238],[55705,12,258],[58862,13,271],[60720,13,286],[64511,14,311],[72390,15,319]]},
	{name:'61',track:[[0,0,10],[811,0,10],[2632,1,12],[3462,2,15],[3868,3,22],[4646,3,22],[7221,4,34],[10145,4,53],[14745,5,66],[17441,5,86],[18739,6,94],[21906,7,103],[30168,7,144],[33117,8,156],[36217,8,168],[39361,9,180],[40953,9,199],[44322,10,211],[47683,10,224],[50902,12,237],[53262,12,253],[56995,13,265],[60301,13,279],[72058,15,293]]},
	{name:'62',track:[[0,0,9],[366,0,9],[2830,3,20],[3241,3,20],[6142,4,30],[8696,4,46],[14237,5,57],[17264,5,65],[18872,6,73],[22056,7,81],[29506,7,107],[32669,8,117],[36531,8,129],[39734,9,140],[41409,9,159],[44266,10,170],[48864,10,190],[52087,12,201],[54629,12,217],[58811,13,228],[60812,13,241],[72408,15,252]]},
	{name:'63',track:[[0,0,10],[1044,0,10],[1534,1,13],[3051,3,23],[3580,3,23],[6713,4,36],[9430,4,53],[14764,5,66],[16525,5,74],[18000,6,82],[21271,7,91],[28188,7,126],[32838,8,139],[35380,8,153],[38156,9,166],[39291,9,179],[42691,10,192],[44698,11,196],[44736,11,236],[46716,10,240],[49343,10,240],[54023,12,253],[56510,12,270],[60243,13,282],[63594,13,299],[72276,15,315]]},
	{name:'64',track:[[0,0,10],[843,0,10],[1573,1,12],[4333,3,21],[4735,3,21],[9455,4,31],[11473,4,51],[17680,5,62],[20282,5,75],[21757,6,83],[25866,7,91],[32783,7,133],[60183,8,138],[41151,9,149],[42526,9,163],[47273,12,185],[50377,12,202],[54853,13,213],[56859,13,231],[60963,14,247],[72448,15,253]]},
	{name:'65',track:[[0,0,10],[715,0,10],[2405,2,15],[3225,3,22],[3801,3,22],[7134,4,35],[10581,4,52],[16289,5,64],[20183,5,84],[21705,6,92],[25072,7,101],[30835,7,112],[34149,8,124],[36551,8,137],[41240,9,150],[42820,9,159],[47277,12,185],[50048,12,198],[54551,13,211],[56778,13,228],[60722,14,251],[72337,15,258]]},
	{name:'66',track:[[0,0,10],[579,0,10],[2745,3,25],[3138,3,25],[5278,4,40],[8399,4,57],[13988,5,72],[17139,5,86],[18733,6,96],[21534,7,106],[29236,7,159],[31850,8,174],[35415,8,191],[38303,9,207],[40268,9,215],[43322,10,230],[43389,10,230],[45879,11,235],[45879,11,235],[47525,10,240],[48669,10,247],[51712,12,262],[53614,12,278],[56159,13,293],[58438,13,312],[61892,14,338],[71955,15,348]]},
	{name:'67',track:[[0,0,10],[698,0,10],[1297,1,11],[3148,3,19],[3699,3,19],[7560,4,27],[10374,4,44],[16394,5,53],[18421,5,59],[21775,6,65],[26086,7,72],[36731,7,72],[41977,9,84],[42882,9,92],[50470,12,108],[53459,12,116],[57479,13,124],[61057,13,133],[69967,15,140]]},
	{name:'68',track:[[0,0,10],[837,0,10],[1641,1,12],[3055,2,13],[3706,3,20],[5071,3,20],[7902,4,29],[10323,4,44],[17108,5,54],[20602,5,75],[22534,6,82],[26106,7,89],[33803,7,125],[43384,9,139],[43765,9,145],[49544,12,164],[53548,12,180],[58556,13,189],[61542,13,206],[72232,15,215]]},
	{name:'69',track:[[0,0,7],[314,0,7],[927,1,10],[2251,2,13],[2624,3,21],[2991,3,21],[5895,4,35],[8804,4,53],[13004,5,67],[15153,5,80],[16323,6,90],[19474,7,99],[26107,7,143],[29762,8,157],[33609,8,170],[36207,9,184],[39171,9,204],[41748,10,218],[41933,10,218],[44622,11,223],[44753,11,263],[46183,10,267],[48545,10,282],[51613,12,296],[53848,12,310],[57087,13,324],[58543,13,342],[61772,14,370],[72135,15,379]]},
	{name:'70',track:[[0,0,9],[616,0,9],[2445,3,20],[3130,3,20],[5754,4,31],[8287,4,46],[13031,5,57],[15479,5,71],[18007,6,79],[21115,7,87],[26863,7,109],[30171,8,120],[33580,8,136],[36312,9,147],[41179,9,166],[43735,10,176],[48039,10,197],[52493,12,208],[53802,12,213],[57477,13,224],[61506,13,238],[66296,15,250]]},
	{name:'71',track:[[0,0,10],[946,0,10],[3780,1,12],[4927,2,14],[6096,3,21],[6880,3,21],[10291,4,32],[12279,4,49],[18391,5,60],[22679,5,75],[25254,6,82],[28951,7,90],[37894,7,135],[43014,9,152],[43538,9,157],[50737,12,180],[53413,12,186],[58205,13,196],[62356,13,211],[70647,15,223]]},
	{name:'72',track:[[0,0,6],[1008,0,6],[1718,1,7],[5871,2,8],[4418,3,14],[5328,3,14],[10623,4,23],[12493,4,43],[22126,5,51],[22705,5,51],[27976,6,57],[33721,7,64],[35920,7,64],[59551,8,67],[51349,12,85],[54740,12,93],[60420,14,111],[70152,15,114]]},
	{name:'73',track:[[0,0,8],[989,0,8],[1772,1,9],[3993,2,11],[5342,3,17],[6043,3,17],[10497,4,26],[13423,4,36],[19346,5,45],[23219,5,55],[25439,6,61],[29422,7,68],[35330,7,91],[42057,9,104],[43128,9,107],[50534,12,124],[55439,12,131],[59998,13,139],[62994,13,156]]},
	{name:'74',track:[[0,0,8],[1089,0,8],[2107,1,9],[5153,3,16],[5936,3,16],[12071,4,23],[17029,4,41],[29160,7,51],[36610,7,67],[42963,9,77],[43393,9,83],[49862,12,96],[54872,12,101],[59722,13,108],[63926,13,121],[71662,15,131]]},
	{name:'75',track:[[0,0,10],[867,0,10],[3076,3,19],[3984,3,19],[7851,4,27],[11272,4,47],[20493,5,56],[24536,5,76],[26629,6,82],[32325,7,89],[34225,7,96],[41927,10,112],[47459,10,125],[52413,12,134],[53834,12,141],[57754,13,149],[60455,13,166],[71209,15,173]]},
];
