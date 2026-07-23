// CGHS Rate Directory - PWA Logic
// Initialize rates from bundled data or localStorage

const INITIAL_RATES = [
  {
    "id": "1",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Consultation OPD",
    "nonNabh": 350,
    "nabh": 350
  },
  {
    "id": "2",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Consultation- for Inpatients",
    "nonNabh": 350,
    "nabh": 350
  },
  {
    "id": "3",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Dressings of wounds",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "4",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Suturing of wounds with local anaesthesia",
    "nonNabh": 108,
    "nabh": 124
  },
  {
    "id": "5",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Aspiration Plural Effusion - Diagnostic",
    "nonNabh": 120,
    "nabh": 138
  },
  {
    "id": "6",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Aspiration Plural Effusion - Therapeutic",
    "nonNabh": 193,
    "nabh": 222
  },
  {
    "id": "7",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Abdominal Aspiration - Diagnostic",
    "nonNabh": 345,
    "nabh": 397
  },
  {
    "id": "8",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Abdominal Aspiration - Therapeutic",
    "nonNabh": 460,
    "nabh": 529
  },
  {
    "id": "9",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Pericardial Aspiration",
    "nonNabh": 380,
    "nabh": 437
  },
  {
    "id": "10",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Joints Aspiration",
    "nonNabh": 317,
    "nabh": 365
  },
  {
    "id": "11",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Biopsy Skin",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "12",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Removal of Stitches",
    "nonNabh": 36,
    "nabh": 41
  },
  {
    "id": "13",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Venesection",
    "nonNabh": 124,
    "nabh": 143
  },
  {
    "id": "14",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Phimosis Under LA",
    "nonNabh": 1311,
    "nabh": 1508
  },
  {
    "id": "15",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Sternal puncture",
    "nonNabh": 173,
    "nabh": 199
  },
  {
    "id": "16",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Injection for Haemorrhoids",
    "nonNabh": 414,
    "nabh": 476
  },
  {
    "id": "17",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Injection for Varicose Veins",
    "nonNabh": 350,
    "nabh": 403
  },
  {
    "id": "18",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Urinary bladder Catheterisation",
    "nonNabh": 425,
    "nabh": 500
  },
  {
    "id": "19",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Dilatation of Urethra",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "20",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Incision & Drainage",
    "nonNabh": 420,
    "nabh": 483
  },
  {
    "id": "21",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Intercostal Drainage",
    "nonNabh": 125,
    "nabh": 144
  },
  {
    "id": "22",
    "category": "CGHS / LIST (DELHI/NCR)",
    "name": "Peritoneal Dialysis",
    "nonNabh": 1466,
    "nabh": 1686
  },
  {
    "id": "23",
    "category": "SKIN",
    "name": "Excision of Moles",
    "nonNabh": 345,
    "nabh": 397
  },
  {
    "id": "24",
    "category": "SKIN",
    "name": "Excision of Warts",
    "nonNabh": 310,
    "nabh": 357
  },
  {
    "id": "25",
    "category": "SKIN",
    "name": "Excision of Molluscum contagiosum",
    "nonNabh": 130,
    "nabh": 150
  },
  {
    "id": "26",
    "category": "SKIN",
    "name": "Excision of Venereal Warts",
    "nonNabh": 160,
    "nabh": 184
  },
  {
    "id": "27",
    "category": "SKIN",
    "name": "Excision of Corns",
    "nonNabh": 140,
    "nabh": 161
  },
  {
    "id": "28",
    "category": "SKIN",
    "name": "Intradermal (ID) Injection Keloid (Intralesional Injection)",
    "nonNabh": 97,
    "nabh": 112
  },
  {
    "id": "29",
    "category": "SKIN",
    "name": "Chemical Cautery (s)",
    "nonNabh": 110,
    "nabh": 127
  },
  {
    "id": "30",
    "category": "OPHTHALMOLOGY",
    "name": "Subconjunctival/subtenon’s injections in one eye",
    "nonNabh": 69,
    "nabh": 79
  },
  {
    "id": "31",
    "category": "OPHTHALMOLOGY",
    "name": "Subconjunctival/subtenon’s injections in both eyes",
    "nonNabh": 138,
    "nabh": 158
  },
  {
    "id": "32",
    "category": "OPHTHALMOLOGY",
    "name": "Pterygium Surgery",
    "nonNabh": 5500,
    "nabh": 6325
  },
  {
    "id": "33",
    "category": "OPHTHALMOLOGY",
    "name": "Conjunctival Peritomy",
    "nonNabh": 58,
    "nabh": 67
  },
  {
    "id": "34",
    "category": "OPHTHALMOLOGY",
    "name": "Conjunctival wound repair or exploration following blunt trauma",
    "nonNabh": 3300,
    "nabh": 3795
  },
  {
    "id": "35",
    "category": "OPHTHALMOLOGY",
    "name": "Removal of corneal foreign body",
    "nonNabh": 115,
    "nabh": 132
  },
  {
    "id": "36",
    "category": "OPHTHALMOLOGY",
    "name": "Cauterization of ulcer/subconjunctival injection in one eye",
    "nonNabh": 69,
    "nabh": 79
  },
  {
    "id": "37",
    "category": "OPHTHALMOLOGY",
    "name": "Cauterization of ulcer/subconjunctival injection in both eyes",
    "nonNabh": 138,
    "nabh": 159
  },
  {
    "id": "38",
    "category": "OPHTHALMOLOGY",
    "name": "Corneal grafting—Penetrating keratoplasty",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "39",
    "category": "OPHTHALMOLOGY",
    "name": "Corneal grafting—Lamellar keratoplasty",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "40",
    "category": "OPHTHALMOLOGY",
    "name": "Cyanoacrylate /fibrin glue application for corneal perforation",
    "nonNabh": 690,
    "nabh": 794
  },
  {
    "id": "41",
    "category": "OPHTHALMOLOGY",
    "name": "Bandage contact lenses for corneal perforation",
    "nonNabh": 460,
    "nabh": 529
  },
  {
    "id": "42",
    "category": "OPHTHALMOLOGY",
    "name": "Scleral grafting or conjunctival flap for corneal perforation",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "43",
    "category": "OPHTHALMOLOGY",
    "name": "Keratoconus correction with therapeutic contact lenses",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "44",
    "category": "OPHTHALMOLOGY",
    "name": "Ultraviolet (UV) radiation for cross-linking for keratoconus",
    "nonNabh": 1800,
    "nabh": 2070
  },
  {
    "id": "45",
    "category": "OPHTHALMOLOGY",
    "name": "EDTA for band shaped keratopathy",
    "nonNabh": 863,
    "nabh": 992
  },
  {
    "id": "46",
    "category": "OPHTHALMOLOGY",
    "name": "Arcuate keratotomy for astigmatism",
    "nonNabh": 2800,
    "nabh": 3220
  },
  {
    "id": "47",
    "category": "OPHTHALMOLOGY",
    "name": "Re-suturing (Primary suturing) of corneal wound",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "48",
    "category": "OPHTHALMOLOGY",
    "name": "Penetrating keratoplasty with glaucoma surgery",
    "nonNabh": 12144,
    "nabh": 13966
  },
  {
    "id": "49",
    "category": "OPHTHALMOLOGY",
    "name": "Penetrating keratoplasty with vitrectomy",
    "nonNabh": 12144,
    "nabh": 13966
  },
  {
    "id": "50",
    "category": "OPHTHALMOLOGY",
    "name": "Penetrating keratoplasty with IOL implantation",
    "nonNabh": 13656,
    "nabh": 15703
  },
  {
    "id": "51",
    "category": "OPHTHALMOLOGY",
    "name": "DALK- Deep anterior lamellar keratoplasty",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "52",
    "category": "OPHTHALMOLOGY",
    "name": "Keratoprosthesis stage I and II",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "53",
    "category": "OPHTHALMOLOGY",
    "name": "DSAEK Descemet’s stripping automated endothelial keratoplasty",
    "nonNabh": 16675,
    "nabh": 19176
  },
  {
    "id": "54",
    "category": "OPHTHALMOLOGY",
    "name": "ALTK- Automated lamellar therapeutic keratoplasty",
    "nonNabh": 16500,
    "nabh": 18975
  },
  {
    "id": "55",
    "category": "OPHTHALMOLOGY",
    "name": "Probing and Syringing of lacrimal sac- in one eye",
    "nonNabh": 69,
    "nabh": 79
  },
  {
    "id": "56",
    "category": "OPHTHALMOLOGY",
    "name": "Probing and Syringing of lacrimal sac- in both eye",
    "nonNabh": 138,
    "nabh": 159
  },
  {
    "id": "57",
    "category": "OPHTHALMOLOGY",
    "name": "Dacryocystorhinostomy-Plain",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "58",
    "category": "OPHTHALMOLOGY",
    "name": "Dacryocystorhinostomy-Plain with intubation and/or with lacrimal implants",
    "nonNabh": 9750,
    "nabh": 11213
  },
  {
    "id": "59",
    "category": "OPHTHALMOLOGY",
    "name": "Dacryocystorhinostomy-conjunctival with implant",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "60",
    "category": "OPHTHALMOLOGY",
    "name": "Caliculoplasty",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "61",
    "category": "OPHTHALMOLOGY",
    "name": "Dacryocystectomy",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "62",
    "category": "OPHTHALMOLOGY",
    "name": "Punctal plugs for dry eyes",
    "nonNabh": 130,
    "nabh": 150
  },
  {
    "id": "63",
    "category": "OPHTHALMOLOGY",
    "name": "Refraction",
    "nonNabh": 40,
    "nabh": 46
  },
  {
    "id": "64",
    "category": "OPHTHALMOLOGY",
    "name": "Indirect Ophthalmoscopy (Fundoscopy)",
    "nonNabh": 67,
    "nabh": 77
  },
  {
    "id": "65",
    "category": "OPHTHALMOLOGY",
    "name": "Orthoptic check-up- with synoptophore",
    "nonNabh": 44,
    "nabh": 51
  },
  {
    "id": "66",
    "category": "OPHTHALMOLOGY",
    "name": "Lees’ charting or Hess’ charting",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "67",
    "category": "OPHTHALMOLOGY",
    "name": "Orthoptic exercises",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "68",
    "category": "OPHTHALMOLOGY",
    "name": "Pleoptic exercises",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "69",
    "category": "OPHTHALMOLOGY",
    "name": "Perimetry (Visual Field Testing) -Goldman",
    "nonNabh": 144,
    "nabh": 166
  },
  {
    "id": "70",
    "category": "OPHTHALMOLOGY",
    "name": "Perimetry /Humphrey Visual Field (HVF ) test- Automated",
    "nonNabh": 144,
    "nabh": 166
  },
  {
    "id": "71",
    "category": "OPHTHALMOLOGY",
    "name": "Fluorescein angiography for fundus or iris",
    "nonNabh": 920,
    "nabh": 1058
  },
  {
    "id": "72",
    "category": "OPHTHALMOLOGY",
    "name": "Ultrasound A- Scan",
    "nonNabh": 863,
    "nabh": 992
  },
  {
    "id": "73",
    "category": "OPHTHALMOLOGY",
    "name": "Ultrasound B- Scan",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "74",
    "category": "OPHTHALMOLOGY",
    "name": "Fundus Photo Test",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "75",
    "category": "OPHTHALMOLOGY",
    "name": "Indocyanin green angiography",
    "nonNabh": 920,
    "nabh": 1058
  },
  {
    "id": "76",
    "category": "OPHTHALMOLOGY",
    "name": "Corneal endothelial cell count with specular microscopy",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "77",
    "category": "OPHTHALMOLOGY",
    "name": "Corneal topography",
    "nonNabh": 331,
    "nabh": 381
  },
  {
    "id": "78",
    "category": "OPHTHALMOLOGY",
    "name": "Corneal pachymetry (corneal thickness)/ CCT",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "79",
    "category": "OPHTHALMOLOGY",
    "name": "Auto-refraction",
    "nonNabh": 35,
    "nabh": 40
  },
  {
    "id": "80",
    "category": "OPHTHALMOLOGY",
    "name": "Macular function tests",
    "nonNabh": 44,
    "nabh": 51
  },
  {
    "id": "81",
    "category": "OPHTHALMOLOGY",
    "name": "Potential acuity metry",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "82",
    "category": "OPHTHALMOLOGY",
    "name": "Laser interferometry",
    "nonNabh": 173,
    "nabh": 199
  },
  {
    "id": "83",
    "category": "OPHTHALMOLOGY",
    "name": "OCT-Optical coherence tomography",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "84",
    "category": "OPHTHALMOLOGY",
    "name": "HRT- Heidelberg’s retinal tomogram",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "85",
    "category": "OPHTHALMOLOGY",
    "name": "GDx Nerve fibre layer analysis",
    "nonNabh": 88,
    "nabh": 101
  },
  {
    "id": "86",
    "category": "OPHTHALMOLOGY",
    "name": "UBM- Ultrasound bio microscopy",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "87",
    "category": "OPHTHALMOLOGY",
    "name": "Non Contact tonometry (NCT)",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "88",
    "category": "OPHTHALMOLOGY",
    "name": "IOP measurement with schiotz",
    "nonNabh": 30,
    "nabh": 35
  },
  {
    "id": "89",
    "category": "OPHTHALMOLOGY",
    "name": "IOP measurement with applanation tonometry",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "90",
    "category": "OPHTHALMOLOGY",
    "name": "Three mirror examination for retina",
    "nonNabh": 58,
    "nabh": 67
  },
  {
    "id": "91",
    "category": "OPHTHALMOLOGY",
    "name": "90 D lens examination",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "92",
    "category": "OPHTHALMOLOGY",
    "name": "Gonioscopy",
    "nonNabh": 58,
    "nabh": 67
  },
  {
    "id": "93",
    "category": "OPHTHALMOLOGY",
    "name": "Chalazion incision and curettage in one eye",
    "nonNabh": 400,
    "nabh": 460
  },
  {
    "id": "94",
    "category": "OPHTHALMOLOGY",
    "name": "Chalazion incision and curettage in both eyes",
    "nonNabh": 431,
    "nabh": 496
  },
  {
    "id": "95",
    "category": "OPHTHALMOLOGY",
    "name": "Ptosis surgery with fasanella servat procedure",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "96",
    "category": "OPHTHALMOLOGY",
    "name": "Ptosis surgery with LPS resection one lid",
    "nonNabh": 5500,
    "nabh": 6325
  },
  {
    "id": "97",
    "category": "OPHTHALMOLOGY",
    "name": "Ptosis surgery with Sling surgery one lid",
    "nonNabh": 6670,
    "nabh": 7671
  },
  {
    "id": "98",
    "category": "OPHTHALMOLOGY",
    "name": "Ectropion surgery- one lid",
    "nonNabh": 1400,
    "nabh": 1610
  },
  {
    "id": "99",
    "category": "OPHTHALMOLOGY",
    "name": "Ectropion surgery- both lids",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "100",
    "category": "OPHTHALMOLOGY",
    "name": "Epicanthus correction",
    "nonNabh": 1550,
    "nabh": 1783
  },
  {
    "id": "101",
    "category": "OPHTHALMOLOGY",
    "name": "Cantholysis and canthotomy",
    "nonNabh": 575,
    "nabh": 662
  },
  {
    "id": "102",
    "category": "OPHTHALMOLOGY",
    "name": "Entropion surgery- one lid",
    "nonNabh": 1380,
    "nabh": 1587
  },
  {
    "id": "103",
    "category": "OPHTHALMOLOGY",
    "name": "Entropion surgery- both lids",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "104",
    "category": "OPHTHALMOLOGY",
    "name": "Tarsorraphy",
    "nonNabh": 650,
    "nabh": 748
  },
  {
    "id": "105",
    "category": "OPHTHALMOLOGY",
    "name": "Suturing of lid lacerations",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "106",
    "category": "OPHTHALMOLOGY",
    "name": "Lid retraction repair",
    "nonNabh": 1700,
    "nabh": 1955
  },
  {
    "id": "107",
    "category": "OPHTHALMOLOGY",
    "name": "Concretions removal",
    "nonNabh": 115,
    "nabh": 132
  },
  {
    "id": "108",
    "category": "OPHTHALMOLOGY",
    "name": "Bucket handle procedure for lid tumors",
    "nonNabh": 345,
    "nabh": 397
  },
  {
    "id": "109",
    "category": "OPHTHALMOLOGY",
    "name": "Cheek rotation flap for lid tumors",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "110",
    "category": "OPHTHALMOLOGY",
    "name": "Orbitotomy",
    "nonNabh": 8050,
    "nabh": 9258
  },
  {
    "id": "111",
    "category": "OPHTHALMOLOGY",
    "name": "Enucleation",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "112",
    "category": "OPHTHALMOLOGY",
    "name": "Enucleation with orbital implants and artificial",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "113",
    "category": "OPHTHALMOLOGY",
    "name": "Evisceration",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "114",
    "category": "OPHTHALMOLOGY",
    "name": "Evisceration with orbital implants and artificial prosthesis",
    "nonNabh": 5693,
    "nabh": 6547
  },
  {
    "id": "115",
    "category": "OPHTHALMOLOGY",
    "name": "Telecanthus correction",
    "nonNabh": 5175,
    "nabh": 5951
  },
  {
    "id": "116",
    "category": "OPHTHALMOLOGY",
    "name": "Orbital decompression",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "117",
    "category": "OPHTHALMOLOGY",
    "name": "Exenteration",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "118",
    "category": "OPHTHALMOLOGY",
    "name": "Exenteration with skin grafting",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "119",
    "category": "OPHTHALMOLOGY",
    "name": "Fracture orbital repair",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "120",
    "category": "OPHTHALMOLOGY",
    "name": "Retinal laser procedures",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "121",
    "category": "OPHTHALMOLOGY",
    "name": "Retinal detachment surgery (RDS)",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "122",
    "category": "OPHTHALMOLOGY",
    "name": "Retinal detachment surgery (RDS) with scleral buckling",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "123",
    "category": "OPHTHALMOLOGY",
    "name": "Buckle removal",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "124",
    "category": "OPHTHALMOLOGY",
    "name": "Silicone oil removal",
    "nonNabh": 2800,
    "nabh": 3220
  },
  {
    "id": "125",
    "category": "OPHTHALMOLOGY",
    "name": "Anterior retinal cryopexy",
    "nonNabh": 1162,
    "nabh": 1336
  },
  {
    "id": "126",
    "category": "OPHTHALMOLOGY",
    "name": "Squint correction for one eye",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "127",
    "category": "OPHTHALMOLOGY",
    "name": "Squint correction for both eyes",
    "nonNabh": 7500,
    "nabh": 8625
  },
  {
    "id": "128",
    "category": "OPHTHALMOLOGY",
    "name": "Trabeculectomy",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "129",
    "category": "OPHTHALMOLOGY",
    "name": "Trabeculotomy",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "130",
    "category": "OPHTHALMOLOGY",
    "name": "Trabeculectomy with Trabeculotomy",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "131",
    "category": "OPHTHALMOLOGY",
    "name": "Trephination",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "132",
    "category": "OPHTHALMOLOGY",
    "name": "Goniotomy",
    "nonNabh": 345,
    "nabh": 397
  },
  {
    "id": "133",
    "category": "OPHTHALMOLOGY",
    "name": "Glaucoma surgery with Glaucoma valves",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "134",
    "category": "OPHTHALMOLOGY",
    "name": "Cyclocryotherapy",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "135",
    "category": "OPHTHALMOLOGY",
    "name": "YAG laser iridotomy",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "136",
    "category": "OPHTHALMOLOGY",
    "name": "YAG laser capsulotomy",
    "nonNabh": 1093,
    "nabh": 1257
  },
  {
    "id": "137",
    "category": "OPHTHALMOLOGY",
    "name": "ALT-Argon laser trabeculoplasty",
    "nonNabh": 1495,
    "nabh": 1719
  },
  {
    "id": "138",
    "category": "OPHTHALMOLOGY",
    "name": "PDT-Photodymic therapy",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "139",
    "category": "OPHTHALMOLOGY",
    "name": "TTT- Transpupillary thermal therapy",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "140",
    "category": "OPHTHALMOLOGY",
    "name": "PTK- Phototherapeutic keratectomy",
    "nonNabh": 7500,
    "nabh": 8625
  },
  {
    "id": "141",
    "category": "OPHTHALMOLOGY",
    "name": "Argon/diode laser for retinal detatchment",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "142",
    "category": "OPHTHALMOLOGY",
    "name": "Intralase application for keratoconus",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "143",
    "category": "OPHTHALMOLOGY",
    "name": "EOG- electro-oculogram",
    "nonNabh": 900,
    "nabh": 1035
  },
  {
    "id": "144",
    "category": "OPHTHALMOLOGY",
    "name": "ERG- Electro-retinogram",
    "nonNabh": 794,
    "nabh": 913
  },
  {
    "id": "145",
    "category": "OPHTHALMOLOGY",
    "name": "VEP- visually evoked potential",
    "nonNabh": 800,
    "nabh": 920
  },
  {
    "id": "146",
    "category": "OPHTHALMOLOGY",
    "name": "Vitrectomy- pars plana",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "147",
    "category": "OPHTHALMOLOGY",
    "name": "Intravitreal injections of antibiotics",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "148",
    "category": "OPHTHALMOLOGY",
    "name": "Intravitreal Injection of drugs (Ranibizumab/ Aflibercept etc) excluding cost of drug",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "149",
    "category": "OPHTHALMOLOGY",
    "name": "X Ray orbit",
    "nonNabh": 115,
    "nabh": 132
  },
  {
    "id": "150",
    "category": "OPHTHALMOLOGY",
    "name": "CT orbit and brain",
    "nonNabh": 1600,
    "nabh": 1840
  },
  {
    "id": "151",
    "category": "OPHTHALMOLOGY",
    "name": "MRI- Orbit and brain",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "152",
    "category": "OPHTHALMOLOGY",
    "name": "Dacryocystography",
    "nonNabh": 340,
    "nabh": 391
  },
  {
    "id": "153",
    "category": "OPHTHALMOLOGY",
    "name": "Orbital angio-graphical studies",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "154",
    "category": "OPHTHALMOLOGY",
    "name": "Extracapsular cataract extraction (ECCE) with IOL",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "155",
    "category": "OPHTHALMOLOGY",
    "name": "Small Incision Cataract Surgery (SICS) with IOL",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "156",
    "category": "OPHTHALMOLOGY",
    "name": "Phaco with foldable IOL (silicone and acrylic)/PMMA IOL",
    "nonNabh": 10781,
    "nabh": 12398
  },
  {
    "id": "157",
    "category": "OPHTHALMOLOGY",
    "name": "Pars plana lensectomy with/without IOL",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "158",
    "category": "OPHTHALMOLOGY",
    "name": "Secondary IOL implantation- AC IOL PC IOL or scleral fixated IOL",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "159",
    "category": "OPHTHALMOLOGY",
    "name": "Cataract extraction with IOL with capsular tension rings (Cionni’s ring)",
    "nonNabh": 13500,
    "nabh": 15525
  },
  {
    "id": "160",
    "category": "OPHTHALMOLOGY",
    "name": "Optic nerve sheathotomy",
    "nonNabh": 7500,
    "nabh": 8625
  },
  {
    "id": "161",
    "category": "OPHTHALMOLOGY",
    "name": "Iridodialysis repair or papillary reconstruction",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "162",
    "category": "OPHTHALMOLOGY",
    "name": "Iris cyst removal",
    "nonNabh": 850,
    "nabh": 978
  },
  {
    "id": "163",
    "category": "OPHTHALMOLOGY",
    "name": "Lid Abscess incision and Drainage",
    "nonNabh": 1700,
    "nabh": 1955
  },
  {
    "id": "164",
    "category": "OPHTHALMOLOGY",
    "name": "Orbital Abscess incision and Drainage",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "165",
    "category": "OPHTHALMOLOGY",
    "name": "Biopsy (eye)",
    "nonNabh": 460,
    "nabh": 529
  },
  {
    "id": "166",
    "category": "OPHTHALMOLOGY",
    "name": "Paracentesis (eye)",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "167",
    "category": "OPHTHALMOLOGY",
    "name": "Scleral graft for scleral melting or perforation",
    "nonNabh": 2800,
    "nabh": 3220
  },
  {
    "id": "168",
    "category": "OPHTHALMOLOGY",
    "name": "Amniotic membrane grafting",
    "nonNabh": 1100,
    "nabh": 1265
  },
  {
    "id": "169",
    "category": "OPHTHALMOLOGY",
    "name": "Cyclodiathermy",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "170",
    "category": "OPHTHALMOLOGY",
    "name": "Intraocular foreign body removal",
    "nonNabh": 187,
    "nabh": 215
  },
  {
    "id": "171",
    "category": "OPHTHALMOLOGY",
    "name": "Electrolysis (eye)",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "172",
    "category": "OPHTHALMOLOGY",
    "name": "Perforating injury repair (eye)",
    "nonNabh": 4500,
    "nabh": 5175
  },
  {
    "id": "173",
    "category": "OPHTHALMOLOGY",
    "name": "Botulinum injection for blepharospasm or squint (excluding cost of drug)",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "174",
    "category": "DENTAL",
    "name": "Flap Operation per quadrant",
    "nonNabh": 360,
    "nabh": 414
  },
  {
    "id": "175",
    "category": "DENTAL",
    "name": "Gingivectomy per quadrant",
    "nonNabh": 234,
    "nabh": 269
  },
  {
    "id": "176",
    "category": "DENTAL",
    "name": "Reduction & immobilization of fracture- Maxilla Under LA",
    "nonNabh": 900,
    "nabh": 1035
  },
  {
    "id": "177",
    "category": "DENTAL",
    "name": "Reduction & immobilization of Fracture-Mandible Under LA",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "178",
    "category": "DENTAL",
    "name": "Splints/Circummandibular wiring under LA",
    "nonNabh": 510,
    "nabh": 587
  },
  {
    "id": "179",
    "category": "DENTAL",
    "name": "Splints/Circummandibular wiring under GA",
    "nonNabh": 990,
    "nabh": 1139
  },
  {
    "id": "180",
    "category": "DENTAL",
    "name": "Internal wire fixation/plate fixation of Maxilla under LA",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "181",
    "category": "DENTAL",
    "name": "Internal wire fixation/plate fixation of Maxilla under GA",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "182",
    "category": "DENTAL",
    "name": "Internal wire fixation/plate fixation of Mandible under LA",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "183",
    "category": "DENTAL",
    "name": "Internal wire fixation/plate fixation of Mandible under GA",
    "nonNabh": 4250,
    "nabh": 4888
  },
  {
    "id": "184",
    "category": "DENTAL",
    "name": "Extraction per tooth under LA",
    "nonNabh": 80,
    "nabh": 92
  },
  {
    "id": "185",
    "category": "DENTAL",
    "name": "Complicated Extraction per Tooth under LA",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "186",
    "category": "DENTAL",
    "name": "Extraction of impacted tooth under LA",
    "nonNabh": 160,
    "nabh": 184
  },
  {
    "id": "187",
    "category": "DENTAL",
    "name": "Extraction in mentally retarded/patients with systemic diseases/patient with special needs under short term GA",
    "nonNabh": 939,
    "nabh": 1080
  },
  {
    "id": "188",
    "category": "DENTAL",
    "name": "Cyst & tumour of Maxilla /mandible by enucleation/ excision/ marsupialisation upto 4 cms under LA",
    "nonNabh": 244,
    "nabh": 281
  },
  {
    "id": "189",
    "category": "DENTAL",
    "name": "Cyst & tumour of Maxilla / mandible by enucleation / excision / marsupialisation size more than 4 cms under LA",
    "nonNabh": 406,
    "nabh": 467
  },
  {
    "id": "190",
    "category": "DENTAL",
    "name": "Cyst & tumour of Maxilla/mandible by enucleation / excision / marsupialisation size more than 4 cms under GA",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "191",
    "category": "DENTAL",
    "name": "TM joint ankylosis- under GA",
    "nonNabh": 7500,
    "nabh": 8625
  },
  {
    "id": "192",
    "category": "DENTAL",
    "name": "Biopsy Intraoral-Soft tissue",
    "nonNabh": 374,
    "nabh": 430
  },
  {
    "id": "193",
    "category": "DENTAL",
    "name": "Biopsy Intraoral-Bone",
    "nonNabh": 374,
    "nabh": 430
  },
  {
    "id": "194",
    "category": "DENTAL",
    "name": "Hemi-mandibulectomy with graft",
    "nonNabh": 21000,
    "nabh": 24150
  },
  {
    "id": "195",
    "category": "DENTAL",
    "name": "Hemi-mandibulectomy without graft",
    "nonNabh": 21000,
    "nabh": 24150
  },
  {
    "id": "196",
    "category": "DENTAL",
    "name": "Segmental-mandibulectomy with graft",
    "nonNabh": 3400,
    "nabh": 3910
  },
  {
    "id": "197",
    "category": "DENTAL",
    "name": "Segmental-mandibulectomy without graft",
    "nonNabh": 990,
    "nabh": 1139
  },
  {
    "id": "198",
    "category": "DENTAL",
    "name": "Maxillectomy- Total with graft",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "199",
    "category": "DENTAL",
    "name": "Maxillectomy- Total without graft",
    "nonNabh": 1950,
    "nabh": 2243
  },
  {
    "id": "200",
    "category": "DENTAL",
    "name": "Maxillectomy- partial with graft",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "201",
    "category": "DENTAL",
    "name": "Maxillectomy- partial without graft",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "202",
    "category": "DENTAL",
    "name": "Release of fibrous bands & grafting -in (OSMF) treatment under GA",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "203",
    "category": "DENTAL",
    "name": "Pre-prosthetic surgery- Alveoloplasty (per arch)",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "204",
    "category": "DENTAL",
    "name": "Pre-prosthetic surgery - ridge augmentation (per arch)",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "205",
    "category": "DENTAL",
    "name": "Root canal Treatment(RCT) Anterior teeth(per tooth)",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "206",
    "category": "DENTAL",
    "name": "Root canal Treatment(RCT) Posterior teeth (per tooth)",
    "nonNabh": 700,
    "nabh": 805
  },
  {
    "id": "207",
    "category": "DENTAL",
    "name": "Apicoectomy- Single root",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "208",
    "category": "DENTAL",
    "name": "Apicoectomy-Multiple roots",
    "nonNabh": 650,
    "nabh": 748
  },
  {
    "id": "209",
    "category": "DENTAL",
    "name": "Metal Crown-per unit",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "210",
    "category": "DENTAL",
    "name": "Metal Crown with Acrylic facing per unit",
    "nonNabh": 700,
    "nabh": 805
  },
  {
    "id": "211",
    "category": "DENTAL",
    "name": "Complete single denture-metal based",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "212",
    "category": "DENTAL",
    "name": "Complete denture- acrylic based per arch",
    "nonNabh": 950,
    "nabh": 1093
  },
  {
    "id": "213",
    "category": "DENTAL",
    "name": "Removable partial denture-Metal based-upto 3 teeth",
    "nonNabh": 700,
    "nabh": 805
  },
  {
    "id": "214",
    "category": "DENTAL",
    "name": "Removable partial denture-Metal based-more than 3 teeth",
    "nonNabh": 900,
    "nabh": 1035
  },
  {
    "id": "215",
    "category": "DENTAL",
    "name": "Removable partial denture-Acrylic based-upto 3 teeth",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "216",
    "category": "DENTAL",
    "name": "Removable partial denture-Acrylic based-more than 3 teeth / Per tooth",
    "nonNabh": 264,
    "nabh": 304
  },
  {
    "id": "217",
    "category": "DENTAL",
    "name": "Amalgam restoration-per tooth",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "218",
    "category": "DENTAL",
    "name": "Composite Restoration-per tooth-anterior tooth",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "219",
    "category": "DENTAL",
    "name": "Glass Ionomer filling-per tooth",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "220",
    "category": "DENTAL",
    "name": "Scaling & polishing",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "221",
    "category": "DENTAL",
    "name": "Removable Orthodontics appliance- per Arch",
    "nonNabh": 700,
    "nabh": 805
  },
  {
    "id": "222",
    "category": "DENTAL",
    "name": "Fixed Orthodontics-per Arch",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "223",
    "category": "DENTAL",
    "name": "Space maintainers-Fixed",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "224",
    "category": "DENTAL",
    "name": "Habit breaking appliances-removable",
    "nonNabh": 800,
    "nabh": 920
  },
  {
    "id": "225",
    "category": "DENTAL",
    "name": "Habit breaking appliances-Fixed",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "226",
    "category": "DENTAL",
    "name": "Expansion plate",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "227",
    "category": "DENTAL",
    "name": "Feeding appliance for cleft palate",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "228",
    "category": "DENTAL",
    "name": "Maxillo-facial prosthesis (sal /auricular/orbital/facial lost part)",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "229",
    "category": "DENTAL",
    "name": "Functional orthodontic appliances",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "230",
    "category": "DENTAL",
    "name": "Obturator (Maxillo-facial)",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "231",
    "category": "DENTAL",
    "name": "Occlusal night guard(splint)",
    "nonNabh": 800,
    "nabh": 920
  },
  {
    "id": "232",
    "category": "ENT",
    "name": "Pure Tone Audiogram / Pure Tone Audiometry / PTA",
    "nonNabh": 172,
    "nabh": 198
  },
  {
    "id": "233",
    "category": "ENT",
    "name": "Impedance with stepedial reflex / Impedance Audiometry",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "234",
    "category": "ENT",
    "name": "Short Increment Sensitivity Index (SISI) Tone Decay",
    "nonNabh": 132,
    "nabh": 152
  },
  {
    "id": "235",
    "category": "ENT",
    "name": "Multiple hearing assessment test to Adults",
    "nonNabh": 115,
    "nabh": 132
  },
  {
    "id": "236",
    "category": "ENT",
    "name": "Speech Discrimination Score",
    "nonNabh": 90,
    "nabh": 103
  },
  {
    "id": "237",
    "category": "ENT",
    "name": "Speech Assessment",
    "nonNabh": 120,
    "nabh": 138
  },
  {
    "id": "238",
    "category": "ENT",
    "name": "Speech therapy per session of 30-40 minutes",
    "nonNabh": 131,
    "nabh": 151
  },
  {
    "id": "239",
    "category": "ENT",
    "name": "Cold Calorie Test for Vestibular function",
    "nonNabh": 172,
    "nabh": 198
  },
  {
    "id": "240",
    "category": "ENT",
    "name": "Removal of foreign body From Nose",
    "nonNabh": 345,
    "nabh": 397
  },
  {
    "id": "241",
    "category": "ENT",
    "name": "Removal of foreign body From Ear",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "242",
    "category": "ENT",
    "name": "Syringing (Ear)",
    "nonNabh": 166,
    "nabh": 191
  },
  {
    "id": "243",
    "category": "ENT",
    "name": "Polyp removal under LA",
    "nonNabh": 575,
    "nabh": 661
  },
  {
    "id": "244",
    "category": "ENT",
    "name": "Polyp removal under GA",
    "nonNabh": 850,
    "nabh": 978
  },
  {
    "id": "245",
    "category": "ENT",
    "name": "Peritonsillar abscess Drainage under LA",
    "nonNabh": 1449,
    "nabh": 1666
  },
  {
    "id": "246",
    "category": "ENT",
    "name": "Myringoplasty",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "247",
    "category": "ENT",
    "name": "Staepedectomy",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "248",
    "category": "ENT",
    "name": "Myringotomy with Grommet insertion",
    "nonNabh": 4600,
    "nabh": 5290
  },
  {
    "id": "249",
    "category": "ENT",
    "name": "Tympanotomy",
    "nonNabh": 8625,
    "nabh": 9919
  },
  {
    "id": "250",
    "category": "ENT",
    "name": "Tympanoplasty",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "251",
    "category": "ENT",
    "name": "Mastoidectomy",
    "nonNabh": 14950,
    "nabh": 17193
  },
  {
    "id": "252",
    "category": "ENT",
    "name": "Otoplasty",
    "nonNabh": 16100,
    "nabh": 18515
  },
  {
    "id": "253",
    "category": "ENT",
    "name": "Labyrinthectomy",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "254",
    "category": "ENT",
    "name": "Skull Base surgery",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "255",
    "category": "ENT",
    "name": "Facial Nerve Decompression",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "256",
    "category": "ENT",
    "name": "Septoplasty",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "257",
    "category": "ENT",
    "name": "Submucous Resection",
    "nonNabh": 7314,
    "nabh": 8411
  },
  {
    "id": "258",
    "category": "ENT",
    "name": "Septo-rhinoplasty",
    "nonNabh": 16100,
    "nabh": 18515
  },
  {
    "id": "259",
    "category": "ENT",
    "name": "Rhinoplasty- Non-cosmetic",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "260",
    "category": "ENT",
    "name": "Fracture Reduction of Nasal Bone",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "261",
    "category": "ENT",
    "name": "Intra nasal Diathermy",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "262",
    "category": "ENT",
    "name": "Turbinectomy",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "263",
    "category": "ENT",
    "name": "Endoscopic Dacryocystorhinostomy (DCR)",
    "nonNabh": 13000,
    "nabh": 14950
  },
  {
    "id": "264",
    "category": "ENT",
    "name": "Endoscopic Surgery (ENT)",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "265",
    "category": "ENT",
    "name": "Septal Perforation Repair",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "266",
    "category": "ENT",
    "name": "Antrum Puncture",
    "nonNabh": 950,
    "nabh": 1093
  },
  {
    "id": "267",
    "category": "ENT",
    "name": "Lateral Rhinotomy",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "268",
    "category": "ENT",
    "name": "Cranio-facial resection",
    "nonNabh": 25500,
    "nabh": 29325
  },
  {
    "id": "269",
    "category": "ENT",
    "name": "Caldwell Luc Surgery (Radical Antrostomy for maxillary sinus)",
    "nonNabh": 10626,
    "nabh": 12220
  },
  {
    "id": "270",
    "category": "ENT",
    "name": "Angiofibroma Excision",
    "nonNabh": 17000,
    "nabh": 19550
  },
  {
    "id": "271",
    "category": "ENT",
    "name": "Endoscopic Hypophysectomy",
    "nonNabh": 21500,
    "nabh": 24725
  },
  {
    "id": "272",
    "category": "ENT",
    "name": "Endoscopic Optic Nerve Decompression",
    "nonNabh": 32775,
    "nabh": 37691
  },
  {
    "id": "273",
    "category": "ENT",
    "name": "Decompression of Orbit",
    "nonNabh": 25500,
    "nabh": 29325
  },
  {
    "id": "274",
    "category": "ENT",
    "name": "Punch/Wedge biopsy",
    "nonNabh": 674,
    "nabh": 775
  },
  {
    "id": "275",
    "category": "ENT",
    "name": "Tonsillectomy",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "276",
    "category": "ENT",
    "name": "Uvulo-palatoplasty",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "277",
    "category": "ENT",
    "name": "Functional Endoscopic Sinus Surgery (FESS) for Antrochoanal polyp",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "278",
    "category": "ENT",
    "name": "Functional Endoscopic Sinus Surgery (FESS) for ethmoidal polyp",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "279",
    "category": "ENT",
    "name": "Polyp removal ear",
    "nonNabh": 748,
    "nabh": 860
  },
  {
    "id": "280",
    "category": "ENT",
    "name": "Polyp removal Nose(Septal polyp)",
    "nonNabh": 748,
    "nabh": 860
  },
  {
    "id": "281",
    "category": "ENT",
    "name": "Mastoidectomy plus Ossiculoplasty including TORP (Total Ossicular Replacement Prosthesis) or PORP (Partial Ossicular Replacement Prosthesis)",
    "nonNabh": 2415,
    "nabh": 2777
  },
  {
    "id": "282",
    "category": "ENT",
    "name": "Endolymphatic sac decompression",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "283",
    "category": "ENT",
    "name": "Diagnostic endoscopy under GA",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "284",
    "category": "ENT",
    "name": "Young's operation for Atrophic rhinitis",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "285",
    "category": "ENT",
    "name": "Vidian neurectomy for vasomotor Rhinitis",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "286",
    "category": "ENT",
    "name": "Nasal Packing-anterior",
    "nonNabh": 345,
    "nabh": 397
  },
  {
    "id": "287",
    "category": "ENT",
    "name": "Nasal Packing-posterior",
    "nonNabh": 805,
    "nabh": 926
  },
  {
    "id": "288",
    "category": "ENT",
    "name": "Ranula Excision",
    "nonNabh": 6843,
    "nabh": 7869
  },
  {
    "id": "289",
    "category": "ENT",
    "name": "Tongue Tie excision",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "290",
    "category": "ENT",
    "name": "Sub Mandibular Duct Lithotomy",
    "nonNabh": 269,
    "nabh": 309
  },
  {
    "id": "291",
    "category": "ENT",
    "name": "Adenoidectomy",
    "nonNabh": 5640,
    "nabh": 6486
  },
  {
    "id": "292",
    "category": "ENT",
    "name": "Palatopharyngoplasty",
    "nonNabh": 8165,
    "nabh": 9390
  },
  {
    "id": "293",
    "category": "ENT",
    "name": "Pharyngoplasty",
    "nonNabh": 17193,
    "nabh": 19772
  },
  {
    "id": "294",
    "category": "ENT",
    "name": "Styloidectomy",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "295",
    "category": "ENT",
    "name": "Direct laryngoscopy including Biopsy under GA",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "296",
    "category": "ENT",
    "name": "Oesophagoscopy with foreign body removal from Oesophagus",
    "nonNabh": 1800,
    "nabh": 2070
  },
  {
    "id": "297",
    "category": "ENT",
    "name": "Bronchoscopy with foreign body (FB) removal",
    "nonNabh": 2438,
    "nabh": 2804
  },
  {
    "id": "298",
    "category": "ENT",
    "name": "Other Major Surgery-ENT",
    "nonNabh": 1500,
    "nabh": 17250
  },
  {
    "id": "299",
    "category": "ENT",
    "name": "Other Minor Surgery-ENT",
    "nonNabh": 8500,
    "nabh": 10000
  },
  {
    "id": "300",
    "category": "ENT",
    "name": "Ear Lobe Repair one side",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "301",
    "category": "HEAD & NECK",
    "name": "Excision of Pinna for Growth (Squamous/Basal/ Injuries) Skin Only",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "302",
    "category": "HEAD & NECK",
    "name": "Excision of Pinna for Growth (Squamous/Basal/ Injuries) Skin and Cartilage",
    "nonNabh": 3800,
    "nabh": 4370
  },
  {
    "id": "303",
    "category": "HEAD & NECK",
    "name": "Partial Amputation of Pinna",
    "nonNabh": 4500,
    "nabh": 5175
  },
  {
    "id": "304",
    "category": "HEAD & NECK",
    "name": "Total Amputation of Pinna",
    "nonNabh": 6200,
    "nabh": 7130
  },
  {
    "id": "305",
    "category": "HEAD & NECK",
    "name": "Total Amputation & Excision of External Auditory Meatus",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "306",
    "category": "HEAD & NECK",
    "name": "Excision of Cystic Hygroma",
    "nonNabh": 5175,
    "nabh": 5951
  },
  {
    "id": "307",
    "category": "HEAD & NECK",
    "name": "Excision of Cystic Hygroma Extensive",
    "nonNabh": 7452,
    "nabh": 8570
  },
  {
    "id": "308",
    "category": "HEAD & NECK",
    "name": "Excision of Branchial Cyst",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "309",
    "category": "HEAD & NECK",
    "name": "Excision of Branchial Sinus",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "310",
    "category": "HEAD & NECK",
    "name": "Excision of Pharyngeal Diverticulum",
    "nonNabh": 10580,
    "nabh": 12167
  },
  {
    "id": "311",
    "category": "HEAD & NECK",
    "name": "Excision of Carotid Body-Tumours",
    "nonNabh": 11615,
    "nabh": 13357
  },
  {
    "id": "312",
    "category": "HEAD & NECK",
    "name": "Operation for Cervical Rib",
    "nonNabh": 12500,
    "nabh": 14375
  },
  {
    "id": "313",
    "category": "HEAD & NECK",
    "name": "Block Dissection of Cervical Lymph Nodes",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "314",
    "category": "HEAD & NECK",
    "name": "Pharyngectomy & Reconstruction",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "315",
    "category": "HEAD & NECK",
    "name": "Operation for Carcinoma Lip - Wedge-Excision",
    "nonNabh": 8050,
    "nabh": 9258
  },
  {
    "id": "316",
    "category": "HEAD & NECK",
    "name": "Operation for Carcinoma Lip - Vermilionectomy",
    "nonNabh": 5758,
    "nabh": 6622
  },
  {
    "id": "317",
    "category": "HEAD & NECK",
    "name": "Operation for Carcinoma Lip - Wedge Excision and Vermilionectomy",
    "nonNabh": 9292,
    "nabh": 10686
  },
  {
    "id": "318",
    "category": "HEAD & NECK",
    "name": "Estlander Operation (Estlander flap in plastic surgery of lips)",
    "nonNabh": 7475,
    "nabh": 8596
  },
  {
    "id": "319",
    "category": "HEAD & NECK",
    "name": "Abbe Operation (Abbe flap in plastic surgery of lips)",
    "nonNabh": 9800,
    "nabh": 11270
  },
  {
    "id": "320",
    "category": "HEAD & NECK",
    "name": "Cheek Advancement",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "321",
    "category": "HEAD & NECK",
    "name": "Excision of the Maxilla",
    "nonNabh": 19320,
    "nabh": 22218
  },
  {
    "id": "322",
    "category": "HEAD & NECK",
    "name": "Excision of mandible-segmental",
    "nonNabh": 15525,
    "nabh": 17854
  },
  {
    "id": "323",
    "category": "HEAD & NECK",
    "name": "Mandibulectomy",
    "nonNabh": 21000,
    "nabh": 24150
  },
  {
    "id": "324",
    "category": "HEAD & NECK",
    "name": "Partial Glossectomy",
    "nonNabh": 5520,
    "nabh": 6348
  },
  {
    "id": "325",
    "category": "HEAD & NECK",
    "name": "Hemiglossectomy",
    "nonNabh": 7000,
    "nabh": 8050
  },
  {
    "id": "326",
    "category": "HEAD & NECK",
    "name": "Total Glossectomy",
    "nonNabh": 22885,
    "nabh": 26318
  },
  {
    "id": "327",
    "category": "HEAD & NECK",
    "name": "Combined Mandibulectomy and Neck Dissection Operation (Commando Operation)",
    "nonNabh": 22000,
    "nabh": 25300
  },
  {
    "id": "328",
    "category": "HEAD & NECK",
    "name": "Parotidectomy - Superficial",
    "nonNabh": 12075,
    "nabh": 13886
  },
  {
    "id": "329",
    "category": "HEAD & NECK",
    "name": "Parotidectomy - Total",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "330",
    "category": "HEAD & NECK",
    "name": "Parotidectomy - Radical",
    "nonNabh": 19550,
    "nabh": 22483
  },
  {
    "id": "331",
    "category": "HEAD & NECK",
    "name": "Repair of Parotid Duct",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "332",
    "category": "HEAD & NECK",
    "name": "Removal of Submandibular Salivary gland",
    "nonNabh": 8625,
    "nabh": 9919
  },
  {
    "id": "333",
    "category": "HEAD & NECK",
    "name": "Hemithyroidectomy",
    "nonNabh": 9500,
    "nabh": 10925
  },
  {
    "id": "334",
    "category": "HEAD & NECK",
    "name": "Partial Thyroidectomy (lobectomy)",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "335",
    "category": "HEAD & NECK",
    "name": "Subtotal Thyroidectomy",
    "nonNabh": 13053,
    "nabh": 15011
  },
  {
    "id": "336",
    "category": "HEAD & NECK",
    "name": "Total Thyroidectomy",
    "nonNabh": 19000,
    "nabh": 21850
  },
  {
    "id": "337",
    "category": "HEAD & NECK",
    "name": "Resection Enucleation of thyroid Adenoma",
    "nonNabh": 10580,
    "nabh": 12167
  },
  {
    "id": "338",
    "category": "HEAD & NECK",
    "name": "Total Thyroidectomy and Block Dissection",
    "nonNabh": 26450,
    "nabh": 30418
  },
  {
    "id": "339",
    "category": "HEAD & NECK",
    "name": "Excision of Lingual Thyroid",
    "nonNabh": 16882,
    "nabh": 19414
  },
  {
    "id": "340",
    "category": "HEAD & NECK",
    "name": "Excision of Thyroglossal Cyst/Fistula",
    "nonNabh": 13225,
    "nabh": 15209
  },
  {
    "id": "341",
    "category": "HEAD & NECK",
    "name": "Excision of Parathyroid Adenoma/Carcinoma",
    "nonNabh": 21275,
    "nabh": 24466
  },
  {
    "id": "342",
    "category": "HEAD & NECK",
    "name": "Laryngectomy",
    "nonNabh": 17825,
    "nabh": 20499
  },
  {
    "id": "343",
    "category": "HEAD & NECK",
    "name": "Laryngo Pharyngectomy",
    "nonNabh": 30000,
    "nabh": 34500
  },
  {
    "id": "344",
    "category": "HEAD & NECK",
    "name": "Hyoid Suspension",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "345",
    "category": "HEAD & NECK",
    "name": "Genioplasty",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "346",
    "category": "HEAD & NECK",
    "name": "Direct Laryngoscopy including biopsy under GA (Select CGHS rate Code 295 for approved rate)",
    "nonNabh": 295,
    "nabh": 295
  },
  {
    "id": "347",
    "category": "HEAD & NECK",
    "name": "Phonosurgery",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "348",
    "category": "HEAD & NECK",
    "name": "Fibreoptic examination of Larynx (FOL) under LA",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "349",
    "category": "HEAD & NECK",
    "name": "Microlaryngeal Surgery",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "350",
    "category": "HEAD & NECK",
    "name": "Laryngofissure",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "351",
    "category": "HEAD & NECK",
    "name": "Tracheal Stenosis Excision",
    "nonNabh": 19780,
    "nabh": 22747
  },
  {
    "id": "352",
    "category": "HEAD & NECK",
    "name": "Excisional Biopsies",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "353",
    "category": "HEAD & NECK",
    "name": "Benign Tumour Excisions",
    "nonNabh": 9500,
    "nabh": 10925
  },
  {
    "id": "354",
    "category": "HEAD & NECK",
    "name": "Temporal Bone subtotal resection",
    "nonNabh": 20700,
    "nabh": 23805
  },
  {
    "id": "355",
    "category": "HEAD & NECK",
    "name": "Modified Radical Neck Dissection",
    "nonNabh": 25300,
    "nabh": 29095
  },
  {
    "id": "356",
    "category": "HEAD & NECK",
    "name": "Carotid Body Excision",
    "nonNabh": 26000,
    "nabh": 29900
  },
  {
    "id": "357",
    "category": "HEAD & NECK",
    "name": "Total Laryngectomy",
    "nonNabh": 39192,
    "nabh": 45071
  },
  {
    "id": "358",
    "category": "HEAD & NECK",
    "name": "Flap Reconstructive Surgery",
    "nonNabh": 41400,
    "nabh": 47610
  },
  {
    "id": "359",
    "category": "HEAD & NECK",
    "name": "Parapharyngeal Tumour Excision",
    "nonNabh": 39330,
    "nabh": 45230
  },
  {
    "id": "360",
    "category": "HEAD & NECK",
    "name": "Other Major Surgery-Head and Neck Cancer",
    "nonNabh": 21250,
    "nabh": 25000
  },
  {
    "id": "361",
    "category": "HEAD & NECK",
    "name": "Other Minor Surgery-Head and Neck Cancer",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "362",
    "category": "BREAST",
    "name": "Drainage of abscess",
    "nonNabh": 6000,
    "nabh": 6900
  },
  {
    "id": "363",
    "category": "BREAST",
    "name": "Excision of lumps",
    "nonNabh": 6969,
    "nabh": 8014
  },
  {
    "id": "364",
    "category": "BREAST",
    "name": "Local mastectomy-simple",
    "nonNabh": 12650,
    "nabh": 14548
  },
  {
    "id": "365",
    "category": "BREAST",
    "name": "Radical mastectomy-formal or modified.",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "366",
    "category": "BREAST",
    "name": "Excision of mammary fistula",
    "nonNabh": 15525,
    "nabh": 17854
  },
  {
    "id": "367",
    "category": "BREAST",
    "name": "Segmental resection of breast",
    "nonNabh": 16100,
    "nabh": 18515
  },
  {
    "id": "368",
    "category": "BREAST",
    "name": "Other Major Surgery-Breast",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "369",
    "category": "BREAST",
    "name": "Other Minor Surgery-Breast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "370",
    "category": "GENERAL SURGERY",
    "name": "Injury Of Superficial Soft Tissues",
    "nonNabh": 425,
    "nabh": 500
  },
  {
    "id": "371",
    "category": "GENERAL SURGERY",
    "name": "Suturing of small wounds",
    "nonNabh": 269,
    "nabh": 309
  },
  {
    "id": "372",
    "category": "GENERAL SURGERY",
    "name": "Secondary suture of wounds",
    "nonNabh": 3400,
    "nabh": 4000
  },
  {
    "id": "373",
    "category": "GENERAL SURGERY",
    "name": "Debridement of wounds",
    "nonNabh": 450,
    "nabh": 518
  },
  {
    "id": "374",
    "category": "GENERAL SURGERY",
    "name": "Removal Of Foreign Bodies",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "394",
    "category": "OESOPHAGUS",
    "name": "Atresia of Oesophagus and Tracheo Oesophageal Fistula",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "395",
    "category": "OESOPHAGUS",
    "name": "Operations for Replacement of Oesophagus by Colon",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "396",
    "category": "OESOPHAGUS",
    "name": "Oesophagectomy for Carcinoma Easophagus",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "397",
    "category": "OESOPHAGUS",
    "name": "Oesophageal Intubation (Mausseau Barbin Tube)",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "398",
    "category": "OESOPHAGUS",
    "name": "Achalasia Cardia Transthoracic",
    "nonNabh": 14950,
    "nabh": 17193
  },
  {
    "id": "399",
    "category": "OESOPHAGUS",
    "name": "Achalasia Cardia Abdominal",
    "nonNabh": 12650,
    "nabh": 14548
  },
  {
    "id": "400",
    "category": "OESOPHAGUS",
    "name": "Oesophago Gastrectomy for mid 1/3 lesion",
    "nonNabh": 24495,
    "nabh": 28169
  },
  {
    "id": "401",
    "category": "OESOPHAGUS",
    "name": "Heller’s Operation",
    "nonNabh": 19750,
    "nabh": 22713
  },
  {
    "id": "402",
    "category": "OESOPHAGUS",
    "name": "Colon-Inter position or Replacement of Oesophagus",
    "nonNabh": 22540,
    "nabh": 25921
  },
  {
    "id": "403",
    "category": "OESOPHAGUS",
    "name": "Oesophago Gastrectomy – Lower Corringers procedure",
    "nonNabh": 21390,
    "nabh": 24599
  },
  {
    "id": "404",
    "category": "OESOPHAGUS",
    "name": "Other Major Surgery-Oesophagus",
    "nonNabh": 27625,
    "nabh": 32500
  },
  {
    "id": "405",
    "category": "OESOPHAGUS",
    "name": "Other Minor Surgery-Oesophagus",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "406",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Gastroscopy",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "407",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Gastric & Duodenal Biopsy (Endoscopy and biopsy combined)",
    "nonNabh": 1950,
    "nabh": 2243
  },
  {
    "id": "408",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Pyloromyotomy",
    "nonNabh": 2800,
    "nabh": 3220
  },
  {
    "id": "409",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Gastrostomy",
    "nonNabh": 8625,
    "nabh": 9919
  },
  {
    "id": "410",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Simple Closure of Perforated peptic Ulcer",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "411",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Vagotomy Pyleroplasty / Gastro Jejunostomy",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "412",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Duodenojejunostomy",
    "nonNabh": 18950,
    "nabh": 21793
  },
  {
    "id": "413",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Partial/Subtotal Gastrectomy for Carcinoma",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "414",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Partial/Subtotal Gastrectomy for Ulcer",
    "nonNabh": 22425,
    "nabh": 25789
  },
  {
    "id": "415",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operation for Bleeding Peptic Ulcer",
    "nonNabh": 20976,
    "nabh": 24122
  },
  {
    "id": "416",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operation for Gastrojejunal Ulcer",
    "nonNabh": 19780,
    "nabh": 22747
  },
  {
    "id": "417",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Total Gastrectomy for Cancer",
    "nonNabh": 22368,
    "nabh": 25723
  },
  {
    "id": "418",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Highly Selective Vagotomy",
    "nonNabh": 18630,
    "nabh": 21425
  },
  {
    "id": "419",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Selective Vagotomy & Drainage",
    "nonNabh": 18630,
    "nabh": 21425
  },
  {
    "id": "420",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Congenital Diaphragmatic Hernia",
    "nonNabh": 18975,
    "nabh": 21821
  },
  {
    "id": "421",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Hiatus Hernia Repair- Abdominal",
    "nonNabh": 14490,
    "nabh": 16664
  },
  {
    "id": "422",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Hiatus Hernia Repair- Transthoracic",
    "nonNabh": 16100,
    "nabh": 18515
  },
  {
    "id": "423",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Exploratory Laparotomy",
    "nonNabh": 12650,
    "nabh": 14548
  },
  {
    "id": "424",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Epigastric Hernia Repair",
    "nonNabh": 11385,
    "nabh": 13093
  },
  {
    "id": "425",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Umbilical Hernia Repair",
    "nonNabh": 11385,
    "nabh": 13093
  },
  {
    "id": "426",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Ventral /incisional Hernia Repair",
    "nonNabh": 10293,
    "nabh": 11837
  },
  {
    "id": "427",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Inguinal Hernia Herniorrhaphy",
    "nonNabh": 14835,
    "nabh": 17060
  },
  {
    "id": "428",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Inguinal Hernia - Hernioplasty",
    "nonNabh": 16500,
    "nabh": 18975
  },
  {
    "id": "429",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Femoral Hernia Repair",
    "nonNabh": 18285,
    "nabh": 21028
  },
  {
    "id": "430",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Rare Hernias Repair (Spigalion, Obturator, Lumbar, Sciatic)",
    "nonNabh": 18975,
    "nabh": 21821
  },
  {
    "id": "431",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Splenectomy - For Trauma",
    "nonNabh": 18975,
    "nabh": 21821
  },
  {
    "id": "432",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Splenectomy - For Hypersplenism",
    "nonNabh": 14490,
    "nabh": 16664
  },
  {
    "id": "433",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Splenorenal Anastomosis",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "434",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Portocaval Anastomosis",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "435",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Direct Operation on Oesophagus for Portal Hypertension",
    "nonNabh": 22885,
    "nabh": 26318
  },
  {
    "id": "436",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Mesentericocaval Anastomosis",
    "nonNabh": 25450,
    "nabh": 29268
  },
  {
    "id": "437",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Warren Shunt (Distal Splenorenal Shunt)",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "438",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Pancreatico Duodenectomy (Whipple's procedure)",
    "nonNabh": 21735,
    "nabh": 24995
  },
  {
    "id": "439",
    "category": "ABDOMEN & GI SURGERY",
    "name": "By Pass Procedure for Inoperable Carcinoma of Pancreas",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "440",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Cystojejunostomy or Cystogastrostomy",
    "nonNabh": 14490,
    "nabh": 16664
  },
  {
    "id": "441",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Cholecystectomy",
    "nonNabh": 10292,
    "nabh": 11836
  },
  {
    "id": "442",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Cholecystectomy & Exploration of CBD",
    "nonNabh": 14375,
    "nabh": 16531
  },
  {
    "id": "443",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Repair of Common Bile Duct (CBD)",
    "nonNabh": 13600,
    "nabh": 16000
  },
  {
    "id": "444",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operation for Hydatid Cyst of Liver",
    "nonNabh": 11902,
    "nabh": 13687
  },
  {
    "id": "445",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Cholecystostomy",
    "nonNabh": 10292,
    "nabh": 11836
  },
  {
    "id": "446",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Hepatic Resections (Lobectomy /Hepatectomy)",
    "nonNabh": 14375,
    "nabh": 16531
  },
  {
    "id": "447",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operation on Adrenal Glands - Bilateral",
    "nonNabh": 26105,
    "nabh": 30021
  },
  {
    "id": "448",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operation on Adrenal Glands - Unilateral",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "449",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Appendicectomy",
    "nonNabh": 8108,
    "nabh": 9324
  },
  {
    "id": "450",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Appendicular Abscess – Drainage",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "451",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Mesenteric Cyst- Excision",
    "nonNabh": 11040,
    "nabh": 12696
  },
  {
    "id": "452",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Peritonioscopy/Laparoscopy",
    "nonNabh": 4600,
    "nabh": 5290
  },
  {
    "id": "453",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Jejunostomy",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "454",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Ileostomy",
    "nonNabh": 15410,
    "nabh": 17722
  },
  {
    "id": "455",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Resection & Anastomosis of Small Intestine",
    "nonNabh": 20700,
    "nabh": 23805
  },
  {
    "id": "456",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Duodenal Diverticulum",
    "nonNabh": 18400,
    "nabh": 21160
  },
  {
    "id": "457",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operation for Intestinal Obstruction",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "458",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operation for Intestinal perforation",
    "nonNabh": 38000,
    "nabh": 43700
  },
  {
    "id": "459",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Benign Tumours of Small Intestine",
    "nonNabh": 19550,
    "nabh": 22483
  },
  {
    "id": "460",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Excision of Small Intestine Fistula",
    "nonNabh": 19550,
    "nabh": 22483
  },
  {
    "id": "461",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operations for GI Bleed",
    "nonNabh": 16000,
    "nabh": 18400
  },
  {
    "id": "462",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operations for Haemorrhage of Small Intestines",
    "nonNabh": 19550,
    "nabh": 22483
  },
  {
    "id": "463",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operations of the Duplication of the Intestines",
    "nonNabh": 17825,
    "nabh": 20499
  },
  {
    "id": "464",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operations for Recurrent Intestinal Obstruction (Noble Plication & Other Operations for Adhesions)",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "465",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Ileosigmoidostomy and related resection",
    "nonNabh": 16790,
    "nabh": 19309
  },
  {
    "id": "466",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Ileotransverse Colostomy and related resection",
    "nonNabh": 16790,
    "nabh": 19309
  },
  {
    "id": "467",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Caecostomy",
    "nonNabh": 3903,
    "nabh": 4488
  },
  {
    "id": "468",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Loop Colostomy Transverse Sigmoid",
    "nonNabh": 13110,
    "nabh": 15077
  },
  {
    "id": "469",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Terminal Colostomy",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "470",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Closure of Colostomy",
    "nonNabh": 17480,
    "nabh": 20102
  },
  {
    "id": "471",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Right Hemicolectomy",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "472",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Left Hemicolectomy",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "473",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Total Colectomy",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "474",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operations for Volvulus of Large Bowel",
    "nonNabh": 24920,
    "nabh": 28658
  },
  {
    "id": "475",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operations for Sigmoid Diverticulitis",
    "nonNabh": 18630,
    "nabh": 21425
  },
  {
    "id": "476",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Fissure in Ano with Internal sphinctrectomy with fissurectomy.",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "477",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Fissure in Ano - Fissurectomy",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "478",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Rectal Polyp-Excision",
    "nonNabh": 5658,
    "nabh": 6507
  },
  {
    "id": "479",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Fistula in Ano - High Fistulectomy",
    "nonNabh": 16780,
    "nabh": 19297
  },
  {
    "id": "480",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Fistula in Ano - Low Fistulectomy",
    "nonNabh": 9867,
    "nabh": 11347
  },
  {
    "id": "481",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Prolapse Rectum - Thiersch Wiring",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "482",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Prolapse Rectum - Rectopexy",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "483",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Prolapse Rectum - Grahams Operation",
    "nonNabh": 18400,
    "nabh": 21160
  },
  {
    "id": "484",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Operations for Hirschsprungs Disease",
    "nonNabh": 14260,
    "nabh": 16399
  },
  {
    "id": "485",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Excision of Pilonidal Sinus (open)",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "486",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Excision of Pilonidal Sinus with closure",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "487",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Abdomino-Perineal Excision of Rectum",
    "nonNabh": 18300,
    "nabh": 21045
  },
  {
    "id": "488",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Anterior Resection of rectum",
    "nonNabh": 21850,
    "nabh": 25128
  },
  {
    "id": "489",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Pull Through Abdominal Resection",
    "nonNabh": 17170,
    "nabh": 19746
  },
  {
    "id": "490",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Retro Peritoneal Tumor Removal",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "491",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Radio ablation of varicose veins",
    "nonNabh": 1800,
    "nabh": 2070
  },
  {
    "id": "492",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laser ablation of varicose veins",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "493",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Fundoplication",
    "nonNabh": 19300,
    "nabh": 22195
  },
  {
    "id": "494",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Splenectomy",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "495",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Removal of hydatid cyst",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "496",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic treatment of Pseudo Pancreatic cyst",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "497",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Whipple's operation (Laparoscopic Pancreatico Duodenectomy",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "498",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic GI bypass operation",
    "nonNabh": 22000,
    "nabh": 25300
  },
  {
    "id": "499",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Total Colectomy",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "500",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Hemicolectomy",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "501",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Anterior Resection (of Intestine/ Rectum)",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "502",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Cholecystectomy",
    "nonNabh": 18975,
    "nabh": 21821
  },
  {
    "id": "503",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Appedicectomy",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "504",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Hernia inguinal repair",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "505",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic ventral Hernia Repair",
    "nonNabh": 17500,
    "nabh": 20125
  },
  {
    "id": "506",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Paraumbilical Hernia Repair",
    "nonNabh": 17500,
    "nabh": 20125
  },
  {
    "id": "507",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Adrenelectomy",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "508",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Laparoscopic Nephrectomy",
    "nonNabh": 22000,
    "nabh": 25300
  },
  {
    "id": "509",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Other Major Surgery-Abdomen/GI Surgery",
    "nonNabh": 38000,
    "nabh": 43700
  },
  {
    "id": "510",
    "category": "ABDOMEN & GI SURGERY",
    "name": "Other Minor Surgery-Abdomen/GI Surgery",
    "nonNabh": 6000,
    "nabh": 6900
  },
  {
    "id": "511",
    "category": "ICU & CCU",
    "name": "Coronary Care with Cardiac Monitoring /ICU/CCU (For all categories of ward entitlement, inclusive of Room Rent)",
    "nonNabh": 4590,
    "nabh": 5400
  },
  {
    "id": "512",
    "category": "ICU & CCU",
    "name": "Compressed air / piped oxygen /per hour",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "513",
    "category": "ICU & CCU",
    "name": "Ventilator charges (Per day)",
    "nonNabh": 531,
    "nabh": 611
  },
  {
    "id": "514",
    "category": "ICU & CCU",
    "name": "Paediatric care for New born (Per day)",
    "nonNabh": 186,
    "nabh": 214
  },
  {
    "id": "515",
    "category": "ICU & CCU",
    "name": "Incubator charges (Per day)",
    "nonNabh": 345,
    "nabh": 397
  },
  {
    "id": "516",
    "category": "ICU & CCU",
    "name": "Neonatal ICU charges (Per day)",
    "nonNabh": 391,
    "nabh": 450
  },
  {
    "id": "517",
    "category": "ICU & CCU",
    "name": "Resuscitation",
    "nonNabh": 184,
    "nabh": 212
  },
  {
    "id": "518",
    "category": "ICU & CCU",
    "name": "Exchange Transfusion",
    "nonNabh": 265,
    "nabh": 305
  },
  {
    "id": "519",
    "category": "ICU & CCU",
    "name": "Pneupack ventilator in Nursery (Per day)",
    "nonNabh": 575,
    "nabh": 661
  },
  {
    "id": "520",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Atrial Septal Defect(ASD) closure",
    "nonNabh": 51808,
    "nabh": 59579
  },
  {
    "id": "521",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Ventricular septal defect (VSD) with graft",
    "nonNabh": 51808,
    "nabh": 59579
  },
  {
    "id": "522",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Tetralogy of Fallot (TOF) /TAPVC/TCPC/REV/RSOV repair",
    "nonNabh": 127075,
    "nabh": 146136
  },
  {
    "id": "523",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "BD Glenn/Left atrium myxoma",
    "nonNabh": 80750,
    "nabh": 95000
  },
  {
    "id": "524",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Senning/Arterial Switch Operation (ASO) with graft",
    "nonNabh": 122188,
    "nabh": 140516
  },
  {
    "id": "525",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Double Switch Operation (DSO)",
    "nonNabh": 103615,
    "nabh": 119157
  },
  {
    "id": "526",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Atrioventricular(AV) canal repair",
    "nonNabh": 161000,
    "nabh": 185150
  },
  {
    "id": "527",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Fontan procedure",
    "nonNabh": 169000,
    "nabh": 194350
  },
  {
    "id": "528",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Conduit repair",
    "nonNabh": 169000,
    "nabh": 194350
  },
  {
    "id": "529",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Coronary Artery Bypass Graft surgery (CABG)",
    "nonNabh": 127075,
    "nabh": 146136
  },
  {
    "id": "530",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Coronary Artery Bypass Graft surgery (CABG) + Intra-Aortic Balloon Pump (IABP)",
    "nonNabh": 169000,
    "nabh": 194350
  },
  {
    "id": "531",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Coronary Artery Bypass Graft surgery (CABG) + Valve",
    "nonNabh": 169000,
    "nabh": 194350
  },
  {
    "id": "532",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "CABG without bypass.",
    "nonNabh": 140000,
    "nabh": 161000
  },
  {
    "id": "533",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Ascending aorta replacement",
    "nonNabh": 130000,
    "nabh": 149500
  },
  {
    "id": "534",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Double Valve Replacement (DVR)",
    "nonNabh": 155422,
    "nabh": 178735
  },
  {
    "id": "535",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Mitral valve Replacement(MVR)/ Aortic valve Replacement (AVR)/ Tricuspid Valve Replacement (TVR) / Pulmonary valve replacement (PVR)",
    "nonNabh": 103615,
    "nabh": 119157
  },
  {
    "id": "536",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Mitral valve (MV) Repair + Aortic valve (AV) Repair / Tricuspid Valve (TV) Repair + Pulmonary valve (PV) repair",
    "nonNabh": 103615,
    "nabh": 119157
  },
  {
    "id": "537",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Aorta femoral bypass",
    "nonNabh": 52000,
    "nabh": 59800
  },
  {
    "id": "538",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Blalock-Taussig shunt (BT Shunt) / Coarctation",
    "nonNabh": 51980,
    "nabh": 59777
  },
  {
    "id": "539",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Pulmonary Artery Banding (PA Banding) Septostomy",
    "nonNabh": 51980,
    "nabh": 59777
  },
  {
    "id": "540",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Pericardectomy",
    "nonNabh": 42320,
    "nabh": 48668
  },
  {
    "id": "541",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Congenital cytomegalovirus (CMV)/ patent ductus arteriosus (PDA)",
    "nonNabh": 51980,
    "nabh": 59777
  },
  {
    "id": "542",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Gunshot injury",
    "nonNabh": 51980,
    "nabh": 59777
  },
  {
    "id": "543",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Heart transplant",
    "nonNabh": 276000,
    "nabh": 317400
  },
  {
    "id": "544",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Balloon coronary angioplasty/PTCA with VCD",
    "nonNabh": 80600,
    "nabh": 92690
  },
  {
    "id": "545",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Balloon coronary angioplasty/PTCA without VCD",
    "nonNabh": 80000,
    "nabh": 92000
  },
  {
    "id": "546",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Rotablation",
    "nonNabh": 48875,
    "nabh": 56206
  },
  {
    "id": "547",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Balloon Valvotomy / Percutaneous transvenous mitral commissurotomy (PTMC)",
    "nonNabh": 10264,
    "nabh": 11804
  },
  {
    "id": "548",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Cardiac Catheterization (CATH)",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "549",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Aortic Arch Replacement",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "550",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Aortic Dissection",
    "nonNabh": 12650,
    "nabh": 14548
  },
  {
    "id": "551",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Thoraco Abdominal Aneurysm Repair",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "552",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Embolectomy",
    "nonNabh": 21000,
    "nabh": 24150
  },
  {
    "id": "553",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Vascular Repair",
    "nonNabh": 36000,
    "nabh": 41400
  },
  {
    "id": "554",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Bentall Repair with Prosthetic Valve",
    "nonNabh": 30000,
    "nabh": 34500
  },
  {
    "id": "555",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Bentall Repair with Biologic Valve",
    "nonNabh": 127500,
    "nabh": 150000
  },
  {
    "id": "556",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Coaractation dilatation",
    "nonNabh": 14500,
    "nabh": 16675
  },
  {
    "id": "557",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Coaractation dilatation with Stenting",
    "nonNabh": 18500,
    "nabh": 21275
  },
  {
    "id": "558",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Temporary Pacemaker Implantation (TPI) (Temporary Cardiac Pacing) Single Chamber",
    "nonNabh": 7500,
    "nabh": 8625
  },
  {
    "id": "559",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Temporary Pacemaker Implantation (TPI) (Temporary Cardiac Pacing) Dual Chamber",
    "nonNabh": 8160,
    "nabh": 9600
  },
  {
    "id": "560",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Permanent pacemaker implantation (PPI)- Single Chamber",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "561",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Permanent pacemaker implantation- Dual Chamber",
    "nonNabh": 19320,
    "nabh": 22218
  },
  {
    "id": "562",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Permanent pacemaker implantation (PPI)- Biventricular",
    "nonNabh": 34500,
    "nabh": 39675
  },
  {
    "id": "563",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Automatic implantable cardioverter defibrillator (AICD) Single Chamber",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "564",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Automatic implantable cardioverter defibrillator (AICD) Dual Chamber",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "565",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Combo device implantation",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "566",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Diagnostic Electrophysiological studies conventional",
    "nonNabh": 4550,
    "nabh": 5233
  },
  {
    "id": "567",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Ambulatory BP monitoring",
    "nonNabh": 587,
    "nabh": 690
  },
  {
    "id": "568",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "External Loop/event recording",
    "nonNabh": 2848,
    "nabh": 3350
  },
  {
    "id": "569",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Radiofrequency (RF) ablation conventional",
    "nonNabh": 35000,
    "nabh": 40250
  },
  {
    "id": "570",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Radiofrequency (RF) ablation Atrial Tachycardia/Carto",
    "nonNabh": 45000,
    "nabh": 51750
  },
  {
    "id": "571",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Endomyocardial biopsy",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "572",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Intra aortic balloon pump (IABP)",
    "nonNabh": 7820,
    "nabh": 8993
  },
  {
    "id": "573",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Intra vascular coils",
    "nonNabh": 46000,
    "nabh": 52900
  },
  {
    "id": "574",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Septostomy- Balloon",
    "nonNabh": 16150,
    "nabh": 19000
  },
  {
    "id": "575",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Septostomy- Blade",
    "nonNabh": 19550,
    "nabh": 22483
  },
  {
    "id": "576",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Aortic valve balloon dilatation (AVBD) / pulmonary valve balloon dilatation (PVBD)",
    "nonNabh": 48300,
    "nabh": 55545
  },
  {
    "id": "577",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Digital subtraction angiography-Peripheral artery",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "578",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Digital subtraction angiography- venogram",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "579",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "CT Guided biopsy",
    "nonNabh": 1265,
    "nabh": 1455
  },
  {
    "id": "580",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Sinogram",
    "nonNabh": 863,
    "nabh": 992
  },
  {
    "id": "581",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Peripheral Angioplasty with VCD",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "582",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Peripheral Angioplasty without VCD",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "583",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Renal Angioplasty",
    "nonNabh": 60350,
    "nabh": 71000
  },
  {
    "id": "584",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Intravascular ultrasound (IVUS)",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "585",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Fractional flow reserve (FFR)",
    "nonNabh": 12750,
    "nabh": 15000
  },
  {
    "id": "586",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Holter analysis",
    "nonNabh": 850,
    "nabh": 1000
  },
  {
    "id": "587",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Aortic stent grafting for aortic aneurysm",
    "nonNabh": 78500,
    "nabh": 90275
  },
  {
    "id": "588",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Inferior Vena Cava (IVC) filter implantation",
    "nonNabh": 16129,
    "nabh": 18548
  },
  {
    "id": "589",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "ASD/VSD/PDA device closure",
    "nonNabh": 36225,
    "nabh": 41659
  },
  {
    "id": "590",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Electrocardiogram (ECG)",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "591",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Head--up tilt test (HUTT)",
    "nonNabh": 2200,
    "nabh": 2530
  },
  {
    "id": "592",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "2D echocardiography",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "593",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "3D echocardiography",
    "nonNabh": 1403,
    "nabh": 1650
  },
  {
    "id": "594",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Fetal Echo",
    "nonNabh": 1400,
    "nabh": 1610
  },
  {
    "id": "595",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "2D Transesophageal Echocardiography (TEE)",
    "nonNabh": 1403,
    "nabh": 1650
  },
  {
    "id": "596",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "3D Transesophageal Echocardiography (TEE)",
    "nonNabh": 1403,
    "nabh": 1650
  },
  {
    "id": "597",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Stress Echo- exercise",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "598",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Stress Echo- pharmacological",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "599",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Stress Myocardial Perfusion Imaging (MPI)- exercise",
    "nonNabh": 1955,
    "nabh": 2300
  },
  {
    "id": "600",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Stress Myocardial Perfusion Imaging (MPI) - pharmacological",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "601",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Coronary angiography",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "602",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "CT coronary angiography",
    "nonNabh": 6030,
    "nabh": 6935
  },
  {
    "id": "603",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Cardiac CT scan",
    "nonNabh": 2272,
    "nabh": 2613
  },
  {
    "id": "604",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Cardiac MRI",
    "nonNabh": 2444,
    "nabh": 2811
  },
  {
    "id": "605",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Stress Cardiac MRI",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "606",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "MR angiography.",
    "nonNabh": 5635,
    "nabh": 6480
  },
  {
    "id": "607",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Cardiac PET",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "608",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Pericardiocentesis",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "609",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Other Major Surgery-Cardiovascular and Cardiac Surgery",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "610",
    "category": "CARDIOLOGY & CARDIAC SURGERY",
    "name": "Other Minor Surgery-Cardiovascular and Cardiac Surgery",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "611",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Normal delivery with or without Episiotomy & P. repair",
    "nonNabh": 8000,
    "nabh": 9200
  },
  {
    "id": "612",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "vacuum delivery",
    "nonNabh": 8625,
    "nabh": 9919
  },
  {
    "id": "613",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Forceps Delivery",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "614",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Caesarean Section(CS)",
    "nonNabh": 14050,
    "nabh": 16158
  },
  {
    "id": "615",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Caesarean Hysterectomy",
    "nonNabh": 18975,
    "nabh": 21821
  },
  {
    "id": "616",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Rupture Uterus closure & repair with Tubal Ligation",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "617",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Perforation of Uterus after D/E Laparotomy & Closure",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "618",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparotomy for Ectopic pregnancy",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "619",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparotomy-peritonitis Lavage and Drainage",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "620",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Salphingo-Oophorectomy/ Oophorectomy Laparoscopic",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "621",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Ovarian Cystectomy-laparoscopic.",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "622",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Ovarian Cystectomy -laparotomy.",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "623",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Salpingo-Oophorectomy-laparotomy",
    "nonNabh": 11520,
    "nabh": 13248
  },
  {
    "id": "624",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopic Broad Ligament Hematoma Drainage with repair",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "625",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Exploration of perineal Haematoma & Repair",
    "nonNabh": 8000,
    "nabh": 9200
  },
  {
    "id": "626",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Exploration of abdominal Haematoma (after laparotomy + LSCS)",
    "nonNabh": 8050,
    "nabh": 9258
  },
  {
    "id": "627",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Manual Removal of Placenta",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "628",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Examination under anaesthesia (EUA)",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "629",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Burst-abdomen Repair",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "630",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Gaping Perineal Wound Secondary Suturing",
    "nonNabh": 1656,
    "nabh": 1904
  },
  {
    "id": "631",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Gaping abdominal wound Secondary Suturing",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "632",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Complete perineal tear-repair",
    "nonNabh": 2128,
    "nabh": 2447
  },
  {
    "id": "633",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Exploration of PPH-tear repair",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "634",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Suction evacuation vesicular mole",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "635",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Suction evacuation Missed abortion/ incomplete abortion",
    "nonNabh": 5175,
    "nabh": 5951
  },
  {
    "id": "636",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Colpotomy",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "637",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Repair of post-coital tear/ perineal injury",
    "nonNabh": 3508,
    "nabh": 4034
  },
  {
    "id": "638",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Excision of urethral caruncle",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "639",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Shirodhkar/ McDonald stitch",
    "nonNabh": 3220,
    "nabh": 3703
  },
  {
    "id": "640",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Abdominal Hysterectomy with or without salpingo- oophorectomy",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "641",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Non-descent Vaginal Hysterectomy (NDVH)",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "642",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Vaginal Hysterectomy with repairs (UV Prolapse)",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "643",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Myomectomy -laparotomy",
    "nonNabh": 14000,
    "nabh": 16100
  },
  {
    "id": "644",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Myomectomy -laparoscopic",
    "nonNabh": 6325,
    "nabh": 7274
  },
  {
    "id": "645",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Vaginoplasty",
    "nonNabh": 14950,
    "nabh": 17193
  },
  {
    "id": "646",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Vulvectomy -Simple",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "647",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Vulvectomy-Radical",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "648",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Rectovaginal Fistula (RVF) Repair",
    "nonNabh": 18975,
    "nabh": 21821
  },
  {
    "id": "649",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Manchester Operation",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "650",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Shirodkar’s sling Operation or other sling operations for prolapse uterus",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "651",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopic sling operations for prolapse uterus",
    "nonNabh": 28000,
    "nabh": 32200
  },
  {
    "id": "652",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Diagnostic Curettage",
    "nonNabh": 2484,
    "nabh": 2857
  },
  {
    "id": "653",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Cervical Biopsy",
    "nonNabh": 1800,
    "nabh": 2070
  },
  {
    "id": "654",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Polypectomy",
    "nonNabh": 1518,
    "nabh": 1746
  },
  {
    "id": "655",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Other-Minor Operation Endometrial",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "656",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Excision Vaginal Cyst/Bartholin Cyst",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "657",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Excision Vaginal Septum",
    "nonNabh": 4600,
    "nabh": 5290
  },
  {
    "id": "658",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopy -Diagnostic with chromopertubation and or adhesiolysis and drilling",
    "nonNabh": 4025,
    "nabh": 4629
  },
  {
    "id": "659",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopy Sterilization",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "660",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopically Assisted Vaginal Hysterectomy (LAVH)",
    "nonNabh": 25243,
    "nabh": 29029
  },
  {
    "id": "661",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Balloon Tamponade for Post Partum Haemorrhage (PPH)",
    "nonNabh": 2800,
    "nabh": 3220
  },
  {
    "id": "662",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Total laparoscopic hysterectomy",
    "nonNabh": 25243,
    "nabh": 29029
  },
  {
    "id": "663",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopic treatment of Ectopic pregnancy- salpingectomy/salpingostomy conservative",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "664",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Conisation of cervix",
    "nonNabh": 4025,
    "nabh": 4629
  },
  {
    "id": "665",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Trachelectomy of cervix for early CA cervix",
    "nonNabh": 5500,
    "nabh": 6325
  },
  {
    "id": "666",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Hysteroscopic cannulation",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "667",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparotomy recannalization of Fallopian tubes- (Tubuloplasty)",
    "nonNabh": 22425,
    "nabh": 25789
  },
  {
    "id": "668",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopic recannalization of Fallopian tubes- (Tubuloplasty)",
    "nonNabh": 19500,
    "nabh": 22425
  },
  {
    "id": "669",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Colposcopy",
    "nonNabh": 958,
    "nabh": 1102
  },
  {
    "id": "670",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Inversion of Uterus – Vaginal Reposition",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "671",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Inversion of Uterus – Abdominal Reposition",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "672",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopic Vesicovaginal Fistula (VVF) Repair",
    "nonNabh": 28000,
    "nabh": 32200
  },
  {
    "id": "673",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Abdominal Vesicovaginal Fistula (VVF) Repair",
    "nonNabh": 28000,
    "nabh": 32200
  },
  {
    "id": "674",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Vaginal Vesicovaginal Fistula (VVF) Repair",
    "nonNabh": 28000,
    "nabh": 32200
  },
  {
    "id": "675",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Interventional Ultrasonography- Chorionic villus sampling (CVS)",
    "nonNabh": 880,
    "nabh": 1012
  },
  {
    "id": "676",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Amniocentesis",
    "nonNabh": 880,
    "nabh": 1012
  },
  {
    "id": "677",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Karyotyping",
    "nonNabh": 800,
    "nabh": 920
  },
  {
    "id": "678",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Thermal balloon ablation.",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "679",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Ultrasonographic myolysis",
    "nonNabh": 10293,
    "nabh": 11837
  },
  {
    "id": "680",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Vaginal Myomectomy",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "681",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Intra Uterine Inseminition",
    "nonNabh": 920,
    "nabh": 1058
  },
  {
    "id": "682",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Intracytoplasmic sperm injection (ICSI)",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "683",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparotomy abdominal sacro-colpopexy",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "684",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Vaginal Colpopexy",
    "nonNabh": 22000,
    "nabh": 25300
  },
  {
    "id": "685",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopic abdominal sacro-colpopexy",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "686",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparotomy pelvic Lymphadenectomy",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "687",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Laparoscopic pelvic Lymphadenectomy",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "688",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Endometrial aspiration cytology/biopsy",
    "nonNabh": 570,
    "nabh": 656
  },
  {
    "id": "689",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "USG Transvaginal sonography (TVS for Follicular monitoring /aspiration)",
    "nonNabh": 460,
    "nabh": 529
  },
  {
    "id": "690",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "laparoscopic treatment for stress incontinence",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "691",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Transvaginal tapes for Stress incontinence",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "692",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "trans-obturator tapes for Stress incontinence",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "693",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Interventional radiographic arterial embolization",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "694",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Diagnostic cystoscopy",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "695",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Staging laparotomy surgery for Carcinoma Ovary",
    "nonNabh": 6325,
    "nabh": 7274
  },
  {
    "id": "696",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Internal Iliac ligation",
    "nonNabh": 3393,
    "nabh": 3902
  },
  {
    "id": "697",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "stepwise devascularisation",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "698",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Assisted breech delivery",
    "nonNabh": 10925,
    "nabh": 12564
  },
  {
    "id": "699",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Intra-uterine fetal blood transfusion",
    "nonNabh": 21275,
    "nabh": 24466
  },
  {
    "id": "700",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Hysteroscopy Transcervical Resection of Endometrium (TCRE)",
    "nonNabh": 8500,
    "nabh": 9775
  },
  {
    "id": "701",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Hysteroscopy Removal of Intra-Uterine Contraceptive Device (IUCD)",
    "nonNabh": 7500,
    "nabh": 8625
  },
  {
    "id": "702",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Hysteroscopy Removal of Septum",
    "nonNabh": 11000,
    "nabh": 12650
  },
  {
    "id": "703",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Hysteroscopy Diagnostic",
    "nonNabh": 7500,
    "nabh": 8625
  },
  {
    "id": "704",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Radical Hysterectomy for Cancer cervix with pelvic lymphadenectomy",
    "nonNabh": 8500,
    "nabh": 9775
  },
  {
    "id": "705",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Radical Hysterectomy for Cancer endometrium extending to cervix with pelvic and para aortic lymphadenectomy",
    "nonNabh": 8500,
    "nabh": 9775
  },
  {
    "id": "706",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Sterilization Post partum (minilap)",
    "nonNabh": 3750,
    "nabh": 4313
  },
  {
    "id": "707",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Sterilization interval (minilap)",
    "nonNabh": 3750,
    "nabh": 4313
  },
  {
    "id": "708",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Ultrasonography (USG) Level II scan/Anomaly Scan",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "709",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Fetal nuchal Translucency",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "710",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Fetal Doppler/Umblical Doppler/Uterine Vessel Doppler",
    "nonNabh": 850,
    "nabh": 978
  },
  {
    "id": "711",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Medical Termination of Pregnancy (MTP)- 1st Trimester",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "712",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Medical Termination of Pregnancy (MTP) - 2nd Trimester",
    "nonNabh": 4370,
    "nabh": 5026
  },
  {
    "id": "713",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Quadruple test",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "714",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Biophysical score / Biophysical profile test (BPP test)",
    "nonNabh": 600,
    "nabh": 690
  },
  {
    "id": "715",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Other Major Surgery-Obstetrics and Gynaecology",
    "nonNabh": 28000,
    "nabh": 32200
  },
  {
    "id": "716",
    "category": "OBSTETRICS & GYNAECOLOGY",
    "name": "Other Minor Surgery-Obstetrics and Gynaecology",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "717",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Partial Nephrectomy -open",
    "nonNabh": 16215,
    "nabh": 18647
  },
  {
    "id": "718",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Partial Nephrectomy-Laparoscopic/endoscopic",
    "nonNabh": 14490,
    "nabh": 16664
  },
  {
    "id": "719",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Nephrolithomy -open",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "720",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Nephrolithomy -Laparoscopic/endoscopic",
    "nonNabh": 14000,
    "nabh": 16100
  },
  {
    "id": "721",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Pyelolithotomy-open",
    "nonNabh": 13000,
    "nabh": 14950
  },
  {
    "id": "722",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Pyelolithotomy -Laparoscopic/endoscopic",
    "nonNabh": 10580,
    "nabh": 12167
  },
  {
    "id": "723",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hydronephrosis -pyeloplasty open",
    "nonNabh": 18400,
    "nabh": 21160
  },
  {
    "id": "724",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hydronephrosis -pyeloplasty Lap/endoscopic",
    "nonNabh": 19000,
    "nabh": 21850
  },
  {
    "id": "725",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hydronephrosis Endopyelotomy antegrade",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "726",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hydronephrosis Endoplyelotomy retrograde",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "727",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hydronephrosis ureterocalicostomy",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "728",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hydronephrosis-Ileal ureter",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "729",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Open Drainage of Perinephric Abscess",
    "nonNabh": 8000,
    "nabh": 9200
  },
  {
    "id": "730",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Percutaneous Drainage of Perinephric Abscess - Ultrasound guided",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "731",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Cavernostomy",
    "nonNabh": 9775,
    "nabh": 11500
  },
  {
    "id": "732",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Cyst of the Kidney -open",
    "nonNabh": 11960,
    "nabh": 13754
  },
  {
    "id": "733",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Cyst of the Kidney Lap/endoscopic",
    "nonNabh": 14030,
    "nabh": 16135
  },
  {
    "id": "734",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ureterolithotomy -open",
    "nonNabh": 13248,
    "nabh": 15235
  },
  {
    "id": "735",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ureterolithotomy-Lap/Endoscopic",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "736",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Nephroureterectomy open",
    "nonNabh": 16100,
    "nabh": 18515
  },
  {
    "id": "737",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Nephroureterectomy -Lap/Endoscopic",
    "nonNabh": 16100,
    "nabh": 18515
  },
  {
    "id": "738",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Ureter for -Double Ureters",
    "nonNabh": 19000,
    "nabh": 21850
  },
  {
    "id": "739",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Ureter -for Ectopia of Single Ureter",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "740",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Vesicoureteric Reflux (VUR) -Open",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "741",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Vesicoureteric Reflux (VUR)- Lap/Endoscopic",
    "nonNabh": 18000,
    "nabh": 20700
  },
  {
    "id": "742",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Vesicoureteric Reflux (VUR)/ Urinary incontinence with bulking agents",
    "nonNabh": 20700,
    "nabh": 23805
  },
  {
    "id": "743",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ureterostomy - Cutaneous",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "744",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Uretero-Colic anastomosis",
    "nonNabh": 16000,
    "nabh": 18400
  },
  {
    "id": "745",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Formation of an Ileal Conduit",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "746",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ureteric Catheterisation",
    "nonNabh": 8278,
    "nabh": 10950
  },
  {
    "id": "747",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Biopsy of Bladder (Cystoscopic)",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "748",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Cysto-Litholapaxy",
    "nonNabh": 10925,
    "nabh": 12564
  },
  {
    "id": "749",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Injuries of the Bladder",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "750",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Suprapubic Drainage (Cystostomy/vesicostomy)",
    "nonNabh": 6000,
    "nabh": 6900
  },
  {
    "id": "751",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Simple Cystectomy",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "752",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Diverticulectomy -open",
    "nonNabh": 16000,
    "nabh": 18400
  },
  {
    "id": "753",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Diverticulectomy- Lap/Endoscopic",
    "nonNabh": 18400,
    "nabh": 21160
  },
  {
    "id": "754",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Diverticulectomy -Endoscopic incision of neck",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "755",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Augmentation Cystoplasty",
    "nonNabh": 6670,
    "nabh": 7671
  },
  {
    "id": "756",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Exstrophy of the Bladder- Single stage repair",
    "nonNabh": 22300,
    "nabh": 25645
  },
  {
    "id": "757",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Exstrophy of the Bladder- Multistage repair",
    "nonNabh": 20815,
    "nabh": 23937
  },
  {
    "id": "758",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Exstrophy of the Bladder- simple cystectomy with urinary diversion",
    "nonNabh": 22500,
    "nabh": 25875
  },
  {
    "id": "759",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Repair of Ureterocoel -Open",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "760",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Repair of Ureterocoel -Lap/Endoscopic",
    "nonNabh": 14375,
    "nabh": 16531
  },
  {
    "id": "761",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Repair of Ureterocoel -Endoscopic incision",
    "nonNabh": 13000,
    "nabh": 14950
  },
  {
    "id": "762",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Open Suprapubic Prostatectomy",
    "nonNabh": 20700,
    "nabh": 23805
  },
  {
    "id": "763",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Open Retropubic Prostatectomy",
    "nonNabh": 20125,
    "nabh": 23144
  },
  {
    "id": "764",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Transurethral Resection of Prostate (TURP)",
    "nonNabh": 18630,
    "nabh": 21425
  },
  {
    "id": "765",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Urethroscopy/ Cystopanendoscopy",
    "nonNabh": 4600,
    "nabh": 5290
  },
  {
    "id": "766",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Internal urethrotomy -optical",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "767",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Internal urethrotomy -Core through urethroplasty",
    "nonNabh": 11040,
    "nabh": 12696
  },
  {
    "id": "768",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Urethral Reconstruction -End to end ansatamosis",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "769",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Urethral Reconstruction - substitution urethroplasty (Transpubic urethroplasty)",
    "nonNabh": 19550,
    "nabh": 22483
  },
  {
    "id": "770",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Abdomino Perineal urethroplasty",
    "nonNabh": 14000,
    "nabh": 16100
  },
  {
    "id": "771",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Posterior Urethral Valve fulguration.",
    "nonNabh": 11270,
    "nabh": 12961
  },
  {
    "id": "772",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Incontinence of Urine - Male -Open",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "773",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Incontinence of Urine - Male -Sling",
    "nonNabh": 18400,
    "nabh": 21160
  },
  {
    "id": "774",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Incontinence of Urine - Male-Bulking agent",
    "nonNabh": 19435,
    "nabh": 22350
  },
  {
    "id": "775",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Incontinence of Urine - Female -Open",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "776",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Incontinence of Urine - Female-Sling",
    "nonNabh": 18400,
    "nabh": 21160
  },
  {
    "id": "777",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Incontinence of Urine - Female- Bulking agent",
    "nonNabh": 19435,
    "nabh": 22350
  },
  {
    "id": "778",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Reduction of Paraphimosis",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "779",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Circumcision",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "780",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Meatotomy",
    "nonNabh": 2346,
    "nabh": 2698
  },
  {
    "id": "781",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Meatoplasty",
    "nonNabh": 3220,
    "nabh": 3703
  },
  {
    "id": "782",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hypospadias + Chordee Correction",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "783",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hypospadias - Second Stage",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "784",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hypospadias - One Stage Repair",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "785",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Crippled Hypospadias",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "786",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Epispadias _primary repair",
    "nonNabh": 12593,
    "nabh": 14482
  },
  {
    "id": "787",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Epispadias-crippled epispadias",
    "nonNabh": 11385,
    "nabh": 13093
  },
  {
    "id": "788",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Partial Amputation of the Penis",
    "nonNabh": 10764,
    "nabh": 12379
  },
  {
    "id": "789",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Total amputation of the Penis",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "790",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Orchidectomy-Simple",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "791",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Orchidectomy -Radical",
    "nonNabh": 12075,
    "nabh": 13886
  },
  {
    "id": "792",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Post Radical Orchidectomy retroperitoneal lymph node dissection.",
    "nonNabh": 14000,
    "nabh": 16100
  },
  {
    "id": "793",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Epididymectomy",
    "nonNabh": 15938,
    "nabh": 18750
  },
  {
    "id": "794",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Adreneclectomy Unilateral/Bilateral for Tumour/For Carcinoma- Open",
    "nonNabh": 25300,
    "nabh": 29095
  },
  {
    "id": "795",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Adreneclectomy Unilateral/Bilateral for Tumour/For Carcinoma -Lap/Endoscopic",
    "nonNabh": 14375,
    "nabh": 16531
  },
  {
    "id": "796",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hydrocele - Unilateral",
    "nonNabh": 5865,
    "nabh": 6745
  },
  {
    "id": "797",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Hydrocele - Bilateral",
    "nonNabh": 8556,
    "nabh": 9839
  },
  {
    "id": "798",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operation for Torsion of Testis",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "799",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Micro-surgical Vasovasostomy /Vaso epidedymal ansatamosis .",
    "nonNabh": 11040,
    "nabh": 12696
  },
  {
    "id": "800",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Varicocele Unilateral Microsurgical",
    "nonNabh": 7705,
    "nabh": 8861
  },
  {
    "id": "801",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Varicocele Palomo’s Unilateral - Laparoscopic",
    "nonNabh": 9200,
    "nabh": 10580
  },
  {
    "id": "802",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Varicocele Bilateral --Microsurgical",
    "nonNabh": 12650,
    "nabh": 14548
  },
  {
    "id": "803",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Operations for Varicocele Palomo’s Bilateral - Laparoscopic",
    "nonNabh": 14950,
    "nabh": 17193
  },
  {
    "id": "804",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Block Dissection of ilio-inguinal Nodes - One Side (For Carcinoma Penis)",
    "nonNabh": 6325,
    "nabh": 7274
  },
  {
    "id": "805",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Block Dissection of ilio-inguinal Nodes -Both Sides (For Carcinoma Penis)",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "806",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Excision of Filarial Scrotum",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "807",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Kidney Transplantation (related)",
    "nonNabh": 200000,
    "nabh": 230000
  },
  {
    "id": "808",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Kidney Transplantation (Spousal/ unrelated) Including immunosuppressant therapy",
    "nonNabh": 300000,
    "nabh": 345000
  },
  {
    "id": "809",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "ABO incompatible Transplantation",
    "nonNabh": 490000,
    "nabh": 563500
  },
  {
    "id": "810",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Swap Transplantation",
    "nonNabh": 388000,
    "nabh": 446200
  },
  {
    "id": "811",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Kidney Transplant Graft Nephrectomy",
    "nonNabh": 59500,
    "nabh": 70000
  },
  {
    "id": "812",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Donor Nephrectomy (open)",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "813",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Donor Nephrectomy (Laparoscopic)",
    "nonNabh": 46000,
    "nabh": 52900
  },
  {
    "id": "814",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Cadaver Transplantation",
    "nonNabh": 83300,
    "nabh": 95795
  },
  {
    "id": "815",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Kidney Transplant with Native Kidney Nephrectomy (Related)/ Unilateral",
    "nonNabh": 28000,
    "nabh": 32200
  },
  {
    "id": "816",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Kidney Transplant with Native Kidney Nephrectomy (Related)/ Bilateral",
    "nonNabh": 85000,
    "nabh": 97750
  },
  {
    "id": "817",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Kidney Transplant with Native Kidney Nephrectomy (Spousal/ Unrelated) Unilateral",
    "nonNabh": 85000,
    "nabh": 97750
  },
  {
    "id": "818",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Kidney Transplant with Native Kidney Nephrectomy (Spousal/ Unrelated) Bilateral",
    "nonNabh": 85000,
    "nabh": 97750
  },
  {
    "id": "819",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Post-Transplant Collection drainage for Lymphocele (open)",
    "nonNabh": 6800,
    "nabh": 8000
  },
  {
    "id": "820",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Post-Transplant Collection drainage for Lymphocele (percutaneous)",
    "nonNabh": 6800,
    "nabh": 8000
  },
  {
    "id": "821",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Post-Transplant Collection drainage for Lymphocele (Laparoscopic)",
    "nonNabh": 7650,
    "nabh": 9000
  },
  {
    "id": "822",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Arteriovenous Fistula for Haemodialysis",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "823",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Arteriovenous Shunt for Haemodialysis",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "824",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Jugular Catheterization for Haemodialysis",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "825",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Subclavian Catheterization for Haemodialysis",
    "nonNabh": 2250,
    "nabh": 2588
  },
  {
    "id": "826",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "One sided (single Lumen) Femoral Catheterization for Haemodialysis",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "827",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Bilateral (single Lumen) Femoral Catheterization for Haemodialysis",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "828",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Double Lumen Femoral Catheterization for Haemodialysis",
    "nonNabh": 1850,
    "nabh": 2128
  },
  {
    "id": "829",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Permcath Insertion",
    "nonNabh": 2800,
    "nabh": 3220
  },
  {
    "id": "830",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Arterio venous Prosthetic Graft",
    "nonNabh": 1850,
    "nabh": 2128
  },
  {
    "id": "831",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Single lumen Jugular Catheterization",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "832",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Single lumen Subclavian Catheterization",
    "nonNabh": 1700,
    "nabh": 2000
  },
  {
    "id": "833",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Plasma Exchange/ Plasmapheresis",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "834",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Continuous Ambulatory Peritoneal Dialysis (CAPD) catheter insertion- Open method",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "835",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Continuous Ambulatory Peritoneal Dialysis (CAPD) catheter insertion- Schlendinger/ Seldinger method",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "836",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Sustained low efficiency haemodialysis / hemodialysis",
    "nonNabh": 1250,
    "nabh": 1438
  },
  {
    "id": "837",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Continuous Veno venous/Arteriovenous Haemofilteration /Hemofilteration",
    "nonNabh": 2250,
    "nabh": 2588
  },
  {
    "id": "838",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Haemodialysis / Hemodialysis for Sero negative cases",
    "nonNabh": 1400,
    "nabh": 1610
  },
  {
    "id": "839",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Haemodialysis / Hemodialysis for Sero Positive cases",
    "nonNabh": 1650,
    "nabh": 1898
  },
  {
    "id": "840",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Acute Peritoneal Dialysis",
    "nonNabh": 1450,
    "nabh": 1668
  },
  {
    "id": "841",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Fistulogram for Arteriovenous Fistula",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "842",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ultrasound guided kidney Biopsy",
    "nonNabh": 850,
    "nabh": 978
  },
  {
    "id": "843",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Fistula stenosis dilation",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "844",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Slow continuous Ultrafilteration",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "845",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Percutaneous Nephrolithotomy (PCNL) - Unilateral",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "846",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Percutaneous Nephrolithotomy (PCNL) - Bilateral",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "847",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Endoscopic Bulking agent Inject",
    "nonNabh": 4500,
    "nabh": 5175
  },
  {
    "id": "848",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Testicular Biopsy",
    "nonNabh": 1955,
    "nabh": 2248
  },
  {
    "id": "849",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical Nephrectomy -Open",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "850",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical Nephrectomy -Lap/Endoscopic",
    "nonNabh": 20700,
    "nabh": 23805
  },
  {
    "id": "851",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical Nephrectomy plus IV thrombus",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "852",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical Nephrectomy plus IV thrombus plus cardiac bypass.",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "853",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Vesicovaginal Fistula (VVF) Repair (Open)",
    "nonNabh": 16000,
    "nabh": 18400
  },
  {
    "id": "854",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Vesicovaginal Fistula (VVF) Repair (Laparoscopic)",
    "nonNabh": 22000,
    "nabh": 25300
  },
  {
    "id": "855",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical Cystectomy -Ileal conduit",
    "nonNabh": 17000,
    "nabh": 20000
  },
  {
    "id": "856",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical Cystectomy - continent diversion.",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "857",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical Cystectomy – Neo bladder",
    "nonNabh": 18500,
    "nabh": 21275
  },
  {
    "id": "858",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Nephrectomy Simple -Open",
    "nonNabh": 10074,
    "nabh": 11585
  },
  {
    "id": "859",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Nephrectomy Simple-lap/Endoscopic",
    "nonNabh": 12593,
    "nabh": 14482
  },
  {
    "id": "860",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Nephrostomy -Open",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "861",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Nephrostomy -Lap/Endoscopic",
    "nonNabh": 10704,
    "nabh": 12593
  },
  {
    "id": "862",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ureteric Reimplant forMegaureter/ Vesicoureteric reflux/ureterocele (open)",
    "nonNabh": 10494,
    "nabh": 12068
  },
  {
    "id": "863",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ureteric Reimplant for Megaureter / Vesicoureteric reflux/ ureterocele (Laparoscopic)",
    "nonNabh": 10494,
    "nabh": 12068
  },
  {
    "id": "864",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Partial Cystectomy",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "865",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Transurethral Resection of Prostate (TURP) & Transurethral Resection of Bladder Tumour (TURBT)",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "866",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Transurethral Resection of Prostate (TURP) with Cystolithotripsy",
    "nonNabh": 17000,
    "nabh": 19550
  },
  {
    "id": "867",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Closure of Urethral Fistula",
    "nonNabh": 11000,
    "nabh": 12650
  },
  {
    "id": "868",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Orchidopexy - Unilateral -Open",
    "nonNabh": 9867,
    "nabh": 11347
  },
  {
    "id": "869",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Orchidopexy - Unilateral- Lap/Endoscopic",
    "nonNabh": 12334,
    "nabh": 14184
  },
  {
    "id": "870",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Orchidopexy - Bilateral -Open",
    "nonNabh": 12282,
    "nabh": 14124
  },
  {
    "id": "871",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Orchidopexy - Bilateral -Lap/Endoscopic",
    "nonNabh": 14500,
    "nabh": 16675
  },
  {
    "id": "872",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Cystolithotomy -Suprapubic",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "873",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Endoscopic Removal of Stone in Bladder",
    "nonNabh": 3450,
    "nabh": 3968
  },
  {
    "id": "874",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Resection Bladder Neck Endoscopic / Bladder neck incision / transurethral incision on prostrate",
    "nonNabh": 10925,
    "nabh": 12564
  },
  {
    "id": "875",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ureteroscopic Surgery",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "876",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Urethroplasty 1st Stage",
    "nonNabh": 10925,
    "nabh": 12564
  },
  {
    "id": "877",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Scrotal Exploration",
    "nonNabh": 8556,
    "nabh": 9839
  },
  {
    "id": "878",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Perineal Urethrostomy",
    "nonNabh": 4715,
    "nabh": 5422
  },
  {
    "id": "879",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Dilatation of Stricture Urethra under G.A.",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "880",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Dilatation of Stricture Urethra under LA",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "881",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Laparoscopic Nephrectomy (Select CGHS rate Code 508 for approved rate)",
    "nonNabh": 508,
    "nabh": 508
  },
  {
    "id": "882",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Laparoscopic partial Nephrectomy",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "883",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Laparoscopic pyelolithotomy",
    "nonNabh": 12650,
    "nabh": 14548
  },
  {
    "id": "884",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Laparoscopic Pyeloplasty",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "885",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Laparoscopic surgery for Renal cyst",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "886",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Laparoscopic ureterolithotomy",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "887",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Laparoscopic Nephroureterectomy",
    "nonNabh": 13225,
    "nabh": 15209
  },
  {
    "id": "888",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Extracorporeal Shock Wave Lithotripsy (ESWL)",
    "nonNabh": 19550,
    "nabh": 22483
  },
  {
    "id": "889",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Uroflow Study (Uroflometry)",
    "nonNabh": 450,
    "nabh": 518
  },
  {
    "id": "890",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Urodynamic Study (Cystometry)",
    "nonNabh": 480,
    "nabh": 552
  },
  {
    "id": "891",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Cystoscopy with Retrograde Catheter -Unilateral /RGP",
    "nonNabh": 2803,
    "nabh": 3223
  },
  {
    "id": "892",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Cystoscopy with Retrograde Catheter - Bilateral /RGP",
    "nonNabh": 4675,
    "nabh": 5500
  },
  {
    "id": "893",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Cystoscopy with Bladder Biopsy (Cold Cup Biopsy)",
    "nonNabh": 3381,
    "nabh": 3888
  },
  {
    "id": "894",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Voiding-cysto-urethrogram and retrograde urethrogram (Nephrostogram)",
    "nonNabh": 414,
    "nabh": 476
  },
  {
    "id": "895",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical prostatectomy-Open",
    "nonNabh": 17825,
    "nabh": 20499
  },
  {
    "id": "896",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical prostatectomy-Laparoscopic",
    "nonNabh": 20125,
    "nabh": 23144
  },
  {
    "id": "897",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Radical prostatectomy- Robotic / Robotic Partial Nephrectomy",
    "nonNabh": 20125,
    "nabh": 23144
  },
  {
    "id": "898",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Holmium YAG Prostate Surgery",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "899",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Holmium YAG Optical Internal Urethrotomy (OIU)",
    "nonNabh": 4600,
    "nabh": 5290
  },
  {
    "id": "900",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Holmium YAG Core through internal Urethrotomy",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "901",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Holmium YAG Stone Lithotripsy",
    "nonNabh": 10200,
    "nabh": 12000
  },
  {
    "id": "902",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Green Light laser for prostate",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "903",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Retrograde Intrarenal Surgery (RIRS)/ Flexible Ureteroscopy",
    "nonNabh": 6800,
    "nabh": 7820
  },
  {
    "id": "904",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Microscopic Vaso-Epididymal Anastomosis (VEA)/ Vasovasostomy (reversal of vasectomy for Infertility treatment) (Select CGHS rate Code 799 for approved rate)",
    "nonNabh": 799,
    "nabh": 799
  },
  {
    "id": "905",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Cystoscopic Botulinum Toxin Injection ( Over active bladder/ Neurogenic bladder) -excluding cost of drug",
    "nonNabh": 6800,
    "nabh": 7820
  },
  {
    "id": "906",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Peyronie’s disease – Plaque excision with grafting",
    "nonNabh": 3400,
    "nabh": 4000
  },
  {
    "id": "907",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "High Intensity Focus Ultrasound (HIFU) (Robotic) for Carcinoma prostrate and renal cell carcinoma",
    "nonNabh": 4600,
    "nabh": 5290
  },
  {
    "id": "908",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Prosthetic surgery for urinary incontinence",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "909",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Transrectal Ultrasound (TRUS) guided prostate biopsy",
    "nonNabh": 575,
    "nabh": 661
  },
  {
    "id": "910",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Ultrasound Guided Percutaneous Nephrostomy (PCN)",
    "nonNabh": 720,
    "nabh": 828
  },
  {
    "id": "911",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Other Major Surgery-Nephrology and Urology",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "912",
    "category": "NEPHROLOGY & UROLOGY",
    "name": "Other Minor Surgery-Nephrology and Urology",
    "nonNabh": 6800,
    "nabh": 7820
  },
  {
    "id": "913",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Craniotomy and Evacuation of Haematoma -Subdural",
    "nonNabh": 50715,
    "nabh": 58322
  },
  {
    "id": "914",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Craniotomy and Evacuation of Haematoma - Extradural",
    "nonNabh": 50000,
    "nabh": 57500
  },
  {
    "id": "915",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Evacuation /Excision of Brain Abscess by craniotomy",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "916",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Excision of Lobe (Frontal Temporal Cerebellum etc.)",
    "nonNabh": 41000,
    "nabh": 47150
  },
  {
    "id": "917",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Excision of Brain Tumours -Supratentorial",
    "nonNabh": 39123,
    "nabh": 44991
  },
  {
    "id": "918",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Excision of Brain Tumours -Infratentorial",
    "nonNabh": 45000,
    "nabh": 51750
  },
  {
    "id": "919",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery of spinal Cord Tumours",
    "nonNabh": 45000,
    "nabh": 51750
  },
  {
    "id": "920",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Ventriculoatrial /Ventriculoperitoneal Shunt (Select CGHS rate Code 938 for approved rate)",
    "nonNabh": 938,
    "nabh": 938
  },
  {
    "id": "921",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Twist Drill Craniostomy",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "922",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Subdural Tapping",
    "nonNabh": 2456,
    "nabh": 2824
  },
  {
    "id": "923",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Ventricular Tapping",
    "nonNabh": 2967,
    "nabh": 3412
  },
  {
    "id": "924",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Abscess Tapping",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "925",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Placement of Intracranial pressure (ICP) Monitor",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "926",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Skull Traction Application",
    "nonNabh": 2300,
    "nabh": 2645
  },
  {
    "id": "927",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Lumbar Pressure Monitoring",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "928",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Vascular Malformations",
    "nonNabh": 22000,
    "nabh": 25300
  },
  {
    "id": "929",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Meningo Encephalocoele excision and repair",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "930",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Meningomyelocoele Repair",
    "nonNabh": 24995,
    "nabh": 28744
  },
  {
    "id": "931",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "CSF Rhinorrhoea Repair",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "932",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Cranioplasty",
    "nonNabh": 24150,
    "nabh": 27773
  },
  {
    "id": "933",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Anterior Cervical Discectomy",
    "nonNabh": 16600,
    "nabh": 19090
  },
  {
    "id": "934",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Brachial Plexus Exploration and neurotization",
    "nonNabh": 15525,
    "nabh": 17854
  },
  {
    "id": "935",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Median Nerve Decompression",
    "nonNabh": 14000,
    "nabh": 16100
  },
  {
    "id": "936",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Peripheral Nerve Surgery – Major",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "937",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Peripheral Nerve Surgery Minor",
    "nonNabh": 8280,
    "nabh": 9522
  },
  {
    "id": "938",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Ventriculoatrial /Ventriculoperitoneal Shunt",
    "nonNabh": 11615,
    "nabh": 13357
  },
  {
    "id": "939",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Nerve Biopsy",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "940",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Brain Biopsy",
    "nonNabh": 5808,
    "nabh": 6679
  },
  {
    "id": "941",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Anterior Cervical Spine Surgery with fusion",
    "nonNabh": 32200,
    "nabh": 37030
  },
  {
    "id": "942",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Anterio Lateral Decompression of spine",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "943",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Brain Mapping",
    "nonNabh": 837,
    "nabh": 963
  },
  {
    "id": "944",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Cervical or Dorsal or Lumbar Laminectomy",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "945",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Combined Trans-oral Surgery & Craniovertebral (CV) Junction Fusion",
    "nonNabh": 34500,
    "nabh": 39675
  },
  {
    "id": "946",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Craniovertebral Junction (CVJ) Fusion procedures",
    "nonNabh": 30000,
    "nabh": 34500
  },
  {
    "id": "947",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Depressed Fracture Elevation",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "948",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Lumbar Discectomy",
    "nonNabh": 27600,
    "nabh": 31740
  },
  {
    "id": "949",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Endarterectomy (Carotid)",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "950",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Radiofrequency (RF) Lesion for Trigeminal Neuralgia",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "951",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Spasticity Surgery -",
    "nonNabh": 39675,
    "nabh": 45626
  },
  {
    "id": "952",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Spinal Fusion Procedure",
    "nonNabh": 30000,
    "nabh": 34500
  },
  {
    "id": "953",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Spinal Intra Medullary Tumours",
    "nonNabh": 34500,
    "nabh": 39675
  },
  {
    "id": "954",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Spinal Bifida Surgery Major",
    "nonNabh": 18975,
    "nabh": 21821
  },
  {
    "id": "955",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Spinal Bifida Surgery Minor",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "956",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Stereotaxic Procedures- biopsy/aspiration of cyst",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "957",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Trans Sphenoidal Surgery",
    "nonNabh": 30000,
    "nabh": 34500
  },
  {
    "id": "958",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Trans Oral Surgery",
    "nonNabh": 30000,
    "nabh": 34500
  },
  {
    "id": "959",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Implantation of Deep Brain Stimulation (DBS) -One electrode",
    "nonNabh": 34500,
    "nabh": 39675
  },
  {
    "id": "960",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Implantation of Deep Brain Stimulation (DBS) -two electrodes",
    "nonNabh": 40250,
    "nabh": 46288
  },
  {
    "id": "961",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Endoscopic aqueductoplasty",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "962",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Facial nerve reconstruction",
    "nonNabh": 30000,
    "nabh": 34500
  },
  {
    "id": "963",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Carotid stenting",
    "nonNabh": 42263,
    "nabh": 48602
  },
  {
    "id": "964",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Cervical disc arthroplasty",
    "nonNabh": 27600,
    "nabh": 31740
  },
  {
    "id": "965",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Lumbar disc arthroplasty",
    "nonNabh": 13800,
    "nabh": 15870
  },
  {
    "id": "966",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Corpus callostomy for Epilepsy",
    "nonNabh": 35000,
    "nabh": 40250
  },
  {
    "id": "967",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Hemispherotomy for Epilepsy",
    "nonNabh": 32200,
    "nabh": 37030
  },
  {
    "id": "968",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Endoscopic CSF rhinorrhoea repair",
    "nonNabh": 30000,
    "nabh": 34500
  },
  {
    "id": "969",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Burr hole evacuation of chronic subdural haematoma",
    "nonNabh": 24150,
    "nabh": 27773
  },
  {
    "id": "970",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Epilepsy surgery other than at S No. 966 and 967",
    "nonNabh": 36225,
    "nabh": 41659
  },
  {
    "id": "971",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Radiofrequency (RF) lesion for facet joint pain syndrome",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "972",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Cervical laminoplasty",
    "nonNabh": 32000,
    "nabh": 36800
  },
  {
    "id": "973",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Lateral mass C1-C2 screw fixation",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "974",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Microsurgical decompression for Trigeminal nerve",
    "nonNabh": 38000,
    "nabh": 43700
  },
  {
    "id": "975",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Microsurgical decompression for hemifacial spasm",
    "nonNabh": 4646,
    "nabh": 5343
  },
  {
    "id": "976",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Extracranial-Intracranial Bypass Procedures (EC-IC) bypass procedures",
    "nonNabh": 32000,
    "nabh": 36800
  },
  {
    "id": "977",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Image guided craniotomy",
    "nonNabh": 28980,
    "nabh": 33327
  },
  {
    "id": "978",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Baclofen pump implantation",
    "nonNabh": 39000,
    "nabh": 44850
  },
  {
    "id": "979",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Programmable Ventriculo-Peritoneal (VP) shunt",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "980",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Endoscopic sympathectomy",
    "nonNabh": 17107,
    "nabh": 19673
  },
  {
    "id": "981",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Lumbar puncture",
    "nonNabh": 207,
    "nabh": 238
  },
  {
    "id": "982",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "External ventricular drainage (EVD)",
    "nonNabh": 4600,
    "nabh": 5290
  },
  {
    "id": "983",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Endoscopic 3rd ventriculostomy",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "984",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Endoscopic cranial surgery/Biopsy/aspiration",
    "nonNabh": 31536,
    "nabh": 36266
  },
  {
    "id": "985",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Endoscopic discectomy (Lumbar, Cervical)",
    "nonNabh": 35621,
    "nabh": 40964
  },
  {
    "id": "986",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Aneurysm coiling (Endovascular)",
    "nonNabh": 34400,
    "nabh": 39560
  },
  {
    "id": "987",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for skull fractures",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "988",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Carpel Tunnel decompression",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "989",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Clipping of intracranial aneurysm",
    "nonNabh": 24150,
    "nabh": 27773
  },
  {
    "id": "990",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for intracranial Arteriovenous malformations(AVM)",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "991",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Foramen magnum decompression for Chiari Malformation",
    "nonNabh": 93750,
    "nabh": 107813
  },
  {
    "id": "992",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Dorsal column stimulation for backache in failed back syndrome",
    "nonNabh": 28750,
    "nabh": 33063
  },
  {
    "id": "993",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for recurrent disc prolapse/epidural fibrosis",
    "nonNabh": 32200,
    "nabh": 37030
  },
  {
    "id": "994",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for brain stem tumours",
    "nonNabh": 43988,
    "nabh": 50586
  },
  {
    "id": "995",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Decompressive craniotomy for hemispherical acute subdural haematoma/ brain swelling/large infarct",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "996",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Intra-arterial thrombolysis with Tissue Plasminogen Activator (TPA) (for ischemic stroke )",
    "nonNabh": 4600,
    "nabh": 5290
  },
  {
    "id": "997",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Stereotactic aspiration of intracerebral haematoma",
    "nonNabh": 32545,
    "nabh": 37427
  },
  {
    "id": "998",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Endoscopic aspiration of intracerebellar haematoma",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "999",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Stereotactic Radiosurgery for brain pathology (X knife/Gamma ) - ONE session",
    "nonNabh": 27560,
    "nabh": 31694
  },
  {
    "id": "1000",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Stereotactic Radiosurgery for brain pathology (X knife / Gamma knife -Two or more sessions",
    "nonNabh": 57500,
    "nabh": 66125
  },
  {
    "id": "1001",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Chemotheraphy wafers for malignant brain tumors",
    "nonNabh": 14450,
    "nabh": 16618
  },
  {
    "id": "1002",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Battery Placement for Deep Brain Stimulation (DBS)",
    "nonNabh": 22000,
    "nabh": 25300
  },
  {
    "id": "1003",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Baclofen pump implantation for spasticity",
    "nonNabh": 17330,
    "nabh": 19930
  },
  {
    "id": "1004",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Peripheral Nerve tumor surgery",
    "nonNabh": 24000,
    "nabh": 27600
  },
  {
    "id": "1005",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery Intra Cranial Meningioma",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "1006",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for Intracranial Schwannoma",
    "nonNabh": 35000,
    "nabh": 40250
  },
  {
    "id": "1007",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for Gliomas",
    "nonNabh": 45000,
    "nabh": 51750
  },
  {
    "id": "1008",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for Orbital tumors",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "1009",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for Cranial (Skull) tumors",
    "nonNabh": 38500,
    "nabh": 44275
  },
  {
    "id": "1010",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Surgery for Scalp Arteriovenous Malformations (AVMs)",
    "nonNabh": 25000,
    "nabh": 28750
  },
  {
    "id": "1011",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Kyphoplasty",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "1012",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Balloon Kyphoplasty",
    "nonNabh": 40000,
    "nabh": 46000
  },
  {
    "id": "1013",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Lesioning procedures for Parkinson’s disease, Dystonia etc.",
    "nonNabh": 35000,
    "nabh": 40250
  },
  {
    "id": "1014",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Other Major Surgery-Neuro-surgery",
    "nonNabh": 42500,
    "nabh": 50000
  },
  {
    "id": "1015",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Other Minor Surgery-Neuro-surgery",
    "nonNabh": 17000,
    "nabh": 20000
  },
  {
    "id": "1016",
    "category": "PEDIATRIC SURGERY",
    "name": "Excision of thyroglossal Duct/Cyst",
    "nonNabh": 16000,
    "nabh": 18400
  },
  {
    "id": "1017",
    "category": "PEDIATRIC SURGERY",
    "name": "Diaphragmatic Hernia Repair (Thoracic or Abdominal Approach)",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "1018",
    "category": "PEDIATRIC SURGERY",
    "name": "Tracheo Oesophageal Fistula (Correction Surgery)",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "1019",
    "category": "PEDIATRIC SURGERY",
    "name": "Colon Replacement of Oesophagus",
    "nonNabh": 23000,
    "nabh": 26450
  },
  {
    "id": "1020",
    "category": "PEDIATRIC SURGERY",
    "name": "Omphalo Mesenteric Cyst Excision",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "1021",
    "category": "PEDIATRIC SURGERY",
    "name": "Omphalo Mesenteric Duct- Excision",
    "nonNabh": 15525,
    "nabh": 17854
  },
  {
    "id": "1022",
    "category": "PEDIATRIC SURGERY",
    "name": "Meckels Diverticulectomy",
    "nonNabh": 3347,
    "nabh": 3849
  },
  {
    "id": "1023",
    "category": "PEDIATRIC SURGERY",
    "name": "Omphalocele 1st Stage (Hernia Repair)",
    "nonNabh": 15525,
    "nabh": 17854
  },
  {
    "id": "1024",
    "category": "PEDIATRIC SURGERY",
    "name": "Omphalocele 2nd Stge (Hernia Repair)",
    "nonNabh": 17250,
    "nabh": 19838
  },
  {
    "id": "1025",
    "category": "PEDIATRIC SURGERY",
    "name": "Gastroschisis Repair",
    "nonNabh": 16100,
    "nabh": 18515
  },
  {
    "id": "1026",
    "category": "PEDIATRIC SURGERY",
    "name": "Inguinal Herniotomy",
    "nonNabh": 12558,
    "nabh": 14442
  },
  {
    "id": "1027",
    "category": "PEDIATRIC SURGERY",
    "name": "Congenital Hydrocele",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "1028",
    "category": "PEDIATRIC SURGERY",
    "name": "Hydrocele of Cord",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "1029",
    "category": "PEDIATRIC SURGERY",
    "name": "Torsion Testis Operation",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1030",
    "category": "PEDIATRIC SURGERY",
    "name": "Congenital Pyloric Stenosis- operation",
    "nonNabh": 13938,
    "nabh": 16029
  },
  {
    "id": "1031",
    "category": "PEDIATRIC SURGERY",
    "name": "Duodenal Atresia Operation",
    "nonNabh": 14000,
    "nabh": 16100
  },
  {
    "id": "1032",
    "category": "PEDIATRIC SURGERY",
    "name": "Pancreatic Ring Operation",
    "nonNabh": 22425,
    "nabh": 25789
  },
  {
    "id": "1033",
    "category": "PEDIATRIC SURGERY",
    "name": "Meconium Ileus Operation",
    "nonNabh": 14500,
    "nabh": 16675
  },
  {
    "id": "1034",
    "category": "PEDIATRIC SURGERY",
    "name": "Malrotation of Intestines Operation",
    "nonNabh": 13000,
    "nabh": 14950
  },
  {
    "id": "1035",
    "category": "PEDIATRIC SURGERY",
    "name": "Rectal Biopsy (Megacolon)",
    "nonNabh": 9736,
    "nabh": 11196
  },
  {
    "id": "1036",
    "category": "PEDIATRIC SURGERY",
    "name": "Colostomy Transverse",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1037",
    "category": "PEDIATRIC SURGERY",
    "name": "Colostomy Left Iliac",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1038",
    "category": "PEDIATRIC SURGERY",
    "name": "Abdominal Perineal Pull Through (Hirschsprung's Disease)",
    "nonNabh": 19000,
    "nabh": 21850
  },
  {
    "id": "1039",
    "category": "PEDIATRIC SURGERY",
    "name": "Imperforate Anus Low Anomaly -Cut Back Operation",
    "nonNabh": 10235,
    "nabh": 11770
  },
  {
    "id": "1040",
    "category": "PEDIATRIC SURGERY",
    "name": "Imperforate Anus Low Anomaly - Perineal Anoplasty",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "1041",
    "category": "PEDIATRIC SURGERY",
    "name": "Imperforate Anus High Anomaly -Sacroabdomino Perineal Pull Through",
    "nonNabh": 12500,
    "nabh": 14375
  },
  {
    "id": "1042",
    "category": "PEDIATRIC SURGERY",
    "name": "Imperforate Anus High Anomaly - Closure of",
    "nonNabh": 8625,
    "nabh": 9919
  },
  {
    "id": "1043",
    "category": "PEDIATRIC SURGERY",
    "name": "Intussusception Operation",
    "nonNabh": 20700,
    "nabh": 23805
  },
  {
    "id": "1044",
    "category": "PEDIATRIC SURGERY",
    "name": "Choledochoduodenostomy for Atresia of Extra Hepatic Billiary Duct",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1045",
    "category": "PEDIATRIC SURGERY",
    "name": "Operation of Choledochal Cyst",
    "nonNabh": 16000,
    "nabh": 18400
  },
  {
    "id": "1046",
    "category": "PEDIATRIC SURGERY",
    "name": "Nephrectomy for -Pyonephrosis",
    "nonNabh": 17000,
    "nabh": 19550
  },
  {
    "id": "1047",
    "category": "PEDIATRIC SURGERY",
    "name": "Nephrectomy for - Hydronephrosis",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1048",
    "category": "PEDIATRIC SURGERY",
    "name": "Nephrectomy for -Wilms Tumour",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1049",
    "category": "PEDIATRIC SURGERY",
    "name": "Paraortic Lymphadenectomy with Nephrectomy for Wilms Tumour",
    "nonNabh": 20000,
    "nabh": 23000
  },
  {
    "id": "1050",
    "category": "PEDIATRIC SURGERY",
    "name": "Sacro-Coccygeal Teratoma Excision",
    "nonNabh": 14000,
    "nabh": 16100
  },
  {
    "id": "1051",
    "category": "PEDIATRIC SURGERY",
    "name": "Neuroblastoma Debulking",
    "nonNabh": 16000,
    "nabh": 18400
  },
  {
    "id": "1052",
    "category": "PEDIATRIC SURGERY",
    "name": "Neuroblastoma Total Excision",
    "nonNabh": 20700,
    "nabh": 23805
  },
  {
    "id": "1053",
    "category": "PEDIATRIC SURGERY",
    "name": "Rhabdomyosarcoma wide Excision",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1054",
    "category": "PEDIATRIC SURGERY",
    "name": "Congenital Atresia & Stenosis of Small Intestine",
    "nonNabh": 19000,
    "nabh": 21850
  },
  {
    "id": "1055",
    "category": "PEDIATRIC SURGERY",
    "name": "Meconium ileus (Select CGHS rate Code 1033 for approved rate",
    "nonNabh": 1033,
    "nabh": 1033
  },
  {
    "id": "1056",
    "category": "PEDIATRIC SURGERY",
    "name": "Malrotation & Volvulus of the Midgut",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1057",
    "category": "PEDIATRIC SURGERY",
    "name": "Excision of Meckel’s Deverticulum",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "1058",
    "category": "PEDIATRIC SURGERY",
    "name": "Other Major Surgery-Paediatric Surgery",
    "nonNabh": 27000,
    "nabh": 31050
  },
  {
    "id": "1059",
    "category": "PEDIATRIC SURGERY",
    "name": "Other Minor Surgery-Paediatric Surgery",
    "nonNabh": 11050,
    "nabh": 13000
  },
  {
    "id": "1060",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Primary Suturing of Wound",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "1061",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Injection of Keloids - Ganglion",
    "nonNabh": 1099,
    "nabh": 1264
  },
  {
    "id": "1062",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Injection of Keloids - Haemangioma",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "1063",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Free Grafts - Wolfe Grafts",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "1064",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Free Grafts - Thiersch- Small Area 5%",
    "nonNabh": 7475,
    "nabh": 8596
  },
  {
    "id": "1065",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Free Grafts - Large Area 10%",
    "nonNabh": 8000,
    "nabh": 9200
  },
  {
    "id": "1066",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Free Grafts - Very Large Area 20% and above.",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "1067",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Skin Flaps - Rotation Flaps",
    "nonNabh": 8970,
    "nabh": 10316
  },
  {
    "id": "1068",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Skin Flaps - Advancement Flaps",
    "nonNabh": 12500,
    "nabh": 14375
  },
  {
    "id": "1069",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Skin Flaps - Direct- cross Leg Flaps- Cross Arm Flap",
    "nonNabh": 12500,
    "nabh": 14375
  },
  {
    "id": "1070",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Skin Flaps - Cross Finger",
    "nonNabh": 12500,
    "nabh": 14375
  },
  {
    "id": "1071",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Skin Flaps - Abdominal",
    "nonNabh": 9350,
    "nabh": 11000
  },
  {
    "id": "1072",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Skin Flaps - Thoracic",
    "nonNabh": 9350,
    "nabh": 11000
  },
  {
    "id": "1073",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Skin Flaps - Arm Etc.",
    "nonNabh": 11000,
    "nabh": 12650
  },
  {
    "id": "1074",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Subcutaneous Pedicle Flaps Raising",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "1075",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Subcutaneous Pedicle Flaps Delay",
    "nonNabh": 5950,
    "nabh": 7000
  },
  {
    "id": "1076",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Subcutaneous Pedicle Flaps Transfer",
    "nonNabh": 5950,
    "nabh": 7000
  },
  {
    "id": "1077",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Cartilage Grafting",
    "nonNabh": 8625,
    "nabh": 9919
  },
  {
    "id": "1078",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Reduction of Facial Fractures of Nose",
    "nonNabh": 1380,
    "nabh": 1587
  },
  {
    "id": "1079",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Reduction of Facial Fractures of Maxilla",
    "nonNabh": 8000,
    "nabh": 9200
  },
  {
    "id": "1080",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Reduction of Fractures of Mandible & Maxilla - Eyelet Splinting",
    "nonNabh": 7475,
    "nabh": 8596
  },
  {
    "id": "1081",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Reduction of Fractures of Mandible & Maxilla - Cast Metal Splints",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "1082",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Reduction of Fractures of Mandible & Maxilla - Gunning Splints",
    "nonNabh": 7500,
    "nabh": 8625
  },
  {
    "id": "1083",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Internal Wire Fixation of Mandible & Maxilla",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "1084",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Cleft Lip - repair.",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "1085",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Cleft Palate Repair",
    "nonNabh": 12650,
    "nabh": 14548
  },
  {
    "id": "1086",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Primary Bone Grafting for alveolar cleft in Cleft Lip",
    "nonNabh": 11500,
    "nabh": 13225
  },
  {
    "id": "1087",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Secondary Surgery for Cleft Lip Deformity",
    "nonNabh": 10000,
    "nabh": 11500
  },
  {
    "id": "1088",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Secondary Surgery for Cleft Palate",
    "nonNabh": 12650,
    "nabh": 14548
  },
  {
    "id": "1089",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Reconstruction of Eyelid Defects - Minor",
    "nonNabh": 6325,
    "nabh": 7274
  },
  {
    "id": "1090",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Reconstruction of Eyelid Defects - Major",
    "nonNabh": 8500,
    "nabh": 9775
  },
  {
    "id": "1091",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Plastic Surgery of Different Regions of the Ear - Minor",
    "nonNabh": 8050,
    "nabh": 9258
  },
  {
    "id": "1092",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Plastic Surgery of Different Regions of the Ear - Major",
    "nonNabh": 10350,
    "nabh": 11903
  },
  {
    "id": "1093",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Plastic Surgery of the Nose - Minor",
    "nonNabh": 8050,
    "nabh": 9258
  },
  {
    "id": "1094",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Plastic Surgery of the Nose - Major",
    "nonNabh": 9500,
    "nabh": 10925
  },
  {
    "id": "1095",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Plastic Surgery for Facial Paralysis (Support with Reanimation)",
    "nonNabh": 16100,
    "nabh": 18515
  },
  {
    "id": "1096",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Pendulous Breast - Mammoplasty",
    "nonNabh": 13000,
    "nabh": 14950
  },
  {
    "id": "1097",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Underdeveloped Breast Mammoplasty",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "1098",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "After Mastectomy (Reconstruction) Mammoplasty",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "1099",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Syndactyly Repair",
    "nonNabh": 12750,
    "nabh": 15000
  },
  {
    "id": "1100",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Dermabrasion Face",
    "nonNabh": 13225,
    "nabh": 15209
  },
  {
    "id": "1101",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "upto 30% Burns 1st Dressing",
    "nonNabh": 152,
    "nabh": 175
  },
  {
    "id": "1102",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "upto 30% Burns Subsequent Dressing",
    "nonNabh": 124,
    "nabh": 143
  },
  {
    "id": "1103",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "30% to 50% Burns 1st Dressing",
    "nonNabh": 193,
    "nabh": 222
  },
  {
    "id": "1104",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "30% to 50% Burns Subsequent Dressing",
    "nonNabh": 152,
    "nabh": 175
  },
  {
    "id": "1105",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Extensive Burn -above 50% Frist Dressing",
    "nonNabh": 276,
    "nabh": 317
  },
  {
    "id": "1106",
    "category": "BURNS & PLASTIC SURGERY",
    "name": "Extensive Burn -above 50% Subsequent dressing",
    "nonNabh": 193,
    "nabh": 222
  },
  {
    "id": "1240",
    "category": "PHYSIOTHERAPY",
    "name": "Ultrasonic therapy",
    "nonNabh": 78,
    "nabh": 90
  },
  {
    "id": "1241",
    "category": "PHYSIOTHERAPY",
    "name": "Shortwave Diathermy (SWD)",
    "nonNabh": 78,
    "nabh": 90
  },
  {
    "id": "1242",
    "category": "PHYSIOTHERAPY",
    "name": "Electrical stimulation (therapeutic)/ Interferential therapy (IFT) /Transcutaneous Electrical Nerve Stimulation (TENS)",
    "nonNabh": 78,
    "nabh": 90
  },
  {
    "id": "1243",
    "category": "PHYSIOTHERAPY",
    "name": "Muscle testing and diagnostic",
    "nonNabh": 71,
    "nabh": 82
  },
  {
    "id": "1244",
    "category": "PHYSIOTHERAPY",
    "name": "Infrared",
    "nonNabh": 78,
    "nabh": 90
  },
  {
    "id": "1245",
    "category": "PHYSIOTHERAPY",
    "name": "Ultraviolet Therapeutic (UV Therapeutic) dose",
    "nonNabh": 58,
    "nabh": 67
  },
  {
    "id": "1246",
    "category": "PHYSIOTHERAPY",
    "name": "Intermittent Lumbar Traction",
    "nonNabh": 78,
    "nabh": 90
  },
  {
    "id": "1247",
    "category": "PHYSIOTHERAPY",
    "name": "Intermittent Cervical traction",
    "nonNabh": 75,
    "nabh": 86
  },
  {
    "id": "1248",
    "category": "PHYSIOTHERAPY",
    "name": "Wax bath",
    "nonNabh": 75,
    "nabh": 86
  },
  {
    "id": "1249",
    "category": "PHYSIOTHERAPY",
    "name": "Hot pack",
    "nonNabh": 78,
    "nabh": 90
  },
  {
    "id": "1250",
    "category": "PHYSIOTHERAPY",
    "name": "Breathing Exercises & Postural Drainage",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1251",
    "category": "PHYSIOTHERAPY",
    "name": "Cerebral Palsy – exercise",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1252",
    "category": "PHYSIOTHERAPY",
    "name": "Post – polio exercise",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1253",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Cobalt 60 therapy",
    "nonNabh": 0,
    "nabh": 0
  },
  {
    "id": "1254",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Cobalt 60 therapy- Radical therapy",
    "nonNabh": 68425,
    "nabh": 78689
  },
  {
    "id": "1255",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Cobalt 60 therapy- Palliative therapy",
    "nonNabh": 24438,
    "nabh": 28104
  },
  {
    "id": "1256",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Linear accelerator",
    "nonNabh": 0,
    "nabh": 0
  },
  {
    "id": "1257",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Linear accelerator- Radical therapy",
    "nonNabh": 58650,
    "nabh": 67448
  },
  {
    "id": "1258",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Linear accelerator- Palliative therapy",
    "nonNabh": 34213,
    "nabh": 39345
  },
  {
    "id": "1259",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "3D Planning Radiotherapy",
    "nonNabh": 4888,
    "nabh": 5621
  },
  {
    "id": "1260",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "2D Planning Radiotherapy",
    "nonNabh": 4888,
    "nabh": 5621
  },
  {
    "id": "1261",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "IMRT(Intensity Modulated radiotherapy)",
    "nonNabh": 100878,
    "nabh": 116010
  },
  {
    "id": "1262",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "SRT (Stereotactic radiotherapy)",
    "nonNabh": 60996,
    "nabh": 70145
  },
  {
    "id": "1263",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "SRS(Stereotactic radio surgery)",
    "nonNabh": 80546,
    "nabh": 92628
  },
  {
    "id": "1264",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "IGRT(Image guided radiotherapy)",
    "nonNabh": 147016,
    "nabh": 169068
  },
  {
    "id": "1268",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Intracavitary (Brachytherapy)",
    "nonNabh": 11730,
    "nabh": 13490
  },
  {
    "id": "1269",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Interstitial (Brachytherapy)",
    "nonNabh": 58650,
    "nabh": 67448
  },
  {
    "id": "1270",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Intraluminal (Brachytherapy)",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "1271",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Surface mould (Brachytherapy)",
    "nonNabh": 4644,
    "nabh": 5341
  },
  {
    "id": "1272",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Gliadel Wafer (Brachytherapy)",
    "nonNabh": 93900,
    "nabh": 107985
  },
  {
    "id": "1273",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Neoadjuvant Chemotherapy",
    "nonNabh": 863,
    "nabh": 992
  },
  {
    "id": "1274",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Adjuvant Chemotherapy",
    "nonNabh": 863,
    "nabh": 992
  },
  {
    "id": "1275",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Concurrent-chemoradiation",
    "nonNabh": 920,
    "nabh": 1058
  },
  {
    "id": "1276",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Single drug Chemotherapy",
    "nonNabh": 552,
    "nabh": 635
  },
  {
    "id": "1277",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Multiple drugs Chemotherapy",
    "nonNabh": 897,
    "nabh": 1032
  },
  {
    "id": "1278",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Targeted therapy-Chemotherapy",
    "nonNabh": 920,
    "nabh": 1058
  },
  {
    "id": "1279",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "Chemoport facility",
    "nonNabh": 920,
    "nabh": 1058
  },
  {
    "id": "1280",
    "category": "ONCOLOGY & CHEMOTHERAPY",
    "name": "PICC line (peripherally inserted Central Cannulisation)",
    "nonNabh": 920,
    "nabh": 1058
  },
  {
    "id": "1281",
    "category": "ENT",
    "name": "Upper GI Endoscopy (Gastro endoscopy / Esophagogastroduodenoscopy (EGD) + Lower GI Endoscopy (Colonoscopy/ Sigmoidoscopy)",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "1282",
    "category": "ENT",
    "name": "Diagnostic endoscopy",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1283",
    "category": "ENT",
    "name": "Endoscopic biopsy",
    "nonNabh": 345,
    "nabh": 397
  },
  {
    "id": "1284",
    "category": "ENT",
    "name": "Endoscopic mucosal resection",
    "nonNabh": 1543,
    "nabh": 1815
  },
  {
    "id": "1285",
    "category": "ENT",
    "name": "Oesophageal stricture dilatation",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "1286",
    "category": "ENT",
    "name": "Balloon dilatation of achalasia cardia",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "1287",
    "category": "ENT",
    "name": "Gastrointestinal (GIT) Foreign body removal",
    "nonNabh": 1725,
    "nabh": 1984
  },
  {
    "id": "1288",
    "category": "ENT",
    "name": "Oesophageal stenting",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "1289",
    "category": "ENT",
    "name": "Band ligation of oesophageal varices",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "1290",
    "category": "ENT",
    "name": "Sclerotherapy of oesophageal varices",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "1291",
    "category": "ENT",
    "name": "Glue injection of varices",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "1292",
    "category": "ENT",
    "name": "Argon plasma coagulation",
    "nonNabh": 4025,
    "nabh": 4629
  },
  {
    "id": "1293",
    "category": "ENT",
    "name": "Pyloric balloon dilatation",
    "nonNabh": 2415,
    "nabh": 2777
  },
  {
    "id": "1294",
    "category": "ENT",
    "name": "Enteranal stenting",
    "nonNabh": 3680,
    "nabh": 4232
  },
  {
    "id": "1295",
    "category": "ENT",
    "name": "Duodenal stricture dilation",
    "nonNabh": 990,
    "nabh": 1139
  },
  {
    "id": "1296",
    "category": "ENT",
    "name": "Single balloon enteroscopy",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1297",
    "category": "ENT",
    "name": "Double balloon enteroscopy",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "1298",
    "category": "ENT",
    "name": "Capsule endoscopy",
    "nonNabh": 4950,
    "nabh": 5693
  },
  {
    "id": "1299",
    "category": "ENT",
    "name": "Piles banding",
    "nonNabh": 1099,
    "nabh": 1264
  },
  {
    "id": "1300",
    "category": "ENT",
    "name": "Colonic stricture dilatation",
    "nonNabh": 2737,
    "nabh": 3148
  },
  {
    "id": "1301",
    "category": "ENT",
    "name": "Hot biopsy forceps procedures",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "1302",
    "category": "ENT",
    "name": "Colonic stenting",
    "nonNabh": 2737,
    "nabh": 3148
  },
  {
    "id": "1303",
    "category": "ENT",
    "name": "Junction biopsy",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "1304",
    "category": "ENT",
    "name": "Conjugal microscopy",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1305",
    "category": "ENT",
    "name": "Endoscopic sphincterotomy",
    "nonNabh": 2415,
    "nabh": 2777
  },
  {
    "id": "1306",
    "category": "ENT",
    "name": "Common Bile Duct (CBD) stone extraction",
    "nonNabh": 2415,
    "nabh": 2777
  },
  {
    "id": "1307",
    "category": "ENT",
    "name": "Common Bile Duct (CBD) stricture dilatation",
    "nonNabh": 6500,
    "nabh": 7475
  },
  {
    "id": "1308",
    "category": "ENT",
    "name": "Biliary stenting (plastic and metallic)",
    "nonNabh": 4830,
    "nabh": 5555
  },
  {
    "id": "1309",
    "category": "ENT",
    "name": "Mechanical lithotripsy of CBD stones",
    "nonNabh": 8000,
    "nabh": 9200
  },
  {
    "id": "1310",
    "category": "ENT",
    "name": "Pancreatic sphincterotomy",
    "nonNabh": 6375,
    "nabh": 7500
  },
  {
    "id": "1311",
    "category": "ENT",
    "name": "Pancreatic stricture dilatation",
    "nonNabh": 5750,
    "nabh": 6613
  },
  {
    "id": "1312",
    "category": "ENT",
    "name": "Pancreatic stone extraction",
    "nonNabh": 10098,
    "nabh": 11613
  },
  {
    "id": "1313",
    "category": "ENT",
    "name": "Mechanical lithotripsy of pancreatic stones",
    "nonNabh": 11385,
    "nabh": 13093
  },
  {
    "id": "1314",
    "category": "ENT",
    "name": "Endoscopic cysto gastrostomy",
    "nonNabh": 8050,
    "nabh": 9258
  },
  {
    "id": "1315",
    "category": "ENT",
    "name": "Balloon dilatation of papilla",
    "nonNabh": 6900,
    "nabh": 7935
  },
  {
    "id": "1316",
    "category": "ENT",
    "name": "Ultrasound guided FNAC (Select CGHS rate Code 1603 for approved rate)",
    "nonNabh": 1603,
    "nabh": 1603
  },
  {
    "id": "1317",
    "category": "ENT",
    "name": "Ultrasound guided abscess Drainage",
    "nonNabh": 720,
    "nabh": 828
  },
  {
    "id": "1318",
    "category": "ENT",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD)",
    "nonNabh": 1150,
    "nabh": 1323
  },
  {
    "id": "1319",
    "category": "ENT",
    "name": "Diagnostic angiography",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "1320",
    "category": "ENT",
    "name": "Vascular embolization",
    "nonNabh": 15100,
    "nabh": 17365
  },
  {
    "id": "1321",
    "category": "ENT",
    "name": "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    "nonNabh": 5400,
    "nabh": 6210
  },
  {
    "id": "1322",
    "category": "ENT",
    "name": "Inferior vena cava (IVC) Venography and Hepatic vein (HV) Venography",
    "nonNabh": 34212,
    "nabh": 39344
  },
  {
    "id": "1323",
    "category": "ENT",
    "name": "Muscular stenting",
    "nonNabh": 97750,
    "nabh": 112413
  },
  {
    "id": "1324",
    "category": "ENT",
    "name": "Balloon-occluded Retrograde Intravenous Obliteration (BRTO)",
    "nonNabh": 57500,
    "nabh": 66125
  },
  {
    "id": "1325",
    "category": "ENT",
    "name": "Portal haemodymic studies",
    "nonNabh": 1913,
    "nabh": 2250
  },
  {
    "id": "1326",
    "category": "ENT",
    "name": "Manometry and PH metry",
    "nonNabh": 1612,
    "nabh": 1897
  },
  {
    "id": "1327",
    "category": "ENT",
    "name": "Oesophageal PH metry",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1328",
    "category": "ENT",
    "name": "Oesophageal manometry",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1329",
    "category": "ENT",
    "name": "Small bowel manometry",
    "nonNabh": 6800,
    "nabh": 8000
  },
  {
    "id": "1330",
    "category": "ENT",
    "name": "Anorectal manometry",
    "nonNabh": 6800,
    "nabh": 8000
  },
  {
    "id": "1331",
    "category": "ENT",
    "name": "Colonic manometry",
    "nonNabh": 7650,
    "nabh": 9000
  },
  {
    "id": "1332",
    "category": "ENT",
    "name": "Biliary manometry",
    "nonNabh": 7650,
    "nabh": 9000
  },
  {
    "id": "1333",
    "category": "ENT",
    "name": "Sengstaken Blakemore (SB) tube tamponade",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "1334",
    "category": "ENT",
    "name": "Lintas machles tube tempode",
    "nonNabh": 2875,
    "nabh": 3306
  },
  {
    "id": "1335",
    "category": "ENT",
    "name": "Faecal / Fecal fat test/ fecal chymotrypsin/ fecal elastase",
    "nonNabh": 350,
    "nabh": 403
  },
  {
    "id": "1336",
    "category": "ENT",
    "name": "Breath tests (Urea breath test/ H. pylori breath test)",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "1337",
    "category": "ENT",
    "name": "Extracorporeal Shortwave Lithotripsy (ESWL) (Select CGHS rate Code 888 for approved rate)",
    "nonNabh": 888,
    "nabh": 888
  },
  {
    "id": "1338",
    "category": "ENT",
    "name": "Liver biopsy",
    "nonNabh": 1380,
    "nabh": 1587
  },
  {
    "id": "1339",
    "category": "DENTAL",
    "name": "Dental IOPA X-ray",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1340",
    "category": "DENTAL",
    "name": "Occlusal X-ray",
    "nonNabh": 78,
    "nabh": 90
  },
  {
    "id": "1341",
    "category": "DENTAL",
    "name": "OPG X-ray",
    "nonNabh": 196,
    "nabh": 225
  },
  {
    "id": "1342",
    "category": "PULMONARY",
    "name": "Lung Ventilation & Perfusion Scan (V/Q Scan)",
    "nonNabh": 3600,
    "nabh": 4140
  },
  {
    "id": "1343",
    "category": "PULMONARY",
    "name": "Lung Perfusion Scan",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "1344",
    "category": "ORTHOPEDICS",
    "name": "Whole Body Bone Scan with SPECT.",
    "nonNabh": 3421,
    "nabh": 3934
  },
  {
    "id": "1345",
    "category": "ORTHOPEDICS",
    "name": "Three phase whole body Bone Scan",
    "nonNabh": 3421,
    "nabh": 3934
  },
  {
    "id": "1346",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Brain Perfusion SPECT Scan with Technetium 99m radiopharmaceuticals.",
    "nonNabh": 9775,
    "nabh": 11241
  },
  {
    "id": "1347",
    "category": "NEUROLOGY & NEUROSURGERY",
    "name": "Radionuclide Cisternography for CSF leak",
    "nonNabh": 3740,
    "nabh": 4400
  },
  {
    "id": "1354",
    "category": "GENITOURINARY",
    "name": "Renal Cortical Scintigraphy with Technetium 99m Dimercaptosuccinic acid (DMSA)",
    "nonNabh": 3421,
    "nabh": 3934
  },
  {
    "id": "1355",
    "category": "GENITOURINARY",
    "name": "Dynamic Renography.",
    "nonNabh": 3421,
    "nabh": 3934
  },
  {
    "id": "1356",
    "category": "GENITOURINARY",
    "name": "Dynamic Renography with Diuretic.",
    "nonNabh": 3421,
    "nabh": 3934
  },
  {
    "id": "1357",
    "category": "GENITOURINARY",
    "name": "Dynamic Renography with Captopril",
    "nonNabh": 1960,
    "nabh": 2254
  },
  {
    "id": "1358",
    "category": "GENITOURINARY",
    "name": "Testicular Scan",
    "nonNabh": 1466,
    "nabh": 1686
  },
  {
    "id": "1359",
    "category": "ENDOCRINOLOGY",
    "name": "Thyroid Uptake measurements with 131-Iodine.",
    "nonNabh": 1564,
    "nabh": 1799
  },
  {
    "id": "1360",
    "category": "ENDOCRINOLOGY",
    "name": "Thyroid Scan with Technetium 99m Pertechnetate.",
    "nonNabh": 1466,
    "nabh": 1686
  },
  {
    "id": "1361",
    "category": "ENDOCRINOLOGY",
    "name": "Iodine-131 Whole Body Scan",
    "nonNabh": 2933,
    "nabh": 3373
  },
  {
    "id": "1362",
    "category": "ENDOCRINOLOGY",
    "name": "Whole Body Scan with MIBG",
    "nonNabh": 17595,
    "nabh": 20234
  },
  {
    "id": "1363",
    "category": "ENDOCRINOLOGY",
    "name": "Parathyroid Scan",
    "nonNabh": 4888,
    "nabh": 5621
  },
  {
    "id": "1364",
    "category": "RADIO-ISOTOPE THERAPY",
    "name": "131-Iodine Therapy",
    "nonNabh": 1530,
    "nabh": 1800
  },
  {
    "id": "1365",
    "category": "RADIO-ISOTOPE THERAPY",
    "name": "131-Iodine Therapy <15mCi",
    "nonNabh": 3854,
    "nabh": 4432
  },
  {
    "id": "1366",
    "category": "RADIO-ISOTOPE THERAPY",
    "name": "131-Iodine Therapy 15-50mCi",
    "nonNabh": 4956,
    "nabh": 5699
  },
  {
    "id": "1367",
    "category": "RADIO-ISOTOPE THERAPY",
    "name": "131-Iodine Therapy 51-100mCi",
    "nonNabh": 12000,
    "nabh": 13800
  },
  {
    "id": "1368",
    "category": "RADIO-ISOTOPE THERAPY",
    "name": "131-Iodine Therapy >100mCi",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1369",
    "category": "RADIO-ISOTOPE THERAPY",
    "name": "Phosphorus-32 therapy for metastatic bone pain palliation",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1370",
    "category": "RADIO-ISOTOPE THERAPY",
    "name": "Samarium-153 therapy for metastatic bone pain palliation",
    "nonNabh": 10450,
    "nabh": 12018
  },
  {
    "id": "1371",
    "category": "RADIO-ISOTOPE THERAPY",
    "name": "Radiosynovectomy with Yttrium",
    "nonNabh": 21250,
    "nabh": 25000
  },
  {
    "id": "1372",
    "category": "CARDIOLOGY",
    "name": "Stress thallium / Myocardial Perfusion Scintigraphy",
    "nonNabh": 9450,
    "nabh": 10868
  },
  {
    "id": "1373",
    "category": "CARDIOLOGY",
    "name": "Rest thallium / Myocardial Perfusion Scintigraphy",
    "nonNabh": 8000,
    "nabh": 9200
  },
  {
    "id": "1374",
    "category": "CARDIOLOGY",
    "name": "Venography",
    "nonNabh": 3300,
    "nabh": 3795
  },
  {
    "id": "1375",
    "category": "CARDIOLOGY",
    "name": "Treadmill Test (TMT)",
    "nonNabh": 489,
    "nabh": 562
  },
  {
    "id": "1376",
    "category": "CARDIOLOGY",
    "name": "Transoesophageal Echocardiography (TEE) (Select CGHS rate Code 595/596 for approved rate as the case may be)",
    "nonNabh": 489,
    "nabh": 562
  },
  {
    "id": "1377",
    "category": "CARDIOLOGY",
    "name": "Lymph angiography",
    "nonNabh": 1613,
    "nabh": 1855
  },
  {
    "id": "1378",
    "category": "TUMOUR IMAGING",
    "name": "Scintimammography.",
    "nonNabh": 4800,
    "nabh": 5520
  },
  {
    "id": "1379",
    "category": "TUMOUR IMAGING",
    "name": "Indium labelled octreotide Scan",
    "nonNabh": 73313,
    "nabh": 84310
  },
  {
    "id": "1380",
    "category": "TUMOUR IMAGING",
    "name": "FDG Whole body PET / CT Scan (with or without contrast)",
    "nonNabh": 20528,
    "nabh": 23607
  },
  {
    "id": "1381",
    "category": "PET SCAN",
    "name": "Brain / Heart FDG PET / CT Scan",
    "nonNabh": 14663,
    "nabh": 16862
  },
  {
    "id": "1382",
    "category": "PET SCAN",
    "name": "Gallium-68 Peptide PET / CT imaging for Neuroendocrine Tumor",
    "nonNabh": 15000,
    "nabh": 17250
  },
  {
    "id": "1383",
    "category": "PATHOLOGY",
    "name": "Urine routine- pH, Specific gravity, sugar, protein and microscopy",
    "nonNabh": 35,
    "nabh": 40
  },
  {
    "id": "1384",
    "category": "PATHOLOGY",
    "name": "Urine Microalbumin",
    "nonNabh": 70,
    "nabh": 81
  },
  {
    "id": "1385",
    "category": "PATHOLOGY",
    "name": "Stool routine and Microscopy",
    "nonNabh": 35,
    "nabh": 40
  },
  {
    "id": "1386",
    "category": "PATHOLOGY",
    "name": "Stool occult blood",
    "nonNabh": 24,
    "nabh": 28
  },
  {
    "id": "1387",
    "category": "PATHOLOGY",
    "name": "Post coital smear examination",
    "nonNabh": 30,
    "nabh": 35
  },
  {
    "id": "1388",
    "category": "PATHOLOGY",
    "name": "Semen analysis",
    "nonNabh": 35,
    "nabh": 40
  },
  {
    "id": "1389",
    "category": "HEMATOLOGY",
    "name": "Haemoglobin (Hb)",
    "nonNabh": 18,
    "nabh": 21
  },
  {
    "id": "1390",
    "category": "HEMATOLOGY",
    "name": "Total Leucocytic Count (TLC)",
    "nonNabh": 31,
    "nabh": 36
  },
  {
    "id": "1391",
    "category": "HEMATOLOGY",
    "name": "Differential Leucocytic Count (DLC)",
    "nonNabh": 31,
    "nabh": 36
  },
  {
    "id": "1392",
    "category": "HEMATOLOGY",
    "name": "Erythrocyte Sedimentation Rate (ESR)",
    "nonNabh": 25,
    "nabh": 29
  },
  {
    "id": "1393",
    "category": "HEMATOLOGY",
    "name": "Total Red Cell count with MCV,MCH,MCHC,DRW",
    "nonNabh": 32,
    "nabh": 37
  },
  {
    "id": "1394",
    "category": "HEMATOLOGY",
    "name": "Complete Haemogram/CBC, Hb,RBC count and indices,TLC, DLC, Platelet, ESR, Peripheral smear examination",
    "nonNabh": 135,
    "nabh": 155
  },
  {
    "id": "1395",
    "category": "HEMATOLOGY",
    "name": "Platelet count",
    "nonNabh": 48,
    "nabh": 55
  },
  {
    "id": "1396",
    "category": "HEMATOLOGY",
    "name": "Reticulocyte count",
    "nonNabh": 48,
    "nabh": 55
  },
  {
    "id": "1397",
    "category": "HEMATOLOGY",
    "name": "Absolute Eosinophil count (AEC)",
    "nonNabh": 48,
    "nabh": 55
  },
  {
    "id": "1398",
    "category": "HEMATOLOGY",
    "name": "Packed Cell Volume (PCV)",
    "nonNabh": 13,
    "nabh": 15
  },
  {
    "id": "1399",
    "category": "HEMATOLOGY",
    "name": "Peripheral Smear Examination",
    "nonNabh": 43,
    "nabh": 49
  },
  {
    "id": "1400",
    "category": "HEMATOLOGY",
    "name": "Smear for Malaria parasite",
    "nonNabh": 41,
    "nabh": 47
  },
  {
    "id": "1401",
    "category": "HEMATOLOGY",
    "name": "Bleeding Time",
    "nonNabh": 35,
    "nabh": 40
  },
  {
    "id": "1402",
    "category": "HEMATOLOGY",
    "name": "Osmotic fragility Test",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1403",
    "category": "HEMATOLOGY",
    "name": "Bone Marrow Smear Examination",
    "nonNabh": 70,
    "nabh": 81
  },
  {
    "id": "1404",
    "category": "HEMATOLOGY",
    "name": "Bone Marrow Smear Examination with iron stain",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1405",
    "category": "HEMATOLOGY",
    "name": "Bone Marrow Smear Examination and cytochemistry",
    "nonNabh": 440,
    "nabh": 506
  },
  {
    "id": "1406",
    "category": "HEMATOLOGY",
    "name": "Activated partial ThromboplastinTime (APTT)",
    "nonNabh": 102,
    "nabh": 117
  },
  {
    "id": "1407",
    "category": "HEMATOLOGY",
    "name": "Rapid test for malaria(card test)",
    "nonNabh": 44,
    "nabh": 51
  },
  {
    "id": "1408",
    "category": "HEMATOLOGY",
    "name": "WBC cytochemistry for leukemia -Complete panel",
    "nonNabh": 110,
    "nabh": 127
  },
  {
    "id": "1409",
    "category": "HEMATOLOGY",
    "name": "Bleeding Disorder panel- PT, APTT, Thrombin Time Fibrinogen, D-Dimer/ Fibrinogen Degradation Products (FDP)",
    "nonNabh": 400,
    "nabh": 460
  },
  {
    "id": "1410",
    "category": "HEMATOLOGY",
    "name": "Factor Assays-Factor VIII",
    "nonNabh": 720,
    "nabh": 828
  },
  {
    "id": "1411",
    "category": "HEMATOLOGY",
    "name": "Factor Assays-Factor IX",
    "nonNabh": 680,
    "nabh": 782
  },
  {
    "id": "1412",
    "category": "HEMATOLOGY",
    "name": "Platelet Function test",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1413",
    "category": "HEMATOLOGY",
    "name": "Tests for hypercoagulable states- Protein C, Protein S, Antithrombin",
    "nonNabh": 400,
    "nabh": 460
  },
  {
    "id": "1414",
    "category": "HEMATOLOGY",
    "name": "Tests for lupus anticoagulant",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1415",
    "category": "HEMATOLOGY",
    "name": "Tests for Antiphospholipid antibody IgG, IgM (for cardiolipin and B2 Glycoprotein 1)",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "1416",
    "category": "HEMATOLOGY",
    "name": "Thalassemia studies (Red Cell indices and Hb HPLC)",
    "nonNabh": 560,
    "nabh": 644
  },
  {
    "id": "1417",
    "category": "HEMATOLOGY",
    "name": "Tests for Sickling / Hb HPLC)",
    "nonNabh": 77,
    "nabh": 89
  },
  {
    "id": "1418",
    "category": "BLOOD BANK",
    "name": "Blood Group & RH Type",
    "nonNabh": 30,
    "nabh": 35
  },
  {
    "id": "1419",
    "category": "BLOOD BANK",
    "name": "Cross match",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1420",
    "category": "BLOOD BANK",
    "name": "Coomb’s Test Direct",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1421",
    "category": "BLOOD BANK",
    "name": "Coomb’s Test Indirect",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1422",
    "category": "BLOOD BANK",
    "name": "3 cell panel- antibody screening for pregnant female",
    "nonNabh": 170,
    "nabh": 200
  },
  {
    "id": "1423",
    "category": "BLOOD BANK",
    "name": "11 cells panel for antibody identification",
    "nonNabh": 170,
    "nabh": 200
  },
  {
    "id": "1424",
    "category": "BLOOD BANK",
    "name": "Hepatitis B surface antigen (HBsAg)",
    "nonNabh": 102,
    "nabh": 120
  },
  {
    "id": "1425",
    "category": "BLOOD BANK",
    "name": "Hepatitis C virus (HCV)",
    "nonNabh": 128,
    "nabh": 150
  },
  {
    "id": "1426",
    "category": "BLOOD BANK",
    "name": "Human immunodeficiency virus- HIV I and II",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1427",
    "category": "BLOOD BANK",
    "name": "Venereal Disease Research Laboratory test (VDRL)",
    "nonNabh": 43,
    "nabh": 50
  },
  {
    "id": "1428",
    "category": "BLOOD BANK",
    "name": "RH Antibody titer",
    "nonNabh": 80,
    "nabh": 92
  },
  {
    "id": "1429",
    "category": "BLOOD BANK",
    "name": "Platelet Concentrate",
    "nonNabh": 56,
    "nabh": 64
  },
  {
    "id": "1430",
    "category": "BLOOD BANK",
    "name": "Random Donor Platelet(RDP)- (Select CGHS rate Code 1828 for approved rate)",
    "nonNabh": 1830,
    "nabh": 1830
  },
  {
    "id": "1431",
    "category": "BLOOD BANK",
    "name": "Single Donor Platelet (SDP- Apheresis)- (Select CGHS rate Code 1830 for approved rate)",
    "nonNabh": 1830,
    "nabh": 1830
  },
  {
    "id": "1432",
    "category": "BLOOD BANK",
    "name": "Routine-H & E",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1433",
    "category": "BLOOD BANK",
    "name": "special stain",
    "nonNabh": 65,
    "nabh": 75
  },
  {
    "id": "1434",
    "category": "BLOOD BANK",
    "name": "Immunohistochemistry(IHC)",
    "nonNabh": 750,
    "nabh": 863
  },
  {
    "id": "1435",
    "category": "BLOOD BANK",
    "name": "Histopathology Examination (HPE) Frozen section",
    "nonNabh": 780,
    "nabh": 897
  },
  {
    "id": "1436",
    "category": "BLOOD BANK",
    "name": "Histopathology Examination (HPE) Paraffin section",
    "nonNabh": 343,
    "nabh": 394
  },
  {
    "id": "1440",
    "category": "FLOW CYTOMETRY",
    "name": "Leukemia panel /Lymphoma panel",
    "nonNabh": 1536,
    "nabh": 1766
  },
  {
    "id": "1441",
    "category": "FLOW CYTOMETRY",
    "name": "Paroxysmal Nocturnal Hemoglobinuria (PNH) Panel- CD55,CD59",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "1442",
    "category": "FLOW CYTOMETRY",
    "name": "Karyotyping (Select CGHS rate code 677 for approved rate)",
    "nonNabh": 677,
    "nabh": 677
  },
  {
    "id": "1443",
    "category": "FLOW CYTOMETRY",
    "name": "Fluorescent in situ hybridization (FISH)",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "1444",
    "category": "BIOCHEMISTRY",
    "name": "Blood Glucose Random / Blood Glucose Fasting / Blood Glucose PP",
    "nonNabh": 24,
    "nabh": 28
  },
  {
    "id": "1445",
    "category": "BIOCHEMISTRY",
    "name": "24 hrs urine for Proteins,Sodium, creatinine",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1446",
    "category": "BIOCHEMISTRY",
    "name": "Blood Urea Nitrogen (BUN) / Urea",
    "nonNabh": 54,
    "nabh": 62
  },
  {
    "id": "1447",
    "category": "BIOCHEMISTRY",
    "name": "Serum Creatinine",
    "nonNabh": 55,
    "nabh": 63
  },
  {
    "id": "1448",
    "category": "BIOCHEMISTRY",
    "name": "Urine Bile Pigment and Salt",
    "nonNabh": 25,
    "nabh": 29
  },
  {
    "id": "1449",
    "category": "BIOCHEMISTRY",
    "name": "Urine Urobilinogen",
    "nonNabh": 20,
    "nabh": 23
  },
  {
    "id": "1450",
    "category": "BIOCHEMISTRY",
    "name": "Urine Ketones",
    "nonNabh": 30,
    "nabh": 35
  },
  {
    "id": "1451",
    "category": "BIOCHEMISTRY",
    "name": "Urine Occult Blood",
    "nonNabh": 35,
    "nabh": 40
  },
  {
    "id": "1452",
    "category": "BIOCHEMISTRY",
    "name": "Urine total proteins",
    "nonNabh": 18,
    "nabh": 21
  },
  {
    "id": "1453",
    "category": "BIOCHEMISTRY",
    "name": "Rheumatoid Factor / Rh Factor test",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1454",
    "category": "BIOCHEMISTRY",
    "name": "Bence Jones protein",
    "nonNabh": 47,
    "nabh": 54
  },
  {
    "id": "1455",
    "category": "BIOCHEMISTRY",
    "name": "Serum Uric Acid",
    "nonNabh": 55,
    "nabh": 63
  },
  {
    "id": "1456",
    "category": "BIOCHEMISTRY",
    "name": "Serum Bilirubin total & direct",
    "nonNabh": 80,
    "nabh": 92
  },
  {
    "id": "1457",
    "category": "BIOCHEMISTRY",
    "name": "Serum Iron",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1458",
    "category": "BIOCHEMISTRY",
    "name": "C reactive Protein (CRP)",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1459",
    "category": "BIOCHEMISTRY",
    "name": "C reactive Protein (CRP) Quantitative",
    "nonNabh": 160,
    "nabh": 184
  },
  {
    "id": "1460",
    "category": "BIOCHEMISTRY",
    "name": "Body fluid (CSF/Ascitic Fluid etc.)Sugar, Protein etc.",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1461",
    "category": "BIOCHEMISTRY",
    "name": "Albumin.",
    "nonNabh": 18,
    "nabh": 21
  },
  {
    "id": "1462",
    "category": "BIOCHEMISTRY",
    "name": "Creatinine clearance",
    "nonNabh": 80,
    "nabh": 92
  },
  {
    "id": "1463",
    "category": "BIOCHEMISTRY",
    "name": "Serum Cholesterol",
    "nonNabh": 62,
    "nabh": 71
  },
  {
    "id": "1464",
    "category": "BIOCHEMISTRY",
    "name": "Total Iron Binding Capacity (TIBC)",
    "nonNabh": 80,
    "nabh": 92
  },
  {
    "id": "1465",
    "category": "BIOCHEMISTRY",
    "name": "Glucose (Fasting & PP)",
    "nonNabh": 47,
    "nabh": 54
  },
  {
    "id": "1466",
    "category": "BIOCHEMISTRY",
    "name": "Serum Calcium –Total",
    "nonNabh": 60,
    "nabh": 69
  },
  {
    "id": "1467",
    "category": "BIOCHEMISTRY",
    "name": "Serum Calcium –Ionic",
    "nonNabh": 44,
    "nabh": 51
  },
  {
    "id": "1468",
    "category": "BIOCHEMISTRY",
    "name": "Serum Phosphorus",
    "nonNabh": 60,
    "nabh": 69
  },
  {
    "id": "1469",
    "category": "BIOCHEMISTRY",
    "name": "Total Protein Albumin/Globulin ratio (A/G Ratio)",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1470",
    "category": "BIOCHEMISTRY",
    "name": "Immunoglobulin G (IgG)",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1471",
    "category": "BIOCHEMISTRY",
    "name": "Immunoglobulin M(IgM)",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1472",
    "category": "BIOCHEMISTRY",
    "name": "Immunoglobulin A(IgA)",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1473",
    "category": "BIOCHEMISTRY",
    "name": "Antinuclear antibody (ANA)",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "1474",
    "category": "BIOCHEMISTRY",
    "name": "Anti-double stranded DNA (anti-dsDNA)",
    "nonNabh": 350,
    "nabh": 403
  },
  {
    "id": "1475",
    "category": "BIOCHEMISTRY",
    "name": "Serum glutamic pyruvic transaminase (SGPT) / Alanine Aminotransferase (ALT)",
    "nonNabh": 55,
    "nabh": 63
  },
  {
    "id": "1476",
    "category": "BIOCHEMISTRY",
    "name": "Serum Glutamic oxaloacetic transaminase (SGOT) / Aspartate Aminotransferase (AST)",
    "nonNabh": 55,
    "nabh": 63
  },
  {
    "id": "1477",
    "category": "BIOCHEMISTRY",
    "name": "Serum amylase",
    "nonNabh": 117,
    "nabh": 135
  },
  {
    "id": "1478",
    "category": "BIOCHEMISTRY",
    "name": "Serum Lipase",
    "nonNabh": 130,
    "nabh": 150
  },
  {
    "id": "1479",
    "category": "BIOCHEMISTRY",
    "name": "Serum Lactate",
    "nonNabh": 72,
    "nabh": 83
  },
  {
    "id": "1480",
    "category": "BIOCHEMISTRY",
    "name": "Serum Magnesium",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1481",
    "category": "BIOCHEMISTRY",
    "name": "Serum Sodium",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1482",
    "category": "BIOCHEMISTRY",
    "name": "Serum Potassium",
    "nonNabh": 50,
    "nabh": 58
  },
  {
    "id": "1483",
    "category": "BIOCHEMISTRY",
    "name": "Serum Ammonia",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1484",
    "category": "BIOCHEMISTRY",
    "name": "Anemia Profile",
    "nonNabh": 204,
    "nabh": 240
  },
  {
    "id": "1485",
    "category": "BIOCHEMISTRY",
    "name": "Serum Testosterone",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1486",
    "category": "BIOCHEMISTRY",
    "name": "Imprint Smear From Endoscopy",
    "nonNabh": 240,
    "nabh": 276
  },
  {
    "id": "1487",
    "category": "BIOCHEMISTRY",
    "name": "Triglycerides",
    "nonNabh": 75,
    "nabh": 86
  },
  {
    "id": "1488",
    "category": "BIOCHEMISTRY",
    "name": "Glucose Tolerance Test (GTT)",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1489",
    "category": "BIOCHEMISTRY",
    "name": "Triple Marker.",
    "nonNabh": 800,
    "nabh": 920
  },
  {
    "id": "1490",
    "category": "BIOCHEMISTRY",
    "name": "Creatine Phosphokinase (CPK)/Creatine Kinase (CK)",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1491",
    "category": "BIOCHEMISTRY",
    "name": "Foetal Haemoglobin (HbF)",
    "nonNabh": 85,
    "nabh": 100
  },
  {
    "id": "1492",
    "category": "BIOCHEMISTRY",
    "name": "Prothrombin Time (PT)/ International normalized ratio (INR)",
    "nonNabh": 110,
    "nabh": 127
  },
  {
    "id": "1493",
    "category": "BIOCHEMISTRY",
    "name": "Lactate dehydrogenase (LDH)",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1494",
    "category": "BIOCHEMISTRY",
    "name": "Alkaline Phosphatase",
    "nonNabh": 60,
    "nabh": 69
  },
  {
    "id": "1495",
    "category": "BIOCHEMISTRY",
    "name": "Acid Phosphatase",
    "nonNabh": 78,
    "nabh": 90
  },
  {
    "id": "1496",
    "category": "BIOCHEMISTRY",
    "name": "CPK MB/CK MB",
    "nonNabh": 190,
    "nabh": 219
  },
  {
    "id": "1497",
    "category": "BIOCHEMISTRY",
    "name": "CK MB Mass/CPK MB Mass",
    "nonNabh": 140,
    "nabh": 161
  },
  {
    "id": "1498",
    "category": "BIOCHEMISTRY",
    "name": "Troponin I",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1499",
    "category": "BIOCHEMISTRY",
    "name": "Troponin T",
    "nonNabh": 600,
    "nabh": 690
  },
  {
    "id": "1500",
    "category": "BIOCHEMISTRY",
    "name": "Glucose-6-Phosphate Dehydrogenase (G6PD)",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1501",
    "category": "BIOCHEMISTRY",
    "name": "Lithium.",
    "nonNabh": 130,
    "nabh": 150
  },
  {
    "id": "1502",
    "category": "BIOCHEMISTRY",
    "name": "Dilantin (phenytoin).",
    "nonNabh": 400,
    "nabh": 460
  },
  {
    "id": "1503",
    "category": "BIOCHEMISTRY",
    "name": "Carbamazepine.",
    "nonNabh": 400,
    "nabh": 460
  },
  {
    "id": "1504",
    "category": "BIOCHEMISTRY",
    "name": "Valproic acid.",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "1505",
    "category": "BIOCHEMISTRY",
    "name": "Ferritin (Select CGHS rate code 1517 for approved rate)",
    "nonNabh": 1517,
    "nabh": 1517
  },
  {
    "id": "1506",
    "category": "BIOCHEMISTRY",
    "name": "Blood gas analysis / Arterial Blood Gas (ABG)",
    "nonNabh": 120,
    "nabh": 138
  },
  {
    "id": "1507",
    "category": "BIOCHEMISTRY",
    "name": "Blood gas analysis / Arterial Blood Gas (ABG) with electrolytes",
    "nonNabh": 460,
    "nabh": 529
  },
  {
    "id": "1508",
    "category": "BIOCHEMISTRY",
    "name": "Urine pregnancy test",
    "nonNabh": 65,
    "nabh": 75
  },
  {
    "id": "1509",
    "category": "BIOCHEMISTRY",
    "name": "Tests for Antiphospholipid antibodies syndrome.",
    "nonNabh": 280,
    "nabh": 322
  },
  {
    "id": "1510",
    "category": "BIOCHEMISTRY",
    "name": "Glycosylated Haemoglobin (HbA1c)",
    "nonNabh": 130,
    "nabh": 150
  },
  {
    "id": "1511",
    "category": "BIOCHEMISTRY",
    "name": "Haemoglobin Electrophoresis/ Hb HPLC (Select CGHS rate",
    "nonNabh": 1417,
    "nabh": 1417
  },
  {
    "id": "1512",
    "category": "BIOCHEMISTRY",
    "name": "Kidney Function Test (KFT)",
    "nonNabh": 225,
    "nabh": 259
  },
  {
    "id": "1513",
    "category": "BIOCHEMISTRY",
    "name": "Liver Function Test (LFT)",
    "nonNabh": 225,
    "nabh": 259
  },
  {
    "id": "1514",
    "category": "BIOCHEMISTRY",
    "name": "Lipid Profile. (Total cholesterol, LDL, HDL, Triglycerides)",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "1515",
    "category": "NUTRITIONAL MARKERS",
    "name": "Serum Iron",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1516",
    "category": "NUTRITIONAL MARKERS",
    "name": "Total Iron Binding Capacity (Select CGHS rate code 1464",
    "nonNabh": 1464,
    "nabh": 1464
  },
  {
    "id": "1517",
    "category": "NUTRITIONAL MARKERS",
    "name": "Serum Ferritin",
    "nonNabh": 100,
    "nabh": 115
  },
  {
    "id": "1518",
    "category": "NUTRITIONAL MARKERS",
    "name": "Vitamin B12 assay.",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1519",
    "category": "NUTRITIONAL MARKERS",
    "name": "Folic Acid assay.",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "1520",
    "category": "NUTRITIONAL MARKERS",
    "name": "Extended Lipid Profile. (Total cholesterol, LDL, HDL, Triglycerides Apo A1,Apo B,Lp (a) )",
    "nonNabh": 595,
    "nabh": 684
  },
  {
    "id": "1521",
    "category": "NUTRITIONAL MARKERS",
    "name": "Apolipoprotein A1 (ApoA1)",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "1522",
    "category": "NUTRITIONAL MARKERS",
    "name": "Apolipoprotein B (Apo B)",
    "nonNabh": 199,
    "nabh": 229
  },
  {
    "id": "1523",
    "category": "NUTRITIONAL MARKERS",
    "name": "Lipoprotein A / Lp A",
    "nonNabh": 445,
    "nabh": 512
  },
  {
    "id": "1524",
    "category": "NUTRITIONAL MARKERS",
    "name": "CD 3,4 and 8 counts",
    "nonNabh": 170,
    "nabh": 200
  },
  {
    "id": "1525",
    "category": "NUTRITIONAL MARKERS",
    "name": "CD 3,4 and 8 percentage",
    "nonNabh": 170,
    "nabh": 200
  },
  {
    "id": "1526",
    "category": "NUTRITIONAL MARKERS",
    "name": "Low density lipoprotein (LDL)",
    "nonNabh": 62,
    "nabh": 71
  },
  {
    "id": "1527",
    "category": "NUTRITIONAL MARKERS",
    "name": "Homocysteine.",
    "nonNabh": 400,
    "nabh": 460
  },
  {
    "id": "1528",
    "category": "NUTRITIONAL MARKERS",
    "name": "Haemoglobin (Hb) Electrophoresis/ (Select CGHS rate code 1417 for approved rate)",
    "nonNabh": 1417,
    "nabh": 1417
  },
  {
    "id": "1529",
    "category": "NUTRITIONAL MARKERS",
    "name": "Serum Electrophoresis",
    "nonNabh": 220,
    "nabh": 253
  },
  {
    "id": "1530",
    "category": "NUTRITIONAL MARKERS",
    "name": "Fibrinogen.",
    "nonNabh": 165,
    "nabh": 190
  },
  {
    "id": "1531",
    "category": "NUTRITIONAL MARKERS",
    "name": "Chloride.",
    "nonNabh": 60,
    "nabh": 69
  },
  {
    "id": "1532",
    "category": "NUTRITIONAL MARKERS",
    "name": "Magnesium.",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1533",
    "category": "NUTRITIONAL MARKERS",
    "name": "Gamma-Glutamyl Transpeptidase (GGTP)",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1534",
    "category": "NUTRITIONAL MARKERS",
    "name": "Lipase.",
    "nonNabh": 239,
    "nabh": 275
  },
  {
    "id": "1535",
    "category": "NUTRITIONAL MARKERS",
    "name": "Fructosamine.",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "1536",
    "category": "NUTRITIONAL MARKERS",
    "name": "Beta 2 microglobulin (B2M) /β2 microglobulin",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1537",
    "category": "NUTRITIONAL MARKERS",
    "name": "Catecholamines",
    "nonNabh": 1050,
    "nabh": 1208
  },
  {
    "id": "1538",
    "category": "NUTRITIONAL MARKERS",
    "name": "Creatinine clearance (Select CGHS Rate Code 1462)",
    "nonNabh": 1462,
    "nabh": 1462
  },
  {
    "id": "1539",
    "category": "TUMOR MARKERS",
    "name": "Prostate Specific antigen (PSA)- Total.",
    "nonNabh": 312,
    "nabh": 359
  },
  {
    "id": "1540",
    "category": "TUMOR MARKERS",
    "name": "Prostate-specific antigen (PSA) - Free.",
    "nonNabh": 375,
    "nabh": 431
  },
  {
    "id": "1541",
    "category": "TUMOR MARKERS",
    "name": "Alpha Fetoprotein (AFP)",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "1542",
    "category": "TUMOR MARKERS",
    "name": "Human chorionic gonadotropin (HCG)/ Beta HCG",
    "nonNabh": 289,
    "nabh": 332
  },
  {
    "id": "1543",
    "category": "TUMOR MARKERS",
    "name": "Cancer Antigen 125 (CA 125)",
    "nonNabh": 391,
    "nabh": 450
  },
  {
    "id": "1544",
    "category": "TUMOR MARKERS",
    "name": "Cancer Antigen 19.9 (CA 19.9)",
    "nonNabh": 616,
    "nabh": 708
  },
  {
    "id": "1545",
    "category": "TUMOR MARKERS",
    "name": "Cancer Antigen 15.3 (CA 15.3)",
    "nonNabh": 560,
    "nabh": 644
  },
  {
    "id": "1546",
    "category": "TUMOR MARKERS",
    "name": "Vanillylmandelic Acid (VMA)",
    "nonNabh": 350,
    "nabh": 403
  },
  {
    "id": "1547",
    "category": "TUMOR MARKERS",
    "name": "Calcitonin",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "1548",
    "category": "TUMOR MARKERS",
    "name": "Carcinoembryonic Antigen (CEA)",
    "nonNabh": 340,
    "nabh": 391
  },
  {
    "id": "1549",
    "category": "LABORATORY S OTHERS",
    "name": "Immunofluorescence",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1550",
    "category": "LABORATORY S OTHERS",
    "name": "Direct(Skin and kidney Disease)",
    "nonNabh": 425,
    "nabh": 500
  },
  {
    "id": "1551",
    "category": "LABORATORY S OTHERS",
    "name": "Indirect (antids DNA Anti Smith ANCA)",
    "nonNabh": 425,
    "nabh": 500
  },
  {
    "id": "1552",
    "category": "LABORATORY S OTHERS",
    "name": "Calcidiol / 25-hydroxycholecalciferol / Vitamin D3 assay (Vit D3)",
    "nonNabh": 550,
    "nabh": 633
  },
  {
    "id": "1553",
    "category": "LABORATORY S OTHERS",
    "name": "Serum Protein electrophoresis with immunofixation electrophoresis (IFE)",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "1554",
    "category": "LABORATORY S OTHERS",
    "name": "BETA-2 Microglobulin assay (Select CGHS rate code 1536 for approved rate)",
    "nonNabh": 1536,
    "nabh": 1536
  },
  {
    "id": "1555",
    "category": "LABORATORY S OTHERS",
    "name": "Anti-Cyclic Citrullinated Peptide (Anti CCP)",
    "nonNabh": 450,
    "nabh": 518
  },
  {
    "id": "1556",
    "category": "LABORATORY S OTHERS",
    "name": "Anti-tissue Transglutaminase antibody (Anti TTG Antibody)",
    "nonNabh": 425,
    "nabh": 500
  },
  {
    "id": "1557",
    "category": "HORMONES",
    "name": "Serum Erythropoietin",
    "nonNabh": 425,
    "nabh": 500
  },
  {
    "id": "1558",
    "category": "HORMONES",
    "name": "Adrenocorticotropic Hormone (ACTH)",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "1559",
    "category": "HORMONES",
    "name": "T3, T4, TSH -Thyroid Function Test (TFT)",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "1560",
    "category": "HORMONES",
    "name": "Triiodothyronine- T3",
    "nonNabh": 64,
    "nabh": 75
  },
  {
    "id": "1561",
    "category": "HORMONES",
    "name": "Tetraiodothyronine T4",
    "nonNabh": 64,
    "nabh": 75
  },
  {
    "id": "1562",
    "category": "HORMONES",
    "name": "Thyroid stimulating hormone (TSH)",
    "nonNabh": 90,
    "nabh": 104
  },
  {
    "id": "1563",
    "category": "HORMONES",
    "name": "Luteinizing hormone (LH)",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1564",
    "category": "HORMONES",
    "name": "Follicle stimulating hormone (FSH)",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1565",
    "category": "HORMONES",
    "name": "Prolactin",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1566",
    "category": "HORMONES",
    "name": "Cortisol",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1567",
    "category": "HORMONES",
    "name": "PTH(Parathormone)",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "1568",
    "category": "HORMONES",
    "name": "C-Peptide (C Peptide / Connecting Peptide)",
    "nonNabh": 330,
    "nabh": 380
  },
  {
    "id": "1569",
    "category": "HORMONES",
    "name": "Insulin.",
    "nonNabh": 150,
    "nabh": 173
  },
  {
    "id": "1570",
    "category": "HORMONES",
    "name": "Progesterone.",
    "nonNabh": 225,
    "nabh": 259
  },
  {
    "id": "1571",
    "category": "HORMONES",
    "name": "17 Hydroxyprogesterone (17 OH Progesterone)",
    "nonNabh": 440,
    "nabh": 506
  },
  {
    "id": "1572",
    "category": "HORMONES",
    "name": "Dehydroepiandrosterone sulfate (DHEAS)",
    "nonNabh": 440,
    "nabh": 506
  },
  {
    "id": "1573",
    "category": "HORMONES",
    "name": "Androstenedione",
    "nonNabh": 600,
    "nabh": 690
  },
  {
    "id": "1574",
    "category": "HORMONES",
    "name": "Growth Hormone.",
    "nonNabh": 340,
    "nabh": 391
  },
  {
    "id": "1575",
    "category": "PATHOLOGY",
    "name": "Thyroid peroxidase antibody (TPO)",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "1576",
    "category": "PATHOLOGY",
    "name": "Thyroglobulin.",
    "nonNabh": 300,
    "nabh": 345
  },
  {
    "id": "1577",
    "category": "PATHOLOGY",
    "name": "Hydatic Serology.",
    "nonNabh": 318,
    "nabh": 374
  },
  {
    "id": "1578",
    "category": "PATHOLOGY",
    "name": "Anti Sperm Antibodies.",
    "nonNabh": 380,
    "nabh": 437
  },
  {
    "id": "1579",
    "category": "PATHOLOGY",
    "name": "Hepatitis B Virus (HBV) DNA Qualitative",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "1580",
    "category": "PATHOLOGY",
    "name": "Hepatitis B Virus (HBV) DNA Quantitative.",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "1581",
    "category": "PATHOLOGY",
    "name": "Hepatitis C Virus (HCV) RNA Qualitative.",
    "nonNabh": 1691,
    "nabh": 1945
  },
  {
    "id": "1582",
    "category": "PATHOLOGY",
    "name": "Human papillomaviruse (HPV) Serology",
    "nonNabh": 218,
    "nabh": 251
  },
  {
    "id": "1583",
    "category": "PATHOLOGY",
    "name": "Rota Virus serology",
    "nonNabh": 130,
    "nabh": 150
  },
  {
    "id": "1584",
    "category": "PATHOLOGY",
    "name": "PCR for Tuberculosis (TB)",
    "nonNabh": 900,
    "nabh": 1035
  },
  {
    "id": "1585",
    "category": "PATHOLOGY",
    "name": "PCR for Human immunodeficiency virus (HIV)",
    "nonNabh": 600,
    "nabh": 690
  },
  {
    "id": "1586",
    "category": "PATHOLOGY",
    "name": "Chlamydae antigen",
    "nonNabh": 850,
    "nabh": 978
  },
  {
    "id": "1587",
    "category": "PATHOLOGY",
    "name": "Chlamydae antibody",
    "nonNabh": 238,
    "nabh": 280
  },
  {
    "id": "1588",
    "category": "PATHOLOGY",
    "name": "Brucella serology",
    "nonNabh": 230,
    "nabh": 265
  },
  {
    "id": "1589",
    "category": "PATHOLOGY",
    "name": "Influenza A serology",
    "nonNabh": 943,
    "nabh": 1084
  },
  {
    "id": "1590",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG Obstetrics for Anomalies scan",
    "nonNabh": 770,
    "nabh": 886
  },
  {
    "id": "1591",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG Whole Abdomen / KUB including post-void residual (PVR)",
    "nonNabh": 323,
    "nabh": 380
  },
  {
    "id": "1592",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Pelvic USG (gynae, infertility, prostate with post- void residual (PVR) etc.",
    "nonNabh": 255,
    "nabh": 300
  },
  {
    "id": "1593",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG Small parts ( scrotum, thyroid , parathyroid etc)",
    "nonNabh": 349,
    "nabh": 410
  },
  {
    "id": "1594",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG Neonatal head (Transfontanellar)",
    "nonNabh": 425,
    "nabh": 489
  },
  {
    "id": "1595",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG Neonatal spine",
    "nonNabh": 500,
    "nabh": 575
  },
  {
    "id": "1596",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG Contrast enhanced",
    "nonNabh": 900,
    "nabh": 1035
  },
  {
    "id": "1597",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG Breast",
    "nonNabh": 349,
    "nabh": 410
  },
  {
    "id": "1598",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG Hysterosalpingography (HSG)",
    "nonNabh": 255,
    "nabh": 300
  },
  {
    "id": "1599",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Carotid Doppler",
    "nonNabh": 850,
    "nabh": 1000
  },
  {
    "id": "1600",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Arterial Colour Doppler",
    "nonNabh": 706,
    "nabh": 830
  },
  {
    "id": "1601",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Venous Colour Doppler",
    "nonNabh": 706,
    "nabh": 830
  },
  {
    "id": "1602",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Colour Doppler, renal arteries/any other organ",
    "nonNabh": 800,
    "nabh": 920
  },
  {
    "id": "1603",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG guided intervention- FNAC",
    "nonNabh": 490,
    "nabh": 564
  },
  {
    "id": "1604",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG guided intervention - biopsy",
    "nonNabh": 720,
    "nabh": 828
  },
  {
    "id": "1605",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "USG guided intervention - nephrostomy",
    "nonNabh": 800,
    "nabh": 920
  },
  {
    "id": "1606",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Abdomen AP Supine or Erect (One film)",
    "nonNabh": 128,
    "nabh": 150
  },
  {
    "id": "1607",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Abdomen Lateral view (one film)",
    "nonNabh": 128,
    "nabh": 150
  },
  {
    "id": "1608",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Chest PA /AP/ Oblique view (one film)",
    "nonNabh": 60,
    "nabh": 70
  },
  {
    "id": "1609",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Chest Lateral (one film)",
    "nonNabh": 60,
    "nabh": 70
  },
  {
    "id": "1610",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X ray Mastoids: Towne view, oblique views (3 films)",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1611",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Extremities (Hand/Leg/Feet/Finger/Toe) bones & Joints (Hip/ Knee/Ankle / shoulder/ Wrist / fingers",
    "nonNabh": 255,
    "nabh": 288
  },
  {
    "id": "1612",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Pelvis AP (one film)",
    "nonNabh": 110,
    "nabh": 127
  },
  {
    "id": "1613",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Temporomandibular (TM) Joints (one film)",
    "nonNabh": 110,
    "nabh": 127
  },
  {
    "id": "1614",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Abdomen & Pelvis for KUB",
    "nonNabh": 128,
    "nabh": 150
  },
  {
    "id": "1615",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Skull AP & Lateral (2 films)",
    "nonNabh": 255,
    "nabh": 300
  },
  {
    "id": "1616",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Spine AP & Lateral (2 films)",
    "nonNabh": 250,
    "nabh": 288
  },
  {
    "id": "1617",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X Ray Paranasal sinuses (PNS) view (1 film)",
    "nonNabh": 110,
    "nabh": 127
  },
  {
    "id": "1635",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "X ray Mammography",
    "nonNabh": 315,
    "nabh": 370
  },
  {
    "id": "1636",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Mammography",
    "nonNabh": 2550,
    "nabh": 3000
  },
  {
    "id": "1637",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Head-Without Contrast",
    "nonNabh": 900,
    "nabh": 1035
  },
  {
    "id": "1638",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Head- with Contrast -including CT angiography",
    "nonNabh": 1350,
    "nabh": 1553
  },
  {
    "id": "1639",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Chest - without contrast (for lungs)",
    "nonNabh": 1700,
    "nabh": 2000
  },
  {
    "id": "1640",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Lower Abdomen (incl. Pelvis) With Contrast",
    "nonNabh": 1700,
    "nabh": 1955
  },
  {
    "id": "1641",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Lower Abdomen (Incl. Pelvis) Without Contrast",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "1642",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Whole Abdomen Without Contrast",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "1643",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Whole Abdomen With Contrast",
    "nonNabh": 4500,
    "nabh": 5175
  },
  {
    "id": "1644",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Triple Phase CT abdomen",
    "nonNabh": 4500,
    "nabh": 5175
  },
  {
    "id": "1645",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan angiography abdomen/ Chest",
    "nonNabh": 4500,
    "nabh": 5175
  },
  {
    "id": "1646",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Enteroclysis",
    "nonNabh": 6000,
    "nabh": 6900
  },
  {
    "id": "1647",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Neck – Without Contrast",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "1648",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Neck – With Contrast",
    "nonNabh": 1870,
    "nabh": 2200
  },
  {
    "id": "1649",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Orbits - Without Contrast",
    "nonNabh": 1190,
    "nabh": 1400
  },
  {
    "id": "1650",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Orbits - With Contrast",
    "nonNabh": 1615,
    "nabh": 1900
  },
  {
    "id": "1651",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan of Para Nasal Sinuses (CT PNS)- Without Contrast",
    "nonNabh": 900,
    "nabh": 1035
  },
  {
    "id": "1652",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan of Para Nasal Sinuses (CT PNS)- With Contrast",
    "nonNabh": 1600,
    "nabh": 1840
  },
  {
    "id": "1653",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Spine (Cervical, Dorsal, Lumbar, Sacral)–without Contrast",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "1654",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Temporal bone – without contrast",
    "nonNabh": 893,
    "nabh": 1050
  },
  {
    "id": "1655",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan- Dental",
    "nonNabh": 1275,
    "nabh": 1500
  },
  {
    "id": "1656",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Limbs -Without Contrast",
    "nonNabh": 1700,
    "nabh": 2000
  },
  {
    "id": "1657",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Scan Limbs -With Contrast including CT angiography",
    "nonNabh": 2253,
    "nabh": 2650
  },
  {
    "id": "1658",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Guided intervention –FNAC",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "1659",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Guided Trucut Biopsy",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "1660",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "CT Guided intervention -percutaneous catheter drainage/tube placement",
    "nonNabh": 1305,
    "nabh": 1535
  },
  {
    "id": "1661",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Head – Without Contrast",
    "nonNabh": 1998,
    "nabh": 2350
  },
  {
    "id": "1662",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Head – With Contrast",
    "nonNabh": 2848,
    "nabh": 3350
  },
  {
    "id": "1663",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Orbits – Without Contrast",
    "nonNabh": 1445,
    "nabh": 1700
  },
  {
    "id": "1664",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Orbits – With Contrast",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "1665",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Nasopharynx and PNS – Without Contrast",
    "nonNabh": 2450,
    "nabh": 2818
  },
  {
    "id": "1666",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Nasopharynx and PNS – With Contrast",
    "nonNabh": 3500,
    "nabh": 4025
  },
  {
    "id": "1667",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MR for Salivary Glands with Sialography",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "1668",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Neck - Without Contrast",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "1669",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Neck- with contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1670",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Shoulder – Without contrast",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "1671",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Shoulder – With contrast",
    "nonNabh": 2600,
    "nabh": 3000
  },
  {
    "id": "1672",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI shoulder both Joints - Without contrast",
    "nonNabh": 3000,
    "nabh": 3450
  },
  {
    "id": "1673",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Shoulder both joints – With contrast",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1674",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Wrist Single joint - Without contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1675",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Wrist Single joint - With contrast",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1676",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Wrist both joints - Without contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1677",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Wrist Both joints - With contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1678",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI knee Single joint - Without contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1679",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI knee Single joint - With contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1680",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI knee both joints - Without contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1681",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI knee both joints - With contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1682",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Ankle Single joint - Without contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1683",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Ankle single joint - With contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1684",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Ankle both joints - With contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1685",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Ankle both joints - Without contrast",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "1686",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Hip - With contrast",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "1687",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Hip – without contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1688",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Pelvis – Without Contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1689",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Pelvis – with contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1690",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Extremities - With contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1691",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Extremities - Without contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1692",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Temporomandibular – B/L - With contrast",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1693",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Temporomandibular – B/L - Without contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1694",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MR Temporal Bone/ Inner ear with contrast",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1695",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MR Temporal Bone/ Inner ear without contrast",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "1696",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Abdomen – Without Contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1697",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Abdomen – With Contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1698",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Breast - With Contrast",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "1699",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Breast - Without Contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1700",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Spine Screening - Without Contrast",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "1701",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Chest – Without Contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1702",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Chest – With Contrast",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1703",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Cervical/Cervico Dorsal Spine – Without Contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1704",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Cervical/ Cervico Dorsal Spine – With Contrast",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1705",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Dorsal/ Dorso Lumbar Spine - Without Contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1706",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Dorsal/ Dorso Lumbar Spine – With Contrast",
    "nonNabh": 4000,
    "nabh": 4600
  },
  {
    "id": "1707",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Lumbar/ Lumbo-Sacral Spine – Without Contrast",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1708",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Lumbar/ Lumbo-Sacral Spine – With Contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1709",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Whole body MRI (For oncological workup)",
    "nonNabh": 5100,
    "nabh": 6000
  },
  {
    "id": "1710",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MR cholecysto-pancreatography (MRCP)",
    "nonNabh": 5500,
    "nabh": 6325
  },
  {
    "id": "1711",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MRI Angiography - with contrast",
    "nonNabh": 5000,
    "nabh": 5750
  },
  {
    "id": "1712",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "MR Enteroclysis",
    "nonNabh": 2125,
    "nabh": 2500
  },
  {
    "id": "1713",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Dexa Scan Bone Densitometry - Two sites",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "1714",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Dexa Scan Bone Densitometry - Three sites (Spine, Hip &extremity)",
    "nonNabh": 2000,
    "nabh": 2300
  },
  {
    "id": "1715",
    "category": "IMAGING (USG/X-RAY/CT/MRI)",
    "name": "Dexa Scan Bone Densitometry Whole body",
    "nonNabh": 2450,
    "nabh": 2818
  },
  {
    "id": "1716",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Electroencephalogram (EEG)/ Video EEG",
    "nonNabh": 298,
    "nabh": 350
  },
  {
    "id": "1717",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Electromyography (EMG)",
    "nonNabh": 638,
    "nabh": 750
  },
  {
    "id": "1718",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Nerve conduction velocity (NCV), -two or more limbs",
    "nonNabh": 638,
    "nabh": 750
  },
  {
    "id": "1719",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Repititive nerve stimulation (RNS)-Decremental response (before and after neostigmine)",
    "nonNabh": 595,
    "nabh": 700
  },
  {
    "id": "1720",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Repetitive nerve stimulation (RNS)-Incremental response",
    "nonNabh": 595,
    "nabh": 700
  },
  {
    "id": "1721",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Somatosensory evoked potentials (SSEP)",
    "nonNabh": 638,
    "nabh": 750
  },
  {
    "id": "1722",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Polysomnography (PSG) / Sleep study",
    "nonNabh": 638,
    "nabh": 750
  },
  {
    "id": "1723",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Brachial plexus study",
    "nonNabh": 638,
    "nabh": 750
  },
  {
    "id": "1724",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Muscle biopsy",
    "nonNabh": 383,
    "nabh": 450
  },
  {
    "id": "1725",
    "category": "S NEUROLOGICAL  AND PROCEDURES",
    "name": "Acetylcholine receptor (AChR) antibody titre",
    "nonNabh": 1848,
    "nabh": 2125
  },
  {
    "id": "1736",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Basic studies including cell count, protein, sugar, gram stain,India Ink preparation and smear for AFB",
    "nonNabh": 240,
    "nabh": 276
  },
  {
    "id": "1737",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Special studies",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "1738",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "PCR for tuberculosis/ Herpes simplex",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "1739",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Bacterial culture and sensitivity",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "1740",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Mycobacterial culture and sensitivity",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "1741",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Fungal culture",
    "nonNabh": 128,
    "nabh": 150
  },
  {
    "id": "1742",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Malignant cells (Cytology)",
    "nonNabh": 64,
    "nabh": 75
  },
  {
    "id": "1743",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Anti measles antibody titre (with serum antibody titre)",
    "nonNabh": 890,
    "nabh": 1024
  },
  {
    "id": "1744",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Viral culture",
    "nonNabh": 255,
    "nabh": 300
  },
  {
    "id": "1745",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Antibody titre (Herpes simplex, cytomegalo virus, flavivirus, zoster varicella virus)",
    "nonNabh": 760,
    "nabh": 874
  },
  {
    "id": "1746",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Oligoclonal bands (OCBs)",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "1747",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Myelin basic protein (MBP)",
    "nonNabh": 1871,
    "nabh": 2125
  },
  {
    "id": "1748",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Lactate (Select CGHS rate code 1479 for approved rate)",
    "nonNabh": 1479,
    "nabh": 1479
  },
  {
    "id": "1749",
    "category": "LABORATORY INVESTIGATINS PROCEDURE CEREBROSPINAL FLUID (CSF) / ALL BODY FLUIDS (BLOOD/URINE/ASCITES/",
    "name": "Cryptococcal antigen",
    "nonNabh": 850,
    "nabh": 1000
  },
  {
    "id": "1750",
    "category": "ENT",
    "name": "D xylase test",
    "nonNabh": 850,
    "nabh": 1000
  },
  {
    "id": "1751",
    "category": "ENT",
    "name": "Faecal / Fecal fat test/ fecal chymotrypsin/ fecal elastase (select CGHS rate code 1335 approved at rate)",
    "nonNabh": 1335,
    "nabh": 1335
  },
  {
    "id": "1752",
    "category": "ENT",
    "name": "Breath tests (Select CGHS rate code 1336 for approved rate)",
    "nonNabh": 1336,
    "nabh": 1336
  },
  {
    "id": "1753",
    "category": "ENT",
    "name": "H pylori serology for Coeliac disease /Celiac disease",
    "nonNabh": 500,
    "nabh": 725
  },
  {
    "id": "1754",
    "category": "ENT",
    "name": "HBV genotyping",
    "nonNabh": 2500,
    "nabh": 2875
  },
  {
    "id": "1755",
    "category": "ENT",
    "name": "HCV genotyping",
    "nonNabh": 4875,
    "nabh": 5606
  },
  {
    "id": "1756",
    "category": "ENDOCRINOLOGY",
    "name": "Urinary vanillylmandelic acid (VMA)",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "1757",
    "category": "ENDOCRINOLOGY",
    "name": "Urinary metanephrine/Normetanephrine",
    "nonNabh": 1138,
    "nabh": 1309
  },
  {
    "id": "1758",
    "category": "ENDOCRINOLOGY",
    "name": "Urinary free catecholamine",
    "nonNabh": 1690,
    "nabh": 1944
  },
  {
    "id": "1759",
    "category": "ENDOCRINOLOGY",
    "name": "Serum catecholamine",
    "nonNabh": 3400,
    "nabh": 3910
  },
  {
    "id": "1760",
    "category": "ENDOCRINOLOGY",
    "name": "Serum aldosterone",
    "nonNabh": 1125,
    "nabh": 1294
  },
  {
    "id": "1761",
    "category": "ENDOCRINOLOGY",
    "name": "24 Hr urinary aldosterone",
    "nonNabh": 920,
    "nabh": 1058
  },
  {
    "id": "1762",
    "category": "ENDOCRINOLOGY",
    "name": "Plasma renin activity",
    "nonNabh": 1000,
    "nabh": 1150
  },
  {
    "id": "1763",
    "category": "ENDOCRINOLOGY",
    "name": "Serum aldosterone/renin ratio",
    "nonNabh": 1200,
    "nabh": 1380
  },
  {
    "id": "1764",
    "category": "ENDOCRINOLOGY",
    "name": "Osmolality urine",
    "nonNabh": 128,
    "nabh": 150
  },
  {
    "id": "1765",
    "category": "ENDOCRINOLOGY",
    "name": "Osmolality serum",
    "nonNabh": 128,
    "nabh": 150
  },
  {
    "id": "1766",
    "category": "ENDOCRINOLOGY",
    "name": "Urinary sodium",
    "nonNabh": 80,
    "nabh": 94
  },
  {
    "id": "1767",
    "category": "ENDOCRINOLOGY",
    "name": "Urinary Chloride",
    "nonNabh": 43,
    "nabh": 50
  },
  {
    "id": "1768",
    "category": "ENDOCRINOLOGY",
    "name": "Urinary potassium",
    "nonNabh": 80,
    "nabh": 94
  },
  {
    "id": "1769",
    "category": "ENDOCRINOLOGY",
    "name": "Urinary calcium",
    "nonNabh": 80,
    "nabh": 94
  },
  {
    "id": "1770",
    "category": "ENDOCRINOLOGY",
    "name": "Thyroid binding globulin",
    "nonNabh": 510,
    "nabh": 600
  },
  {
    "id": "1771",
    "category": "ENDOCRINOLOGY",
    "name": "24 hour urinary free cortisol",
    "nonNabh": 200,
    "nabh": 230
  },
  {
    "id": "1772",
    "category": "ENDOCRINOLOGY",
    "name": "Islet cell antibody",
    "nonNabh": 750,
    "nabh": 863
  },
  {
    "id": "1773",
    "category": "ENDOCRINOLOGY",
    "name": "Glutamic Acid Decarboxylase Autoantibodies test (GAD antibodies)",
    "nonNabh": 1330,
    "nabh": 1530
  },
  {
    "id": "1774",
    "category": "ENDOCRINOLOGY",
    "name": "Insulin associated antibody",
    "nonNabh": 449,
    "nabh": 516
  },
  {
    "id": "1775",
    "category": "ENDOCRINOLOGY",
    "name": "Insulin-like growth factor-1 (IGF-1)",
    "nonNabh": 1500,
    "nabh": 1725
  },
  {
    "id": "1776",
    "category": "ENDOCRINOLOGY",
    "name": "Insulin-like growth factor binding protein 3 (IGF- BP3)",
    "nonNabh": 1650,
    "nabh": 1898
  },
  {
    "id": "1777",
    "category": "ENDOCRINOLOGY",
    "name": "Sex hormone binding globulin",
    "nonNabh": 1333,
    "nabh": 1533
  },
  {
    "id": "1778",
    "category": "ENDOCRINOLOGY",
    "name": "USG guided FNAC thyroid gland",
    "nonNabh": 387,
    "nabh": 455
  },
  {
    "id": "1779",
    "category": "ENDOCRINOLOGY",
    "name": "Estradiol (E2)",
    "nonNabh": 208,
    "nabh": 245
  },
  {
    "id": "1780",
    "category": "ENDOCRINOLOGY",
    "name": "Thyroglobulin antibody",
    "nonNabh": 587,
    "nabh": 675
  },
  {
    "id": "1796",
    "category": "CGHS /  LIST",
    "name": "Anti –Smooth Muscle Antibody Test (ASMA)",
    "nonNabh": 1241,
    "nabh": 1460
  },
  {
    "id": "1797",
    "category": "CGHS /  LIST",
    "name": "C ANCA-IFA",
    "nonNabh": 1275,
    "nabh": 1500
  },
  {
    "id": "1798",
    "category": "CGHS /  LIST",
    "name": "P ANCA-IFA",
    "nonNabh": 1275,
    "nabh": 1500
  },
  {
    "id": "1799",
    "category": "CGHS /  LIST",
    "name": "Angiotensin converting enzyme (ACE)",
    "nonNabh": 850,
    "nabh": 1000
  },
  {
    "id": "1800",
    "category": "CGHS /  LIST",
    "name": "Endo bronchial Ultrasound (EBUS) -Trans bronchial needle aspiration (TBNA) -Using New Needle",
    "nonNabh": 15614,
    "nabh": 18370
  },
  {
    "id": "1801",
    "category": "CGHS /  LIST",
    "name": "Extractable Nuclear Antigens (ENA) - Quantitative",
    "nonNabh": 4250,
    "nabh": 4600
  },
  {
    "id": "1802",
    "category": "CGHS /  LIST",
    "name": "Chromogranin A",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "1803",
    "category": "CGHS /  LIST",
    "name": "Faecal calprotectin (fecal calprotectin)",
    "nonNabh": 2320,
    "nabh": 2730
  },
  {
    "id": "1804",
    "category": "CGHS /  LIST",
    "name": "C3-COMPLEMENT",
    "nonNabh": 552,
    "nabh": 650
  },
  {
    "id": "1805",
    "category": "CGHS /  LIST",
    "name": "C4-COMPLEMENT",
    "nonNabh": 552,
    "nabh": 650
  },
  {
    "id": "1806",
    "category": "CGHS /  LIST",
    "name": "Genexpert Test",
    "nonNabh": 880,
    "nabh": 1035
  },
  {
    "id": "1807",
    "category": "CGHS /  LIST",
    "name": "DJ stent removal",
    "nonNabh": 7395,
    "nabh": 8700
  },
  {
    "id": "1808",
    "category": "CGHS /  LIST",
    "name": "Pulmonary Function Test (PFT) / (Spirometry with Diffusing Capacity of the Lungs for Carbon monoxide (DLCO)",
    "nonNabh": 425,
    "nabh": 500
  },
  {
    "id": "1809",
    "category": "CGHS /  LIST",
    "name": "EUS (Endoscopic Ultrasound) guided FNAC (Using New Needle)",
    "nonNabh": 12750,
    "nabh": 15000
  },
  {
    "id": "1810",
    "category": "CGHS /  LIST",
    "name": "CT Urography",
    "nonNabh": 3825,
    "nabh": 4500
  },
  {
    "id": "1811",
    "category": "CGHS /  LIST",
    "name": "Video Laryngoscopy",
    "nonNabh": 5100,
    "nabh": 6000
  },
  {
    "id": "1812",
    "category": "CGHS /  LIST",
    "name": "CT Angio-Neck Vessels",
    "nonNabh": 5100,
    "nabh": 6000
  },
  {
    "id": "1813",
    "category": "CGHS /  LIST",
    "name": "H1N1 (RT-PCR)",
    "nonNabh": 921,
    "nabh": 1084
  },
  {
    "id": "1814",
    "category": "CGHS /  LIST",
    "name": "Erythropoietin Level (Select CGHS rate code 1557 for approved rate)",
    "nonNabh": 1557,
    "nabh": 1557
  },
  {
    "id": "1815",
    "category": "CGHS /  LIST",
    "name": "Anti HEV IgM",
    "nonNabh": 850,
    "nabh": 1000
  },
  {
    "id": "1816",
    "category": "CGHS /  LIST",
    "name": "Anti HAV IgM",
    "nonNabh": 637,
    "nabh": 750
  },
  {
    "id": "1817",
    "category": "CGHS /  LIST",
    "name": "HBsAg Quantitative",
    "nonNabh": 552,
    "nabh": 650
  },
  {
    "id": "1818",
    "category": "CGHS /  LIST",
    "name": "Typhidot IgM",
    "nonNabh": 340,
    "nabh": 400
  },
  {
    "id": "1819",
    "category": "CGHS /  LIST",
    "name": "Hepatitis B Core Antibody (HBcAb) Level (Hepatitis B Core IgM Antibody)",
    "nonNabh": 408,
    "nabh": 480
  },
  {
    "id": "1820",
    "category": "CGHS /  LIST",
    "name": "Hepatitis B surface antibody (anti HBs)",
    "nonNabh": 552,
    "nabh": 650
  },
  {
    "id": "1821",
    "category": "CGHS _ INVE1",
    "name": "Free Triiodothyronine (FT3)",
    "nonNabh": 106,
    "nabh": 125
  },
  {
    "id": "1822",
    "category": "CGHS _ INVE1",
    "name": "Free Thyroxine (FT4)",
    "nonNabh": 106,
    "nabh": 125
  },
  {
    "id": "1823",
    "category": "CGHS _ INVE1",
    "name": "Widal Test",
    "nonNabh": 60,
    "nabh": 70
  },
  {
    "id": "1824",
    "category": "CGHS _ INVE1",
    "name": "Dengue Serology",
    "nonNabh": 510,
    "nabh": 600
  },
  {
    "id": "1825",
    "category": "CGHS _ INVE1",
    "name": "Blood component charges - Whole Blood per Unit",
    "nonNabh": 1450,
    "nabh": 1450
  },
  {
    "id": "1826",
    "category": "CGHS _ INVE1",
    "name": "Blood component charges - Packed Red Cell per Unit",
    "nonNabh": 1450,
    "nabh": 1450
  },
  {
    "id": "1827",
    "category": "CGHS _ INVE1",
    "name": "Blood component charges - Fresh Frozen Plasma",
    "nonNabh": 400,
    "nabh": 400
  },
  {
    "id": "1828",
    "category": "CGHS _ INVE1",
    "name": "Platelet Concentrate- Random Donor Platelet (RDP)",
    "nonNabh": 400,
    "nabh": 400
  },
  {
    "id": "1829",
    "category": "CGHS _ INVE1",
    "name": "Blood component charges - Cryoprecipitate",
    "nonNabh": 200,
    "nabh": 200
  },
  {
    "id": "1830",
    "category": "CGHS _ INVE1",
    "name": "Platelet Concentrate – Single Donor Platelet (SDP)- Apheresis per unit",
    "nonNabh": 11000,
    "nabh": 11000
  },
  {
    "id": "1831",
    "category": "CGHS _ INVE1",
    "name": "Annual Health Check-up, of CCS Group A Officer of above 40 years of age / Pensioner primary card holder 75 years of age and above–Male,",
    "nonNabh": 2000,
    "nabh": 2000
  },
  {
    "id": "1832",
    "category": "CGHS _ INVE1",
    "name": "Annual Health Check up - CCS Group A Officer of above 40 years of age / Pensioner primary card holder 75 years of age and above - Female",
    "nonNabh": 2200,
    "nabh": 2200
  },
  {
    "id": "1833",
    "category": "CGHS _ INVE2",
    "name": "Interleukin 6 (IL6/ IL 6)",
    "nonNabh": 1360,
    "nabh": 1600
  },
  {
    "id": "1834",
    "category": "CGHS _ INVE2",
    "name": "High resolution computed Tomography (HRCT Chest)",
    "nonNabh": 1700,
    "nabh": 2000
  },
  {
    "id": "1835",
    "category": "CGHS _ INVE2",
    "name": "Fluid air exchange (per eye)",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "1836",
    "category": "CGHS _ INVE2",
    "name": "C3F8 GAS Injection (per eye)",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "1837",
    "category": "CGHS _ INVE2",
    "name": "Diurnal variation of IOP (per eye)",
    "nonNabh": 1275,
    "nabh": 1500
  },
  {
    "id": "1838",
    "category": "CGHS _ INVE2",
    "name": "Silicone oil injection (per eye)",
    "nonNabh": 4250,
    "nabh": 5000
  },
  {
    "id": "1839",
    "category": "CGHS _ INVE2",
    "name": "Epiretinal Membrane (ERM) Peeling (per eye)",
    "nonNabh": 5950,
    "nabh": 7000
  },
  {
    "id": "1840",
    "category": "CGHS _ INVE2",
    "name": "Epiretinal Membrane (ERM) Removal (per eye)",
    "nonNabh": 2550,
    "nabh": 3000
  },
  {
    "id": "1841",
    "category": "CGHS _ INVE2",
    "name": "Internal limiting membrane (ILM) peeling (per eye)",
    "nonNabh": 2550,
    "nabh": 3000
  },
  {
    "id": "1842",
    "category": "CGHS _ INVE2",
    "name": "Punctoplasty (per eye)",
    "nonNabh": 5525,
    "nabh": 6500
  },
  {
    "id": "1843",
    "category": "CGHS _ INVE2",
    "name": "Punctal plug(Collagen/silicone) (per eye)",
    "nonNabh": 3400,
    "nabh": 4000
  },
  {
    "id": "1844",
    "category": "CGHS _ INVE2",
    "name": "Laser Trabeculoplasty Gonioplasty (both eyes)",
    "nonNabh": 13600,
    "nabh": 16000
  },
  {
    "id": "1845",
    "category": "CGHS _ INVE2",
    "name": "Eye laser pulse therapy (per eye)",
    "nonNabh": 2975,
    "nabh": 3500
  },
  {
    "id": "1846",
    "category": "CGHS _ INVE2",
    "name": "Glaucoma valve/Glaucoma Ahmed valve",
    "nonNabh": 12750,
    "nabh": 15000
  },
  {
    "id": "1847",
    "category": "CGHS _ INVE2",
    "name": "Malyugin Ring",
    "nonNabh": 8500,
    "nabh": 10000
  },
  {
    "id": "1848",
    "category": "CGHS _ INVE2",
    "name": "Globe exploration (eye surgery)",
    "nonNabh": 8500,
    "nabh": 10000
  },
  {
    "id": "1849",
    "category": "CGHS _ INVE2",
    "name": "Scleral Fixation Tissue glue",
    "nonNabh": 7140,
    "nabh": 8400
  },
  {
    "id": "1850",
    "category": "CGHS _ INVE2",
    "name": "Fibro optic Nasal Endoscopy",
    "nonNabh": 1955,
    "nabh": 2300
  },
  {
    "id": "1851",
    "category": "CGHS _ INVE2",
    "name": "Video Stroboscopy",
    "nonNabh": 4675,
    "nabh": 5500
  },
  {
    "id": "1852",
    "category": "CGHS _ INVE2",
    "name": "Video Bronchoscopy with BAL",
    "nonNabh": 8500,
    "nabh": 10000
  },
  {
    "id": "1853",
    "category": "CGHS _ INVE2",
    "name": "Sleep deprived EEG (Rate shall be the same CGHS rate of EEG/Video EEG) (Select CGHS rate Code 1716 for approved rate)",
    "nonNabh": 1716,
    "nabh": 1716
  }
];

// List of common procedure IDs to show on the welcome screen
const COMMON_PROCEDURE_IDS = ["1", "2", "3", "4", "11", "12", "20", "120", "134", "135", "154", "156", "386", "390", "1596", "1782"];

let rates = [];
let selectedCategory = 'ALL';
let searchQuery = '';
let displayLimit = 30;

// DOM Elements
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categorySelect = document.getElementById('category-select');
const rateListContainer = document.getElementById('rate-list');
const syncBtn = document.getElementById('sync-btn');
const syncText = document.getElementById('sync-text');
const syncIcon = document.getElementById('sync-icon');
const connectionStatus = document.getElementById('connection-status');
const statusText = document.getElementById('status-text');
const statusDot = document.getElementById('status-dot');
const themeToggle = document.getElementById('theme-toggle');
const themeIconLight = document.getElementById('theme-icon-light');
const themeIconDark = document.getElementById('theme-icon-dark');
const statsTotal = document.getElementById('stats-total');
const statsFiltered = document.getElementById('stats-filtered');
const statsCategory = document.getElementById('stats-category');

// Initialize PWA
window.addEventListener('DOMContentLoaded', () => {
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('[PWA] Service Worker registered successfully', reg.scope))
      .catch(err => console.error('[PWA] Service Worker registration failed', err));
  }

  // Set up connection monitoring
  updateConnectionStatus();
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);

  // Initialize Theme
  initTheme();

  // Load Database
  loadDatabase();

  // Populate Category Dropdown Options
  renderCategoryDropdown();

  // Set Event Listeners
  searchInput.addEventListener('input', handleSearchInput);
  clearSearchBtn.addEventListener('click', clearSearch);
  categorySelect.addEventListener('change', handleCategorySelectChange);
  syncBtn.addEventListener('click', manualSync);
  themeToggle.addEventListener('click', toggleTheme);

  // Initial Render
  filterAndRender();
});

