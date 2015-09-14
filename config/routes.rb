Rails.application.routes.draw do
  root 'welcome#root'

  namespace :api do
    resources :chemicals
    post 'chemicals/search_chem', to: "chemicals#search"
    post 'chemicals/submit_job', to: "chemicals#submit"
  end
end
