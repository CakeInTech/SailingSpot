Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api'
  mount Rswag::Api::Engine => '/api'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

  devise_for :users, path: '', path_names: {
  sign_in: 'signin',
  sign_out: 'logout',
  registration: 'signup'
}
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :reservations, only: [:index, :show, :new, :create, :edit, :update]
      end
      resources :boats, only: [:index, :show, :new, :create, :edit, :update]
      resources :abilities, only: [:index]
    end
  end

  get '*path', to: 'root#index', via: :all
end
