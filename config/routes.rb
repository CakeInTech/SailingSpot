Rails.application.routes.draw do
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
        resources :boats, only: [:index, :show]
        resources :reservations, only: [:index]
    end
  end
  get '*path', to: 'root#index', via: :all
end
