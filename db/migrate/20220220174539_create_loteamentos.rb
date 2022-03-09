class CreateLoteamentos < ActiveRecord::Migration[7.0]
  def change
    create_table :loteamentos do |t|
      t.string :nome

      t.timestamps
    end
  end
end
