class RenameStatusToVendidoInLotes < ActiveRecord::Migration[7.0]
  def change
    rename_column(:lotes :status :vendido) 
  end
end

