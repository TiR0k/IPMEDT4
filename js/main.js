const myMap = L.map('mapId').setView([52.0115205, 4.7104633], 15);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=8MyTo9q8xMfDl2P4GegD', {
    maxZoom: 19,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(myMap);


const routeGroen = {"type": "FeatureCollection",
    "features": [
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70952447, 52.01675459]}, "id": "4a808bb6-78ba-4560-95f2-cf3cd681a9ad", "properties": {"name": "Groen 5"}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70739675, 52.01489912]}, "id": "51f89800-4138-42c7-85e0-bdee44c33c13", "properties": {"name": "Groen 15"}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70645373, 52.01809775]}, "id": "50995f42-ff93-4793-a93a-3c3b04067629", "properties": {"name": "Start"}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70954872, 52.01598243], [4.70960926, 52.01525551], [4.70950867, 52.01521506], [4.70948185, 52.01519195], [4.70947721, 52.01514586], [4.7095878, 52.01515481], [4.7096428, 52.01487847], [4.70967901, 52.01468698], [4.70972863, 52.01442863], [4.70977959, 52.01411911], [4.70985335, 52.01345713], [4.70989895, 52.01308651]]}, "id": "26af0618-8e24-40fc-b582-5d0c1816a8e7", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70641653, 52.01271158]}, "id": "25587def-b4e0-4f0c-8afa-70d6ab9608b9", "properties": {"name": "Groen 13"}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70952873, 52.01671471]}, "id": "8051cee3-cb1d-42a7-b674-188f203957c9", "properties": {"name": "Groen 6"}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70437738, 52.01290417], [4.70390746, 52.01324983], [4.70371165, 52.01340299], [4.70342445, 52.01363759], [4.70333594, 52.0137094], [4.70328498, 52.01377131], [4.70326352, 52.01380515], [4.70329604, 52.01386405]]}, "id": "84bf2986-2579-4de0-9c55-d1679e09c458", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70329918, 52.01386411], [4.7032963, 52.01390572], [4.70315341, 52.01427297], [4.70395562, 52.01471435], [4.70489985, 52.01406781], [4.70541501, 52.01371267], [4.70557641, 52.01360588]]}, "id": "84795bb0-163f-4f7b-ac62-9f0c2167ee5a", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70790634, 52.02056159]}, "id": "71822728-e2fb-4be8-b095-cf687e7938ab", "properties": null},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70645373, 52.01809775], [4.70647361, 52.01822747], [4.70644975, 52.01826174], [4.70646168, 52.01830334], [4.70652929, 52.01856523]]}, "id": "330ff881-55ff-4cc4-831a-98970eaa81c9", "properties": null},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.71084769, 52.01290343], [4.71089423, 52.01284922], [4.71122683, 52.01274687], [4.71115725, 52.012603], [4.71104446, 52.01235059], [4.71098613, 52.01222975]]}, "id": "43f051c0-81e3-4751-9423-20e7e1001b6e", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70561904, 52.01688926]}, "id": "3abbd4cf-9ab9-4186-8266-7fed17167dd7", "properties": {"name": "Groen 17 / Einde"}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70557641, 52.01360588], [4.70611487, 52.01391894], [4.70668388, 52.01424243], [4.70759846, 52.01475876]]}, "id": "a8181556-e6c0-48e8-9692-4b7933da6683", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.71459923, 52.01823201]}, "id": "b7ae436a-0c6a-4823-bc13-a7699b640204", "properties": {"name": "Groen 4"}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.71098613, 52.01222975], [4.71091773, 52.01209603]]}, "id": "bfdbe907-9912-4eaf-988b-4af5134ffa0f", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.71029215, 52.01305014]}, "id": "975b3871-5dee-425d-9b7e-d2c2df25cde3", "properties": {"name": "Groen 8"}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70350824, 52.01121699], [4.70335535, 52.01131935], [4.7031637, 52.01143483], [4.70299594, 52.01152571], [4.70274915, 52.01165198], [4.70240971, 52.01138384]]}, "id": "d54cb649-f671-4065-a2ae-a4e7ec466ecd", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70611325, 52.01696439]}, "id": "ccd788a1-7cae-4c89-835e-b8ab569c8782", "properties": {"name": "Groen 16"}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70241153, 52.01138496]}, "id": "ab938703-22bf-4d41-a97d-c7c7288e8a5d", "properties": {"name": "Groen 14"}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.71005536, 52.01154865]}, "id": "0eaa4e5b-d738-4da2-b1f3-4f803bd2f54e", "properties": {"name": "Groen 12"}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70652929, 52.01856523], [4.7065308, 52.01857488], [4.7044266, 52.01855095], [4.70440246, 52.01873582], [4.70453389, 52.01874902], [4.70452585, 52.01881505], [4.70487453, 52.01887447], [4.70475925, 52.01960209]]}, "id": "c00e2bbe-5fec-407e-b184-0e8ede8a26df", "properties": null},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.71117597, 52.01264172]}, "id": "dcfd1a0a-bf31-4be5-be60-550b940090c0", "properties": {"name": "Groen 9"}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70641653, 52.01271158], [4.70601884, 52.0125146], [4.70587266, 52.01243784], [4.70574526, 52.01236602], [4.70561651, 52.0122843], [4.70551324, 52.01222075], [4.70545826, 52.01219598], [4.70517931, 52.01205483], [4.70490304, 52.01192111], [4.70459861, 52.01177088], [4.70442829, 52.01169163], [4.7043961, 52.01166935], [4.70422444, 52.01155956], [4.7040796, 52.01148692], [4.70366527, 52.01127563], [4.70350703, 52.0112162]]}, "id": "d98201d8-ae98-4df7-8533-d2d27f5a431b", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70625062, 52.0167893], [4.70611624, 52.01680093], [4.70611325, 52.01696439], [4.70561904, 52.01688926]]}, "id": "cb2e86e4-98c8-4c03-b10c-3db1232d3368", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.71078574, 52.01213094]}, "id": "e38a9f4b-4266-4d19-bcaa-00b84368834e", "properties": {"name": "Groen 10"}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.71573262, 52.01829904]}, "id": "ba1f23a4-b839-4107-a1f5-ab1eb953b310", "properties": null},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70752625, 52.01181982], [4.70708522, 52.01220263], [4.70641653, 52.01271158]]}, "id": "da1afe5b-d9a2-4570-ab4e-908df8fbd9e1", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70759846, 52.01475876], [4.70729101, 52.01497269], [4.70708582, 52.01511218], [4.70668752, 52.01538539], [4.7063281, 52.0156297], [4.70626373, 52.01574938], [4.7062597, 52.01586906], [4.70625166, 52.01606219], [4.70624495, 52.01620251], [4.70624227, 52.01639647], [4.70625062, 52.0167893]]}, "id": "e8ad2947-6204-4516-94ca-e62f9c13dfe0", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.71071258, 52.01795245], [4.71059394, 52.01796592], [4.71051644, 52.0179881], [4.71042452, 52.01804467], [4.71034701, 52.01812342], [4.71027492, 52.01822547], [4.71021904, 52.01834416], [4.70950891, 52.01829313], [4.7095053, 52.01826429], [4.70948367, 52.01822103], [4.70944762, 52.01816668], [4.70940617, 52.01808682], [4.70938815, 52.01802803], [4.70939175, 52.01792488], [4.70943681, 52.01763315], [4.70945664, 52.0174224], [4.70949629, 52.01701864], [4.70952873, 52.01671471], [4.70956658, 52.01635198], [4.70960297, 52.0160481], [4.7095885, 52.01602806], [4.70954872, 52.01598243]]}, "id": "62f51226-eb9a-467b-bafa-ad82d4c2ba43", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.70947721, 52.01514586]}, "id": "63afe0a5-9e12-45da-b81e-a8afbbe79272", "properties": {"name": "Groen 7"}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.71091773, 52.01209603], [4.71051076, 52.01220367], [4.71038853, 52.01220367], [4.71030526, 52.01220367], [4.71000842, 52.01217391], [4.71008364, 52.01117194], [4.7092117, 52.01123053], [4.70915671, 52.01123383], [4.70908429, 52.01123301], [4.70902777, 52.01169636], [4.70901419, 52.01200876], [4.70893441, 52.01233369]]}, "id": "7c66f4e6-0d68-458f-be0e-a6604159cb23", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70893441, 52.01233369], [4.70881766, 52.01243668], [4.70809488, 52.01211286], [4.70752625, 52.01181982]]}, "id": "8e4f1ba8-2a3d-40a5-9452-786002949c9c", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70241334, 52.01138384], [4.70276004, 52.01166315], [4.70303483, 52.01194189], [4.70346314, 52.01234619], [4.70382039, 52.01258026], [4.70437738, 52.01290417]]}, "id": "8f8d72dc-791c-4e49-8367-66310602cc7d", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.71586544, 52.0189465], [4.71591247, 52.01830968], [4.71527381, 52.01827663], [4.71405124, 52.01819655], [4.71367842, 52.01816932], [4.71307928, 52.0181319], [4.71274839, 52.01809488], [4.71198133, 52.01804066], [4.71123145, 52.01799041], [4.71071258, 52.01795245]]}, "id": "13413959-1fcb-43bf-8c99-3aafd22cb3ed", "properties": null},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70475925, 52.01960209], [4.70468873, 52.0203805], [4.70725478, 52.02054739], [4.70778676, 52.02055381], [4.70986719, 52.02068912], [4.71133265, 52.02084613], [4.713014, 52.02100314], [4.7138321, 52.0208927], [4.71466104, 52.02097813], [4.71559795, 52.02107589], [4.71566621, 52.02085686], [4.71589049, 52.02008277], [4.71610501, 52.01921865], [4.71613981, 52.01898991], [4.71586152, 52.01895132]]}, "id": "157660a7-efb0-4eb5-8bee-723a4688bc7b", "properties": null},
        {"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[4.70989895, 52.01308651], [4.71016538, 52.0130615], [4.71031929, 52.01304705], [4.71084769, 52.01290343]]}, "id": "17edd161-93ef-431c-89f4-0a8a2c249607", "properties": {"name": ""}},
        {"type": "Feature", "geometry": {"type": "Point", "coordinates": [4.71571376, 52.01829793]}, "id": "0e246640-0511-4589-a9b8-4c58ebda47cc", "properties": {"name": "Groen 3"}}
    ]
}

let Icons = L.Icon.extend({
    options:{
        iconSize: [45, 45],
        shadowSize: [46, 46],
        iconAnchor: [22, 45],
    }
});

let iconGroen = new Icons({iconUrl: 'img/markerGroen.png',})



L.geoJSON(routeGroen,{
    style: function(feature){
        return{
            color: "#6BB536",
            weight: 3
        }
    },
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {icon: iconGroen});
    },
}).addTo(myMap);