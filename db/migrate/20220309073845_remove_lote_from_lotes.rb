class RemoveLoteFromLotes < ActiveRecord::Migration[7.0]
  def change
    remove_column :lotes, :lote, :decimal
  end
end
