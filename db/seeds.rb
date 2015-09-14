# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

chemical = Chemical.create(
  name: "sucrose",
  smiles: "C(C1C(C(C(C(O1)OC2(C(C(C(O2)CO)O)O)CO)O)O)O)O",
  casrn: "57-50-1"
)

property = Property.create(
  name: "Aquatic Ecotoxicity Potential",
  endpoint: "LD50"
)

result = Result.create(
  chemical: chemical,
  property: property,
  value: 5
)
