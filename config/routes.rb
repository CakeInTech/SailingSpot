Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api/v1'
  mount Rswag::Api::Engine => '/api/v1'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end
