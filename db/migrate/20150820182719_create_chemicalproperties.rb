class CreateChemicalproperties < ActiveRecord::Migration
  def change
    create_table :chemicalproperties do |t|
      t.belongs_to :chemical, index: true
      t.belongs_to :property, index: true
      t.belongs_to :result, index: true
      t.timestamps null: false
    end
  end
end
