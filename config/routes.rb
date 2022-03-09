Rails.application.routes.draw do
  resources :clientes
  namespace :api do
    namespace :v1 do
      resources :loteamentos
      resources :lotes
    end
  end
end
