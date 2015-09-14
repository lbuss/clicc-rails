
json.array! @chemical do |chem|
  json.(chem, :id, :name, :casrn, :smiles, :created_at, :updated_at)

  if chem.results
    json.results(chem.results) do |res|
      json.id res.id
      json.created_at res.created_at
      json.updated_at res.updated_at
      json.property res.property.name
      json.value res.value
    end
  end
end
