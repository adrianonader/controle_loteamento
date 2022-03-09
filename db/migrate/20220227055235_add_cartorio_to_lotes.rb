class AddCartorioToLotes < ActiveRecord::Migration[7.0]
  def change
    add_column :lotes, :cartorio, :string
  end
end
