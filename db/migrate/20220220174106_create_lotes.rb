class CreateLotes < ActiveRecord::Migration[7.0]
  def change
    create_table :lotes do |t|
      t.string :cadastro_municipal
      t.text :endereco
      t.decimal :area
      t.decimal :frente
      t.decimal :lateral
      t.decimal :matricula
      t.boolean :status
      t.decimal :valor

      t.timestamps
    end
  end
end
