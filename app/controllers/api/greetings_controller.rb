class Api::GreetingsController < ApplicationController
  def random
    greetings = Greeting.all
    greeting = greetings.map { |greeting| greeting.message }
    render json: greeting.sample
    # render 'root/index'
  end
end