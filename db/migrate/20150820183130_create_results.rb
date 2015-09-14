class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.belongs_to :chemical, index: true
      t.belongs_to :property, index: true
      t.string :units
      t.string :value, null: false
      t.timestamps null: false
    end
  end
end
