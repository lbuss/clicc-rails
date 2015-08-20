class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.string :units
      t.string :value, null: false
      t.timestamps null: false
    end
  end
end
