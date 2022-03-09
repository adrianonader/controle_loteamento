class AddQuadraToLotes < ActiveRecord::Migration[7.0]
  def change
    add_column :lotes, :quadra, :decimal
  end
end
