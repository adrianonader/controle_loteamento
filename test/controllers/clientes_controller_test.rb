require "test_helper"

class ClientesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cliente = clientes(:one)
  end

  test "should get index" do
    get clientes_url, as: :json
    assert_response :success
  end

  test "should create cliente" do
    assert_difference("Cliente.count") do
      post clientes_url, params: { cliente: { bairro: @cliente.bairro, cidade: @cliente.cidade, conjugue: @cliente.conjugue, cpf: @cliente.cpf, endereco: @cliente.endereco, estado_civil: @cliente.estado_civil, nome: @cliente.nome, numero: @cliente.numero, rg: @cliente.rg, telefone: @cliente.telefone, telefone_alt: @cliente.telefone_alt } }, as: :json
    end

    assert_response :created
  end

  test "should show cliente" do
    get cliente_url(@cliente), as: :json
    assert_response :success
  end

  test "should update cliente" do
    patch cliente_url(@cliente), params: { cliente: { bairro: @cliente.bairro, cidade: @cliente.cidade, conjugue: @cliente.conjugue, cpf: @cliente.cpf, endereco: @cliente.endereco, estado_civil: @cliente.estado_civil, nome: @cliente.nome, numero: @cliente.numero, rg: @cliente.rg, telefone: @cliente.telefone, telefone_alt: @cliente.telefone_alt } }, as: :json
    assert_response :success
  end

  test "should destroy cliente" do
    assert_difference("Cliente.count", -1) do
      delete cliente_url(@cliente), as: :json
    end

    assert_response :no_content
  end
end
