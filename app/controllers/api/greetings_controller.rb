class Api::GreetingsController < ApplicationController
  def random
    greetings = Greeting.all
    greeting = greetings.map(&:message)
    render json: greeting.sample
    # render 'root/index'
  end
end
