require 'rspec'

def atm total, denominations
    raw_data = denominations.inject({}) do |denominations_hash, denomination|
        denominations_hash[denomination] = total.divmod(denomination).first
        total -= total.divmod(denomination).first * denomination
        
        denominations_hash
    end
end

# def atm(total, denominations)
#    denominations.inject({}) { |h, d| h[d], total = total.divmod(d); h} 
# end

# describe "ATM" do
#     it 'dispense the correct denominations to the user'
#     expect(atm(110,[100, 20, 10, 5])).to eq(100=>1, 20=>0, 10=>1, 5=>0)  
#     expect(atm(245, [20, 10, 5])).to eq(20=>12, 10=>0, 5=>1)
# end

p atm(18475,[100, 20, 10, 5])
p atm(255, [20, 10, 5])
