class AddLoteamentoRefToLotes < ActiveRecord::Migration[7.0]
  def change
    add_reference :lotes, :loteamento, null: false, foreign_key: true
  end
end
