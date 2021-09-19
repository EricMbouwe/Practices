require "selenium-webdriver"

driver = Selenium::WebDriver.for :chrome
driver.navigate.to "https://dashboard.microverse.org/review_requests"
# driver.manage.window.maximize

EMAIL =  ARGV[0] || 'ericmbouwe@yahoo.fr'
PASSWORD =  ARGV[1] || 'Naruto00'

driver.find_element(:name, 'email').send_keys(EMAIL)
driver.find_element(:name, 'password').send_keys(PASSWORD)

driver.find_element(:name, 'submit').click

element = driver.find_element(:link_text, 'Review Requests 2.0')
element.click

i = 1
loop do

    claim_btns = driver.find_elements(:name, 'claim')
    # p claim_btns

    sleep(1)
    puts "scrapping since #{i} seconds..."

    if i%5 == 0
        driver.navigate.refresh
        p 'Fast Page Refresh...'
    end

    if !claim_btns.empty?
        if claim_btns[0].displayed?
            puts 'Claimed Code Review!!!'
            claim_btns[0].click
            break
        end
    else
        puts 'No Review Found At This Moment...'
    end

    i += 1
end

sleep()