// Theme Management
function initTheme() {
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    themeIconLight.classList.remove('hidden');
    themeIconDark.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    themeIconLight.classList.add('hidden');
    themeIconDark.classList.remove('hidden');
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeIconLight.classList.add('hidden');
    themeIconDark.classList.remove('hidden');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeIconLight.classList.remove('hidden');
    themeIconDark.classList.add('hidden');
  }
}

// Database Management
function loadDatabase() {
  const cached = localStorage.getItem('cghs_rates_db');
  if (cached) {
    try {
      rates = JSON.parse(cached);
      console.log("Loaded " + rates.length + " rates from localStorage cache.");
      return;
    } catch (e) {
      console.error('Failed to parse cached database. Loading initial bundle.', e);
    }
  }
  rates = INITIAL_RATES;
  console.log("Loaded " + rates.length + " rates from initial bundled database.");
}

// Update Offline/Online badge
function updateConnectionStatus() {
  const isOnline = navigator.onLine;
  if (isOnline) {
    statusText.textContent = 'Synced';
    statusDot.className = 'w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]';
    connectionStatus.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 border border-emerald-500/20';
    syncBtn.removeAttribute('disabled');
    syncBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  } else {
    statusText.textContent = 'Offline (cached)';
    statusDot.className = 'w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]';
    connectionStatus.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 dark:bg-amber-500/20 border border-amber-500/20';
    syncBtn.setAttribute('disabled', 'true');
    syncBtn.classList.add('opacity-50', 'cursor-not-allowed');
  }
}

