class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :name, null: false
      t.string :endpoint
      t.timestamps null: false
    end
  end
end
