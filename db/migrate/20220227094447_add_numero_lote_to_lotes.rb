class AddNumeroLoteToLotes < ActiveRecord::Migration[7.0]
  def change
    add_column :lotes, :numero_lote, :decimal
  end
end
