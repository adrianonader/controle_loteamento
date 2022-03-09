class AddNumeroToLotes < ActiveRecord::Migration[7.0]
  def change
    add_column :lotes, :numero, :decimal
  end
end
