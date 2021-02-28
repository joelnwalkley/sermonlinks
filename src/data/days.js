//Rarely changes, likely will maintain here rather than a db
//TODO: add alternate names or additional search to handle when Propers are also called Ordinary

const days = [
  {
    name: 'First Sunday of Advent',
    id: 'Advent1B',
    texts: ['Isa 64:1-9', 'Ps 80:1-7, 17-19', '1 Cor 1:3-9', 'Mark 13:24-37'],
    years: ['B'],
    season: 'advent',
    color: 'blue',
  },
  {
    name: 'Second Sunday of Advent',
    id: 'Advent2B',
    texts: ['Isa 40:1-11', 'Ps 85:1-2, 8-13', '2 Pet 3:8-15a', 'Mark 1:1-8'],
    years: ['B'],
    season: 'advent',
    color: 'blue',
  },
  {
    name: 'Nativity of the Lord - Proper I',
    id: 'Christmas1P',
    texts: ['Isa 9:2-7', 'Ps 96', 'Titus 2:11-14', 'Luke 2:1-14, (15-20)'],
    years: ['B'],
    season: 'christmas',
    color: 'yellow',
  },
  {
    name: 'Epiphany of the Lord',
    id: 'Epiphany',
    texts: ['Isa 60:1-6', 'Ps 72:1-7, 10-14', 'Eph 3:1-12', 'Matt 2:1-12'],
    years: ['A','B','C'],
    season: 'epiphany',
    color: 'yellow',
  },
  {
    name: 'First Sunday in Lent',
    id: 'Lent1B',
    texts: ['Gen 9:8-17', 'Ps 25:1-10', '1 Pet 3:18-22', 'Mark 1:9-15'],
    years: ['B'],
    season: 'lent',
    color: 'purple',
  },
  {
    name: 'Second Sunday in Lent',
    id: 'Lent2B',
    texts: [
      'Gen 17:1-7, 15-16',
      'Ps 22:23-31',
      'Rom 4:13-25',
      'Mark 8:31-38',
      'Mark 9:2-9',
    ],
    years: ['B'],
    season: 'lent',
    color: 'purple',
  },
  {
    name: 'Second Sunday of Easter',
    id: 'Easter2B',
    texts: ['Acts 4:32-35', 'Ps 133', '1 John 1:1-2:2', 'John 20:19-31'],
    years: ['B'],
    season: 'easter',
    color: 'yellow',
  },
  {
    name: 'Trinity Sunday',
    id: 'TrinityB',
    texts: ['Isa 6:1-8', 'Ps 29', 'Rom 8:12-17', 'John 3:1-17'],
    years: ['B'],
    season: 'ordinary',
    color: 'yellow',
  },
  {
    name: 'Day of Pentecost',
    id: 'PentecostB',
    texts: [
      'Acts 2:1-21',
      'Ezek 37:1-14',
      'Ps 104:24-34, 35b',
      'Rom 8:22-27',
      'John 15:26-27; 16:4b-15',
    ],
    years: ['B'],
    season: 'pentecost',
    color: 'red',
  },
  {
    name: 'Second Sunday after Pentecost',
    id: 'Proper5B',
    texts: [
      '1 Sam 8:4-11, (12-15), 16-20, (11:14-15)',
      'Ps 138',
      'Gen 3:8-15',
      'Ps 130',
      '2 Cor 4:13-5:1',
      'Mark 3:20-35',
    ],
    years: ['B'],
    season: 'ordinary',
    color: 'green',
  },
];

export { days };
