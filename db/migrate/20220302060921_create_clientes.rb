class CreateClientes < ActiveRecord::Migration[7.0]
  def change
    create_table :clientes do |t|
      t.string :nome
      t.string :telefone
      t.string :telefone_alt
      t.string :endereco
      t.string :numero
      t.string :bairro
      t.string :cidade
      t.string :cpf
      t.string :rg
      t.string :estado_civil
      t.string :conjugue

      t.timestamps
    end
  end
end
