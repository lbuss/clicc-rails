class CreateChemicals < ActiveRecord::Migration
  def change
    create_table :chemicals do |t|
      t.string  :name, unique: true, index: true
      t.string  :casrn, unique: true, index: true
      t.string  :smiles, null: false, unique: true, index: true
      t.timestamps null: false
    end
  end
end