// Manual Sync Action
async function manualSync() {
  if (!navigator.onLine) return;
  
  // Show Loading state
  syncText.textContent = 'Syncing...';
  syncIcon.classList.add('animate-spin');
  syncBtn.setAttribute('disabled', 'true');
  
  try {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/1zRqNdvPbz1UcVFUXbn6iozB0Bb8o0M6kNl3sVZlxba0/export?format=csv';
    const response = await fetch(csvUrl);
    if (!response.ok) throw new Error("HTTP error! status: " + response.status);
    const csvText = await response.text();
    
    // Parse and Update database
    const newRates = parseCSV(csvText);
    
    if (newRates.length > 5) {
      rates = newRates;
      localStorage.setItem('cghs_rates_db', JSON.stringify(rates));
      showToast("Synced successfully! Loaded " + rates.length + " rates.", 'success');
    } else {
      showToast('Sheet fetched but it contains template search page. Please publish combined rates as the first tab in Google Sheets.', 'warning');
    }
  } catch (e) {
    console.error('Online Sync failed:', e);
    showToast('Sync failed. Please check connection and sheet sharing settings.', 'error');
  } finally {
    // Restore button state
    syncText.textContent = 'Sync';
    syncIcon.classList.remove('animate-spin');
    syncBtn.removeAttribute('disabled');
    
    // Re-render
    renderCategoryDropdown();
    filterAndRender();
  }
}

