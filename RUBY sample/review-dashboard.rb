require 'selenium-webdriver'
require 'colorize'

driver = Selenium::WebDriver.for :chrome
driver.navigate.to 'https://dashboard.microverse.org/review_requests'
# driver.manage.window.maximize

EMAIL =  ARGV[0] || 'ericmbouwe@yahoo.fr'
PASSWORD =  ARGV[1] || 'Naruto00'

REFRESH_TIMER = 20 #-> 20 seconds
LOGGING_TIMER = 5  #-> It depends of your internet speed

sleep(1)

driver.find_element(:name, 'email').send_keys(EMAIL)
driver.find_element(:name, 'password').send_keys(PASSWORD)

driver.find_element(:name, 'submit').click

sleep(LOGGING_TIMER)

element = driver.find_element(:link_text, 'Review Requests 2.0')
element.click

i = 1
loop do

    claim_btns = driver.find_elements(:name, 'claim')
    # p claim_btns

    sleep(1)
    puts "scrapping since #{i} seconds..."

    if i%REFRESH_TIMER == 0
        driver.navigate.refresh
        puts '......Fast Page Refresh......'.colorize(:black).colorize(background: :blue)
    end

    if !claim_btns.empty?
        if claim_btns[0].displayed?
            puts 'Claimed Code Review!!!'.colorize(:black).colorize(background: :green)
            claim_btns[0].click
            break
        end
    else
        puts 'No Review Found At This Moment...'.colorize(:yellow)
    end

    i += 1
end

sleep()
