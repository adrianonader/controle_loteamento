# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_09_073845) do
  create_table "clientes", force: :cascade do |t|
    t.string "nome"
    t.string "telefone"
    t.string "telefone_alt"
    t.string "endereco"
    t.string "numero"
    t.string "bairro"
    t.string "cidade"
    t.string "cpf"
    t.string "rg"
    t.string "estado_civil"
    t.string "conjugue"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
  end

  create_table "loteamentos", force: :cascade do |t|
    t.string "nome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lotes", force: :cascade do |t|
    t.string "cadastro_municipal"
    t.text "endereco"
    t.decimal "area"
    t.decimal "frente"
    t.decimal "lateral"
    t.decimal "matricula"
    t.boolean "vendido"
    t.decimal "valor"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "loteamento_id", null: false
    t.decimal "quadra"
    t.decimal "numero"
    t.string "cartorio"
    t.decimal "numero_lote"
    t.index ["loteamento_id"], name: "index_lotes_on_loteamento_id"
  end

  add_foreign_key "lotes", "loteamentos"
end