// CSV Parser implementation exactly as requested
function parseCSV(csvText) {
  const parsedRates = [];
  let currentCategory = 'GENERAL';
  
  const rows = [];
  let currentRow = [];
  let currentVal = '';
  let inQuotes = false;
  
  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentVal += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentVal.trim());
      currentVal = '';
    } else if ((char === '\\r' || char === '\\n') && !inQuotes) {
      if (char === '\\r' && nextChar === '\\n') {
        i++;
      }
      currentRow.push(currentVal.trim());
      if (currentRow.length > 0 && currentRow.some(cell => cell !== '')) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  
  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal.trim());
    rows.push(currentRow);
  }

  // Clean category names
  function formatCategoryName(name) {
    let cat = name.toUpperCase();
    cat = cat.replace("TREATMENT PROCEDURE", "");
    cat = cat.replace("TREATMENT PROCEDUR", "");
    cat = cat.replace("INVESTIGATION /", "");
    cat = cat.replace("INVESTIGATION", "");
    cat = cat.replace("INVESTIGATIONS", "");
    cat = cat.replace("LABORATORY MEDICINE /", "");
    cat = cat.replace("LABORATORY INVESTIGAION", "");
    cat = cat.replace("LABORATORY INVESTIGATIONS/", "");
    cat = cat.replace("LABORATORY INVESTIGATIONS", "");
    cat = cat.replace("LABORATORY/ MEDICINE/", "");
    cat = cat.replace("NUCLEAR MEDICINE /", "");
    cat = cat.replace("ADDED W.E.F.", "");
    cat = cat.replace("ADDED vide clause", "");
    cat = cat.trim();
    
    if (cat.includes("SKIN")) return "SKIN";
    if (cat.includes("OPTHALMOLOGY") || cat.includes("OPHTHALMOLOGY")) return "OPHTHALMOLOGY";
    if (cat.includes("DENTAL")) return "DENTAL";
    if (cat.includes("ENT")) return "ENT";
    if (cat.includes("HEAD AND NECK") || cat.includes("HEAD And NECK")) return "HEAD & NECK";
    if (cat.includes("BREAST")) return "BREAST";
    if (cat.includes("GENERAL SURGERY")) return "GENERAL SURGERY";
    if (cat.includes("BIOPSIES")) return "BIOPSIES";
    if (cat.includes("OESOPHAGUS")) return "OESOPHAGUS";
    if (cat.includes("ABDOMEN") || cat.includes("GI SURGERY")) return "ABDOMEN & GI SURGERY";
    if (cat.includes("ICU/CCU") || cat.includes("SPECIAL CARE")) return "ICU & CCU";
    if (cat.includes("CARDIOVASCULAR") || cat.includes("CARDIAC")) return "CARDIOLOGY & CARDIAC SURGERY";
    if (cat.includes("OBSTETRICS") || cat.includes("GYNAECOLOGY")) return "OBSTETRICS & GYNAECOLOGY";
    if (cat.includes("NEPHROLOGY") || cat.includes("UROLOGY")) return "NEPHROLOGY & UROLOGY";
    if (cat.includes("NEURO-SURGERY") || cat.includes("NEUROSCIENCES")) return "NEUROLOGY & NEUROSURGERY";
    if (cat.includes("PAEDIATRIC")) return "PEDIATRIC SURGERY";
    if (cat.includes("BURNS") || cat.includes("PLASTIC")) return "BURNS & PLASTIC SURGERY";
    if (cat.includes("ORTHOPAEDICS") || cat.includes("OSTEOLOGY")) return "ORTHOPEDICS";
    if (cat.includes("PHYSIOTHERAPY")) return "PHYSIOTHERAPY";
    if (cat.includes("RADIOTHERAPY") || cat.includes("CHEMOTHERAPY") || cat.includes("BRACHYTHERAPY")) return "ONCOLOGY & CHEMOTHERAPY";
    if (cat.includes("GASTROENTEROLOGY") || cat.includes("GASTRO AND HEPATOBILIARY") || cat.includes("GASTRO-ENTEROLOGY")) return "GASTROENTEROLOGY";
    if (cat.includes("PULMONARY")) return "PULMONARY";
    if (cat.includes("GENITOURINARY")) return "GENITOURINARY";
    if (cat.includes("ENDOCRINOLOGY")) return "ENDOCRINOLOGY";
    if (cat.includes("RADIO-ISOTOPE")) return "RADIO-ISOTOPE THERAPY";
    if (cat.includes("PET SCAN")) return "PET SCAN";
    if (cat.includes("PATHOLOGY")) return "PATHOLOGY";
    if (cat.includes("HAEMATOLOGY")) return "HEMATOLOGY";
    if (cat.includes("BLOOD BANK")) return "BLOOD BANK";
    if (cat.includes("CYTOLOGY")) return "CYTOLOGY";
    if (cat.includes("FLOW CYTOMETRY")) return "FLOW CYTOMETRY";
    if (cat.includes("BIO-CHEMISTRY")) return "BIOCHEMISTRY";
    if (cat.includes("NUTRITIONAL")) return "NUTRITIONAL MARKERS";
    if (cat.includes("TUMOUR MARKERS")) return "TUMOR MARKERS";
    if (cat.includes("HORMONES")) return "HORMONES";
    if (cat.includes("USG") || cat.includes("X-RAY") || cat.includes("CT") || cat.includes("MRI") || cat.includes("MAMMOGRAPHY") || cat.includes("DEXA")) return "IMAGING (USG/X-RAY/CT/MRI)";

    return cat || "GENERAL";
  }

  for (const columns of rows) {
    if (columns.length < 2) continue;

    const firstCol = columns[0];
    const name = columns[1];
    const nonNabhStr = columns[2] || '';
    const nabhStr = columns[3] || '';

    if (
      firstCol.toLowerCase().includes("serial") || 
      firstCol.toLowerCase().includes("sr") || 
      name.toLowerCase().includes("name of") || 
      name.toLowerCase().includes("treatment/procedure")
    ) {
      continue;
    }

    const startsWithNum = /^\\d+$/.test(firstCol);

    if (!startsWithNum) {
      if (firstCol && firstCol.length > 3 && !firstCol.toLowerCase().includes("added") && !firstCol.toLowerCase().includes("rates")) {
        currentCategory = formatCategoryName(firstCol);
      }
    } else {
      const nonNabh = parseFloat(nonNabhStr.replace(/[^0-9.]/g, '')) || 0;
      const nabh = parseFloat(nabhStr.replace(/[^0-9.]/g, '')) || 0;
      const cleanName = name.replace(/\\r?\\n/g, ' ').replace(/\\s+/g, ' ').trim();

      parsedRates.push({
        id: firstCol,
        category: currentCategory,
        name: cleanName,
        nonNabh: nonNabh || 0,
        nabh: nabh || 0
      });
    }
  }

  return parsedRates;
}

// Populate Category Dropdown Options
function renderCategoryDropdown() {
  const uniqueCats = [...new Set(rates.map(r => r.category))].sort();
  
  categorySelect.innerHTML = '<option value="ALL">All Categories</option>';
  
  uniqueCats.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    if (selectedCategory === cat) {
      opt.selected = true;
    }
    categorySelect.appendChild(opt);
  });
}

// Dropdown Change Handler
function handleCategorySelectChange(e) {
  selectedCategory = e.target.value;
  displayLimit = 30; // Reset pagination when category changes
  filterAndRender();
}

// Search operations
function handleSearchInput(e) {
  searchQuery = e.target.value;
  displayLimit = 30; // Reset pagination when search changes
  if (searchQuery.trim().length > 0) {
    clearSearchBtn.classList.remove('hidden');
  } else {
    clearSearchBtn.classList.add('hidden');
  }
  filterAndRender();
}

function clearSearch() {
  searchInput.value = '';
  searchQuery = '';
  displayLimit = 30;
  clearSearchBtn.classList.add('hidden');
  filterAndRender();
}

// Main Filtering and Rendering
function filterAndRender() {
  const query = searchQuery.toLowerCase().trim();
  
  // Check if the user is in the Default Welcome State
  const isDefaultState = selectedCategory === 'ALL' && query === '';
  
  let filtered = [];
  if (isDefaultState) {
    // Welcome State: Render only common/featured procedures
    filtered = rates.filter(item => COMMON_PROCEDURE_IDS.includes(item.id));
  } else {
    // Filter active state
    filtered = rates.filter(item => {
      const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchesSearch = query === '' || 
                            item.name.toLowerCase().includes(query) || 
                            item.id.includes(query) ||
                            item.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }

  // Update Stats
  statsTotal.textContent = rates.length;
  statsFiltered.textContent = filtered.length;
  statsCategory.textContent = selectedCategory === 'ALL' ? 'All Categories' : selectedCategory;

  renderRateRows(filtered, isDefaultState);
}

function renderRateRows(items, isDefaultState) {
  // Update rate list container class dynamically to be a clean list layout
  rateListContainer.className = 'flex flex-col gap-2.5 max-w-5xl mx-auto w-full';
  rateListContainer.innerHTML = '';
  
  // Welcome layout header on welcome screen
  if (isDefaultState) {
    const welcomeHeader = document.createElement('div');
    welcomeHeader.className = 'py-6 px-5 mb-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/10 dark:from-blue-500/5 dark:to-indigo-500/5 dark:border-blue-500/5';
    welcomeHeader.innerHTML = `
      <h2 class="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
        <span>👋 Welcome to the CGHS Rate Directory</span>
      </h2>
      <p class="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
        Select a category from the <strong>Dropdown Selector</strong> or type in the <strong>Search Bar</strong> above to instantly query 1,840 medical rates offline.
      </p>
      <div class="mt-4 flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Commonly Searched Procedures:</span>
      </div>
    `;
    rateListContainer.appendChild(welcomeHeader);
  }

  if (items.length === 0) {
    rateListContainer.innerHTML = `
      <div class="py-16 text-center">
        <svg class="mx-auto h-12 w-12 text-slate-400 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">No procedures found</h3>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Try adjusting your search terms or filters.</p>
      </div>
    `;
    return;
  }

  // Segment items to render based on the current pagination/display limit
  const visibleItems = isDefaultState ? items : items.slice(0, displayLimit);
  
  // Optimize rendering with DocumentFragment
  const fragment = document.createDocumentFragment();
  
  visibleItems.forEach(item => {
    const row = document.createElement('div');
    // Horizontal row styling: flex items on tablet/desktop, stacked on mobile
    row.className = 'group relative flex flex-col sm:flex-row sm:items-center sm:justify-between overflow-hidden rounded-2xl bg-white/70 p-4 shadow-sm border border-slate-100 dark:bg-slate-900/50 dark:border-slate-800/60 backdrop-blur-md transition-all duration-300 hover:shadow-md dark:hover:border-slate-700/50 gap-3 sm:gap-4';
    
    // Rupee symbol styling helper
    const renderRate = (val) => {
      if (val === 0) return '<span class="text-slate-400 dark:text-slate-500 text-xs font-semibold">N/A</span>';
      return `<span class="text-xs font-semibold mr-0.5">₹</span>${val.toLocaleString('en-IN')}`;
    };

    row.innerHTML = `
      <!-- Left side: Info metadata and Name -->
      <div class="flex-grow flex flex-col gap-1 pr-0 sm:pr-4">
        <div class="flex items-center gap-2 text-[10px] font-medium text-slate-400 dark:text-slate-500">
          <span class="inline-flex items-center rounded-md bg-blue-50/50 px-2 py-0.5 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400 border border-blue-100/10">
            ${item.category}
          </span>
          <span>•</span>
          <span class="font-mono">Code #${item.id}</span>
        </div>
        <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          ${item.name}
        </h3>
      </div>
      
      <!-- Right side: Rates side-by-side -->
      <div class="flex items-center gap-3 sm:gap-4 flex-shrink-0 pt-2 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-800/50 justify-between sm:justify-end">
        <!-- Non-NABH Badge -->
        <div class="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-teal-500/5 border border-teal-500/10 dark:bg-teal-500/10 dark:border-teal-500/20 min-w-[110px] sm:min-w-[120px] justify-between">
          <span class="text-[8px] font-extrabold tracking-wider text-teal-600/80 dark:text-teal-400 uppercase">Non-NABH</span>
          <div class="text-sm font-black text-teal-600 dark:text-teal-400">
            ${renderRate(item.nonNabh)}
          </div>
        </div>
        
        <!-- NABH Badge -->
        <div class="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-indigo-500/5 border border-indigo-500/10 dark:bg-indigo-500/10 dark:border-indigo-500/20 min-w-[110px] sm:min-w-[120px] justify-between">
          <span class="text-[8px] font-extrabold tracking-wider text-indigo-600/80 dark:text-indigo-400 uppercase">NABH</span>
          <div class="text-sm font-black text-indigo-600 dark:text-indigo-400">
            ${renderRate(item.nabh)}
          </div>
        </div>
      </div>
    `;
    fragment.appendChild(row);
  });
  
  rateListContainer.appendChild(fragment);

  // If there are more items to load, append a "Load More" pagination container
  if (!isDefaultState && items.length > displayLimit) {
    const loadMoreContainer = document.createElement('div');
    loadMoreContainer.className = 'flex justify-center py-6 mt-2';
    
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'px-6 py-2.5 rounded-xl text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 shadow-sm transition-all duration-200 active:scale-95';
    loadMoreBtn.textContent = "Show More (" + (items.length - displayLimit) + " remaining)";
    
    loadMoreBtn.addEventListener('click', () => {
      displayLimit += 30; // Load next 30 items
      filterAndRender();
    });
    
    loadMoreContainer.appendChild(loadMoreBtn);
    rateListContainer.appendChild(loadMoreContainer);
  }
}

// Toast notification component
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  
  let bgClass = 'bg-emerald-500 text-white';
  if (type === 'error') bgClass = 'bg-rose-500 text-white';
  if (type === 'warning') bgClass = 'bg-amber-500 text-white';

  toast.className = "flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg font-medium text-sm transition-all duration-300 translate-y-2 opacity-0 " + bgClass;
  
  let icon = '<svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
  if (type === 'error') {
    icon = '<svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
  }
  if (type === 'warning') {
    icon = '<svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>';
  }

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}
