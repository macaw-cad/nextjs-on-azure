import React from 'react';
import { Story, Meta } from "@storybook/react";


export default {
  title: 'Reference/Html character codes',
  component: 'HtmlCharacterCodes'
} as unknown as Meta;

const Template: Story = () => {
  return (
    <div id="top" tabIndex={-1}>
      <h1 className="pt-4">Html Character Codes</h1>
      <p>ASCII Entity and Unicode Symbols</p>
      <ol>
        <li>
          <a  href="#1" target="_self">Standard Character Set</a>
        </li>
        <li>
          <a  href="#2" target="_self">Extended Character Set</a>
        </li>
        <li>
          <a  href="#3" target="_self">Latin Character Set</a>
        </li>
        <li>
          <a  href="#4" target="_self">Greek Set</a>
        </li>
        <li>
          <a  href="#5" target="_self">Punctuation</a>
        </li>
        <li>
          <a  href="#6" target="_self">Mathematical</a>
        </li>
        <li>
          <a  href="#7" target="_self">Fractions</a>
        </li>
        <li>
          <a  href="#8" target="_self">Arrows</a>
        </li>
        <li>
          <a  href="#9" target="_self">Stars</a>
        </li>
        <li>
          <a  href="#10" target="_self">Hearts</a>
        </li>
        <li>
          <a  href="#11" target="_self">Zodiac</a>
        </li>
        <li>
          <a  href="#12" target="_self">Games</a>
        </li>
        <li>
          <a  href="#13" target="_self">Numbers</a>
        </li>
        <li>
          <a  href="#14" target="_self">Religious &amp; Political Symbols</a>
        </li>
        <li>
          <a  href="#15" target="_self">Musical</a>
        </li>
        <li>
          <a  href="#16" target="_self">Unicode Shapes and Symbols</a>
        </li>
        <li>
          <a  href="#17" target="_self">Currency</a>
        </li>
        <li>
          <a  href="#18" target="_self">Units</a>
        </li>
      </ol>
      <h2 className="sb-totop" tabIndex={-1} id="1">Standard Character Set <a href="#top" target="_self">&#8673; top</a></h2>
        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>32</td>
              <td style={{ fontSize: "1.628em" }}> </td>
              <td>&amp;#32;</td>
              <td>
              </td>
              <td>\0020</td>
              <td>0x20</td>
              <td>Space</td>
            </tr>
            <tr>
              <td>33</td>
              <td style={{ fontSize: "1.628em" }}>!</td>
              <td>&amp;#33;</td>
              <td>
              </td>
              <td>\0021</td>
              <td>0x21</td>
              <td>Exclamation mark</td>
            </tr>
            <tr>
              <td>34</td>
              <td style={{ fontSize: "1.628em" }}>"</td>
              <td>&amp;#34;</td>
              <td>&amp;quot;</td>
              <td>\0022</td>
              <td>0x22</td>
              <td>Double quote</td>
            </tr>
            <tr>
              <td>35</td>
              <td style={{ fontSize: "1.628em" }}>#</td>
              <td>&amp;#35;</td>
              <td>
              </td>
              <td>\0023</td>
              <td>0x23</td>
              <td>Pound (hash) symbol</td>
            </tr>
            <tr>
              <td>36</td>
              <td style={{ fontSize: "1.628em" }}>$</td>
              <td>&amp;#36;</td>
              <td>
              </td>
              <td>\0024</td>
              <td>0x24</td>
              <td>Dollar</td>
            </tr>
            <tr>
              <td>37</td>
              <td style={{ fontSize: "1.628em" }}>%</td>
              <td>&amp;#37;</td>
              <td>
              </td>
              <td>\0025</td>
              <td>0x25</td>
              <td>Percent</td>
            </tr>
            <tr>
              <td>38</td>
              <td style={{ fontSize: "1.628em" }}>&amp;</td>
              <td>&amp;#38;</td>
              <td>&amp;amp;</td>
              <td>\0026</td>
              <td>0x26</td>
              <td>Ampersand</td>
            </tr>
            <tr>
              <td>39</td>
              <td style={{ fontSize: "1.628em" }}>'</td>
              <td>&amp;#39;</td>
              <td>
              </td>
              <td>\0027</td>
              <td>0x27</td>
              <td>Single quote</td>
            </tr>
            <tr>
              <td>40</td>
              <td style={{ fontSize: "1.628em" }}>(</td>
              <td>&amp;#40;</td>
              <td>
              </td>
              <td>\0028</td>
              <td>0x28</td>
              <td>Opening parenthesis</td>
            </tr>
            <tr>
              <td>41</td>
              <td style={{ fontSize: "1.628em" }}>)</td>
              <td>&amp;#41;</td>
              <td>
              </td>
              <td>\0029</td>
              <td>0x29</td>
              <td>Closing parenthesis</td>
            </tr>
            <tr>
              <td>42</td>
              <td style={{ fontSize: "1.628em" }}>*</td>
              <td>&amp;#42;</td>
              <td>
              </td>
              <td>\002a</td>
              <td>0x2a</td>
              <td>Asterisk</td>
            </tr>
            <tr>
              <td>43</td>
              <td style={{ fontSize: "1.628em" }}>+</td>
              <td>&amp;#43;</td>
              <td>
              </td>
              <td>\002b</td>
              <td>0x2b</td>
              <td>Plus sign</td>
            </tr>
            <tr>
              <td>44</td>
              <td style={{ fontSize: "1.628em" }}>,</td>
              <td>&amp;#44;</td>
              <td>
              </td>
              <td>\002c</td>
              <td>0x2c</td>
              <td>Comma</td>
            </tr>
            <tr>
              <td>45</td>
              <td style={{ fontSize: "1.628em" }}>-</td>
              <td>&amp;#45;</td>
              <td>
              </td>
              <td>\002d</td>
              <td>0x2d</td>
              <td>Minus sign - Hyphen</td>
            </tr>
            <tr>
              <td>46</td>
              <td style={{ fontSize: "1.628em" }}>.</td>
              <td>&amp;#46;</td>
              <td>
              </td>
              <td>\002e</td>
              <td>0x2e</td>
              <td>Period</td>
            </tr>
            <tr>
              <td>47</td>
              <td style={{ fontSize: "1.628em" }}>/</td>
              <td>&amp;#47;</td>
              <td>
              </td>
              <td>\002f</td>
              <td>0x2f</td>
              <td>Forward slash</td>
            </tr>
            <tr>
              <td>48</td>
              <td style={{ fontSize: "1.628em" }}>0</td>
              <td>&amp;#48;</td>
              <td>
              </td>
              <td>\0030</td>
              <td>0x30</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>49</td>
              <td style={{ fontSize: "1.628em" }}>1</td>
              <td>&amp;#49;</td>
              <td>
              </td>
              <td>\0031</td>
              <td>0x31</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>50</td>
              <td style={{ fontSize: "1.628em" }}>2</td>
              <td>&amp;#50;</td>
              <td>
              </td>
              <td>\0032</td>
              <td>0x32</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>51</td>
              <td style={{ fontSize: "1.628em" }}>3</td>
              <td>&amp;#51;</td>
              <td>
              </td>
              <td>\0033</td>
              <td>0x33</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>52</td>
              <td style={{ fontSize: "1.628em" }}>4</td>
              <td>&amp;#52;</td>
              <td>
              </td>
              <td>\0034</td>
              <td>0x34</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>53</td>
              <td style={{ fontSize: "1.628em" }}>5</td>
              <td>&amp;#53;</td>
              <td>
              </td>
              <td>\0035</td>
              <td>0x35</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>54</td>
              <td style={{ fontSize: "1.628em" }}>6</td>
              <td>&amp;#54;</td>
              <td>
              </td>
              <td>\0036</td>
              <td>0x36</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>55</td>
              <td style={{ fontSize: "1.628em" }}>7</td>
              <td>&amp;#55;</td>
              <td>
              </td>
              <td>\0037</td>
              <td>0x37</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>56</td>
              <td style={{ fontSize: "1.628em" }}>8</td>
              <td>&amp;#56;</td>
              <td>
              </td>
              <td>\0038</td>
              <td>0x38</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>57</td>
              <td style={{ fontSize: "1.628em" }}>9</td>
              <td>&amp;#57;</td>
              <td>
              </td>
              <td>\0039</td>
              <td>0x39</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>58</td>
              <td style={{ fontSize: "1.628em" }}>:</td>
              <td>&amp;#58;</td>
              <td>
              </td>
              <td>\003a</td>
              <td>0x3a</td>
              <td>Colon</td>
            </tr>
            <tr>
              <td>59</td>
              <td style={{ fontSize: "1.628em" }}>;</td>
              <td>&amp;#59;</td>
              <td>
              </td>
              <td>\003b</td>
              <td>0x3b</td>
              <td>Semicolon</td>
            </tr>
            <tr>
              <td>60</td>
              <td style={{ fontSize: "1.628em" }}>&lt;</td>
              <td>&amp;#60;</td>
              <td>
              </td>
              <td>\003c</td>
              <td>0x3c</td>
              <td>Less than sign</td>
            </tr>
            <tr>
              <td>61</td>
              <td style={{ fontSize: "1.628em" }}>=</td>
              <td>&amp;#61;</td>
              <td>
              </td>
              <td>\003d</td>
              <td>0x3d</td>
              <td>Equal sign</td>
            </tr>
            <tr>
              <td>62</td>
              <td style={{ fontSize: "1.628em" }}>&gt;</td>
              <td>&amp;#62;</td>
              <td>
              </td>
              <td>\003e</td>
              <td>0x3e</td>
              <td>Greater than sign</td>
            </tr>
            <tr>
              <td>63</td>
              <td style={{ fontSize: "1.628em" }}>?</td>
              <td>&amp;#63;</td>
              <td>
              </td>
              <td>\003f</td>
              <td>0x3f</td>
              <td>Question mark</td>
            </tr>
            <tr>
              <td>64</td>
              <td style={{ fontSize: "1.628em" }}>@</td>
              <td>&amp;#64;</td>
              <td>
              </td>
              <td>\0040</td>
              <td>0x40</td>
              <td>At symbol</td>
            </tr>
            <tr>
              <td>65</td>
              <td style={{ fontSize: "1.628em" }}>A</td>
              <td>&amp;#65;</td>
              <td>
              </td>
              <td>\0041</td>
              <td>0x41</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>66</td>
              <td style={{ fontSize: "1.628em" }}>B</td>
              <td>&amp;#66;</td>
              <td>
              </td>
              <td>\0042</td>
              <td>0x42</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>67</td>
              <td style={{ fontSize: "1.628em" }}>C</td>
              <td>&amp;#67;</td>
              <td>
              </td>
              <td>\0043</td>
              <td>0x43</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>68</td>
              <td style={{ fontSize: "1.628em" }}>D</td>
              <td>&amp;#68;</td>
              <td>
              </td>
              <td>\0044</td>
              <td>0x44</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>69</td>
              <td style={{ fontSize: "1.628em" }}>E</td>
              <td>&amp;#69;</td>
              <td>
              </td>
              <td>\0045</td>
              <td>0x45</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>70</td>
              <td style={{ fontSize: "1.628em" }}>F</td>
              <td>&amp;#70;</td>
              <td>
              </td>
              <td>\0046</td>
              <td>0x46</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>71</td>
              <td style={{ fontSize: "1.628em" }}>G</td>
              <td>&amp;#71;</td>
              <td>
              </td>
              <td>\0047</td>
              <td>0x47</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>72</td>
              <td style={{ fontSize: "1.628em" }}>H</td>
              <td>&amp;#72;</td>
              <td>
              </td>
              <td>\0048</td>
              <td>0x48</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>73</td>
              <td style={{ fontSize: "1.628em" }}>I</td>
              <td>&amp;#73;</td>
              <td>
              </td>
              <td>\0049</td>
              <td>0x49</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>74</td>
              <td style={{ fontSize: "1.628em" }}>J</td>
              <td>&amp;#74;</td>
              <td>
              </td>
              <td>\004a</td>
              <td>0x4a</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>75</td>
              <td style={{ fontSize: "1.628em" }}>K</td>
              <td>&amp;#75;</td>
              <td>
              </td>
              <td>\004b</td>
              <td>0x4b</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>76</td>
              <td style={{ fontSize: "1.628em" }}>L</td>
              <td>&amp;#76;</td>
              <td>
              </td>
              <td>\004c</td>
              <td>0x4c</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>77</td>
              <td style={{ fontSize: "1.628em" }}>M</td>
              <td>&amp;#77;</td>
              <td>
              </td>
              <td>\004d</td>
              <td>0x4d</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>78</td>
              <td style={{ fontSize: "1.628em" }}>N</td>
              <td>&amp;#78;</td>
              <td>
              </td>
              <td>\004e</td>
              <td>0x4e</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>79</td>
              <td style={{ fontSize: "1.628em" }}>O</td>
              <td>&amp;#79;</td>
              <td>
              </td>
              <td>\004f</td>
              <td>0x4f</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>80</td>
              <td style={{ fontSize: "1.628em" }}>P</td>
              <td>&amp;#80;</td>
              <td>
              </td>
              <td>\0050</td>
              <td>0x50</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>81</td>
              <td style={{ fontSize: "1.628em" }}>Q</td>
              <td>&amp;#81;</td>
              <td>
              </td>
              <td>\0051</td>
              <td>0x51</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>82</td>
              <td style={{ fontSize: "1.628em" }}>R</td>
              <td>&amp;#82;</td>
              <td>
              </td>
              <td>\0052</td>
              <td>0x52</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>83</td>
              <td style={{ fontSize: "1.628em" }}>S</td>
              <td>&amp;#83;</td>
              <td>
              </td>
              <td>\0053</td>
              <td>0x53</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>84</td>
              <td style={{ fontSize: "1.628em" }}>T</td>
              <td>&amp;#84;</td>
              <td>
              </td>
              <td>\0054</td>
              <td>0x54</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>85</td>
              <td style={{ fontSize: "1.628em" }}>U</td>
              <td>&amp;#85;</td>
              <td>
              </td>
              <td>\0055</td>
              <td>0x55</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>86</td>
              <td style={{ fontSize: "1.628em" }}>V</td>
              <td>&amp;#86;</td>
              <td>
              </td>
              <td>\0056</td>
              <td>0x56</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>87</td>
              <td style={{ fontSize: "1.628em" }}>W</td>
              <td>&amp;#87;</td>
              <td>
              </td>
              <td>\0057</td>
              <td>0x57</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>88</td>
              <td style={{ fontSize: "1.628em" }}>X</td>
              <td>&amp;#88;</td>
              <td>
              </td>
              <td>\0058</td>
              <td>0x58</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>89</td>
              <td style={{ fontSize: "1.628em" }}>Y</td>
              <td>&amp;#89;</td>
              <td>
              </td>
              <td>\0059</td>
              <td>0x59</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>90</td>
              <td style={{ fontSize: "1.628em" }}>Z</td>
              <td>&amp;#90;</td>
              <td>
              </td>
              <td>\005a</td>
              <td>0x5a</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>91</td>
              <td style={{ fontSize: "1.628em" }}>[</td>
              <td>&amp;#91;</td>
              <td>
              </td>
              <td>\005b</td>
              <td>0x5b</td>
              <td>Opening bracket</td>
            </tr>
            <tr>
              <td>92</td>
              <td style={{ fontSize: "1.628em" }}>\</td>
              <td>&amp;#92;</td>
              <td>
              </td>
              <td>\005c</td>
              <td>0x5c</td>
              <td>Backslash</td>
            </tr>
            <tr>
              <td>93</td>
              <td style={{ fontSize: "1.628em" }}>]</td>
              <td>&amp;#93;</td>
              <td>
              </td>
              <td>\005d</td>
              <td>0x5d</td>
              <td>Closing bracket</td>
            </tr>
            <tr>
              <td>94</td>
              <td style={{ fontSize: "1.628em" }}>^</td>
              <td>&amp;#94;</td>
              <td>
              </td>
              <td>\005e</td>
              <td>0x5e</td>
              <td>Caret - circumflex</td>
            </tr>
            <tr>
              <td>95</td>
              <td style={{ fontSize: "1.628em" }}>_</td>
              <td>&amp;#95;</td>
              <td>
              </td>
              <td>\005f</td>
              <td>0x5f</td>
              <td>Underscore</td>
            </tr>
            <tr>
              <td>96</td>
              <td style={{ fontSize: "1.628em" }}>`</td>
              <td>&amp;#96;</td>
              <td>
              </td>
              <td>\0060</td>
              <td>0x60</td>
              <td>Grave accent</td>
            </tr>
            <tr>
              <td>97</td>
              <td style={{ fontSize: "1.628em" }}>a</td>
              <td>&amp;#97;</td>
              <td>
              </td>
              <td>\0061</td>
              <td>0x61</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>98</td>
              <td style={{ fontSize: "1.628em" }}>b</td>
              <td>&amp;#98;</td>
              <td>
              </td>
              <td>\0062</td>
              <td>0x62</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>99</td>
              <td style={{ fontSize: "1.628em" }}>c</td>
              <td>&amp;#99;</td>
              <td>
              </td>
              <td>\0063</td>
              <td>0x63</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>100</td>
              <td style={{ fontSize: "1.628em" }}>d</td>
              <td>&amp;#100;</td>
              <td>
              </td>
              <td>\0064</td>
              <td>0x64</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>101</td>
              <td style={{ fontSize: "1.628em" }}>e</td>
              <td>&amp;#101;</td>
              <td>
              </td>
              <td>\0065</td>
              <td>0x65</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>102</td>
              <td style={{ fontSize: "1.628em" }}>f</td>
              <td>&amp;#102;</td>
              <td>
              </td>
              <td>\0066</td>
              <td>0x66</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>103</td>
              <td style={{ fontSize: "1.628em" }}>g</td>
              <td>&amp;#103;</td>
              <td>
              </td>
              <td>\0067</td>
              <td>0x67</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>104</td>
              <td style={{ fontSize: "1.628em" }}>h</td>
              <td>&amp;#104;</td>
              <td>
              </td>
              <td>\0068</td>
              <td>0x68</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>105</td>
              <td style={{ fontSize: "1.628em" }}>i</td>
              <td>&amp;#105;</td>
              <td>
              </td>
              <td>\0069</td>
              <td>0x69</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>106</td>
              <td style={{ fontSize: "1.628em" }}>j</td>
              <td>&amp;#106;</td>
              <td>
              </td>
              <td>\006a</td>
              <td>0x6a</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>107</td>
              <td style={{ fontSize: "1.628em" }}>k</td>
              <td>&amp;#107;</td>
              <td>
              </td>
              <td>\006b</td>
              <td>0x6b</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>108</td>
              <td style={{ fontSize: "1.628em" }}>l</td>
              <td>&amp;#108;</td>
              <td>
              </td>
              <td>\006c</td>
              <td>0x6c</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>109</td>
              <td style={{ fontSize: "1.628em" }}>m</td>
              <td>&amp;#109;</td>
              <td>
              </td>
              <td>\006d</td>
              <td>0x6d</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>110</td>
              <td style={{ fontSize: "1.628em" }}>n</td>
              <td>&amp;#110;</td>
              <td>
              </td>
              <td>\006e</td>
              <td>0x6e</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>111</td>
              <td style={{ fontSize: "1.628em" }}>o</td>
              <td>&amp;#111;</td>
              <td>
              </td>
              <td>\006f</td>
              <td>0x6f</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>112</td>
              <td style={{ fontSize: "1.628em" }}>p</td>
              <td>&amp;#112;</td>
              <td>
              </td>
              <td>\0070</td>
              <td>0x70</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>113</td>
              <td style={{ fontSize: "1.628em" }}>q</td>
              <td>&amp;#113;</td>
              <td>
              </td>
              <td>\0071</td>
              <td>0x71</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>114</td>
              <td style={{ fontSize: "1.628em" }}>r</td>
              <td>&amp;#114;</td>
              <td>
              </td>
              <td>\0072</td>
              <td>0x72</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>115</td>
              <td style={{ fontSize: "1.628em" }}>s</td>
              <td>&amp;#115;</td>
              <td>
              </td>
              <td>\0073</td>
              <td>0x73</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>116</td>
              <td style={{ fontSize: "1.628em" }}>t</td>
              <td>&amp;#116;</td>
              <td>
              </td>
              <td>\0074</td>
              <td>0x74</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>117</td>
              <td style={{ fontSize: "1.628em" }}>u</td>
              <td>&amp;#117;</td>
              <td>
              </td>
              <td>\0075</td>
              <td>0x75</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>118</td>
              <td style={{ fontSize: "1.628em" }}>v</td>
              <td>&amp;#118;</td>
              <td>
              </td>
              <td>\0076</td>
              <td>0x76</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>119</td>
              <td style={{ fontSize: "1.628em" }}>w</td>
              <td>&amp;#119;</td>
              <td>
              </td>
              <td>\0077</td>
              <td>0x77</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>120</td>
              <td style={{ fontSize: "1.628em" }}>x</td>
              <td>&amp;#120;</td>
              <td>
              </td>
              <td>\0078</td>
              <td>0x78</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>121</td>
              <td style={{ fontSize: "1.628em" }}>y</td>
              <td>&amp;#121;</td>
              <td>
              </td>
              <td>\0079</td>
              <td>0x79</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>122</td>
              <td style={{ fontSize: "1.628em" }}>z</td>
              <td>&amp;#122;</td>
              <td>
              </td>
              <td>\007a</td>
              <td>0x7a</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>123</td>
              <td style={{ fontSize: "1.628em" }}>&#123;</td>
              <td>&amp;#123;</td>
              <td>
              </td>
              <td>\007b</td>
              <td>0x7b</td>
              <td>Opening brace</td>
            </tr>
            <tr>
              <td>124</td>
              <td style={{ fontSize: "1.628em" }}>|</td>
              <td>&amp;#124;</td>
              <td>
              </td>
              <td>\007c</td>
              <td>0x7c</td>
              <td>Vertical bar</td>
            </tr>
            <tr>
              <td>125</td>
              <td style={{ fontSize: "1.628em" }}>&#125;</td>
              <td>&amp;#125;</td>
              <td>
              </td>
              <td>\007d</td>
              <td>0x7d</td>
              <td>Closing brace</td>
            </tr>
            <tr>
              <td>126</td>
              <td style={{ fontSize: "1.628em" }}>~</td>
              <td>&amp;#126;</td>
              <td>
              </td>
              <td>\007e</td>
              <td>0x7e</td>
              <td>Equivalency sign - tilde</td>
            </tr>
          </tbody>
        </table>
        
      <h2 className="sb-totop" tabIndex={-1} id="2">Extended Character Set <a href="#top" target="_self">&#8673; top</a></h2>
        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>160</td>
              <td style={{ fontSize: "1.628em" }}>&nbsp;</td>
              <td>&amp;#160;</td>
              <td>
              </td>
              <td>\00a0</td>
              <td>0xa0</td>
              <td>Non-breaking space</td>
            </tr>
            <tr>
              <td>161</td>
              <td style={{ fontSize: "1.628em" }}>¡</td>
              <td>&amp;#161;</td>
              <td>
              </td>
              <td>\00a1</td>
              <td>0xa1</td>
              <td>Inverted exclamation mark</td>
            </tr>
            <tr>
              <td>162</td>
              <td style={{ fontSize: "1.628em" }}>¢</td>
              <td>&amp;#162;</td>
              <td>
              </td>
              <td>\00a2</td>
              <td>0xa2</td>
              <td>Cent sign</td>
            </tr>
            <tr>
              <td>163</td>
              <td style={{ fontSize: "1.628em" }}>£</td>
              <td>&amp;#163;</td>
              <td>
              </td>
              <td>\00a3</td>
              <td>0xa3</td>
              <td>Pound sign</td>
            </tr>
            <tr>
              <td>164</td>
              <td style={{ fontSize: "1.628em" }}>¤</td>
              <td>&amp;#164;</td>
              <td>
              </td>
              <td>\00a4</td>
              <td>0xa4</td>
              <td>Currency sign</td>
            </tr>
            <tr>
              <td>165</td>
              <td style={{ fontSize: "1.628em" }}>¥</td>
              <td>&amp;#165;</td>
              <td>
              </td>
              <td>\00a5</td>
              <td>0xa5</td>
              <td>Yen sign</td>
            </tr>
            <tr>
              <td>166</td>
              <td style={{ fontSize: "1.628em" }}>¦</td>
              <td>&amp;#166;</td>
              <td>
              </td>
              <td>\00a6</td>
              <td>0xa6</td>
              <td>Broken vertical bar</td>
            </tr>
            <tr>
              <td>167</td>
              <td style={{ fontSize: "1.628em" }}>§</td>
              <td>&amp;#167;</td>
              <td>
              </td>
              <td>\00a7</td>
              <td>0xa7</td>
              <td>Section sign</td>
            </tr>
            <tr>
              <td>168</td>
              <td style={{ fontSize: "1.628em" }}>¨</td>
              <td>&amp;#168;</td>
              <td>
              </td>
              <td>\00a8</td>
              <td>0xa8</td>
              <td>Spacing diaeresis - umlaut</td>
            </tr>
            <tr>
              <td>169</td>
              <td style={{ fontSize: "1.628em" }}>©</td>
              <td>&amp;#169;</td>
              <td>
              </td>
              <td>\00a9</td>
              <td>0xa9</td>
              <td>Copyright sign</td>
            </tr>
            <tr>
              <td>170</td>
              <td style={{ fontSize: "1.628em" }}>ª</td>
              <td>&amp;#170;</td>
              <td>
              </td>
              <td>\00aa</td>
              <td>0xaa</td>
              <td>Feminine ordinal indicator</td>
            </tr>
            <tr>
              <td>171</td>
              <td style={{ fontSize: "1.628em" }}>«</td>
              <td>&amp;#171;</td>
              <td>
              </td>
              <td>\00ab</td>
              <td>0xab</td>
              <td>Left double angle quotes</td>
            </tr>
            <tr>
              <td>172</td>
              <td style={{ fontSize: "1.628em" }}>¬</td>
              <td>&amp;#172;</td>
              <td>
              </td>
              <td>\00ac</td>
              <td>0xac</td>
              <td>Not sign</td>
            </tr>
            <tr>
              <td>173</td>
              <td style={{ fontSize: "1.628em" }}>­</td>
              <td>&amp;#173;</td>
              <td>
              </td>
              <td>\00ad</td>
              <td>0xad</td>
              <td>Soft hyphen</td>
            </tr>
            <tr>
              <td>174</td>
              <td style={{ fontSize: "1.628em" }}>®</td>
              <td>&amp;#174;</td>
              <td>
              </td>
              <td>\00ae</td>
              <td>0xae</td>
              <td>Registered trade mark sign</td>
            </tr>
            <tr>
              <td>175</td>
              <td style={{ fontSize: "1.628em" }}>¯</td>
              <td>&amp;#175;</td>
              <td>
              </td>
              <td>\00af</td>
              <td>0xaf</td>
              <td>Spacing macron - overline</td>
            </tr>
            <tr>
              <td>176</td>
              <td style={{ fontSize: "1.628em" }}>°</td>
              <td>&amp;#176;</td>
              <td>
              </td>
              <td>\00b0</td>
              <td>0xb0</td>
              <td>Degree sign</td>
            </tr>
            <tr>
              <td>177</td>
              <td style={{ fontSize: "1.628em" }}>±</td>
              <td>&amp;#177;</td>
              <td>
              </td>
              <td>\00b1</td>
              <td>0xb1</td>
              <td>Plus-or-minus sign</td>
            </tr>
            <tr>
              <td>178</td>
              <td style={{ fontSize: "1.628em" }}>²</td>
              <td>&amp;#178;</td>
              <td>
              </td>
              <td>\00b2</td>
              <td>0xb2</td>
              <td>Superscript two - squared</td>
            </tr>
            <tr>
              <td>179</td>
              <td style={{ fontSize: "1.628em" }}>³</td>
              <td>&amp;#179;</td>
              <td>
              </td>
              <td>\00b3</td>
              <td>0xb3</td>
              <td>Superscript three - cubed</td>
            </tr>
            <tr>
              <td>180</td>
              <td style={{ fontSize: "1.628em" }}>´</td>
              <td>&amp;#180;</td>
              <td>
              </td>
              <td>\00b4</td>
              <td>0xb4</td>
              <td>Acute accent - spacing acute</td>
            </tr>
            <tr>
              <td>181</td>
              <td style={{ fontSize: "1.628em" }}>µ</td>
              <td>&amp;#181;</td>
              <td>
              </td>
              <td>\00b5</td>
              <td>0xb5</td>
              <td>Micro sign</td>
            </tr>
            <tr>
              <td>182</td>
              <td style={{ fontSize: "1.628em" }}>¶</td>
              <td>&amp;#182;</td>
              <td>
              </td>
              <td>\00b6</td>
              <td>0xb6</td>
              <td>Pilcrow sign - paragraph sign</td>
            </tr>
            <tr>
              <td>183</td>
              <td style={{ fontSize: "1.628em" }}>·</td>
              <td>&amp;#183;</td>
              <td>
              </td>
              <td>\00b7</td>
              <td>0xb7</td>
              <td>Middle dot - Georgian comma</td>
            </tr>
            <tr>
              <td>184</td>
              <td style={{ fontSize: "1.628em" }}>¸</td>
              <td>&amp;#184;</td>
              <td>
              </td>
              <td>\00b8</td>
              <td>0xb8</td>
              <td>Spacing cedilla</td>
            </tr>
            <tr>
              <td>185</td>
              <td style={{ fontSize: "1.628em" }}>¹</td>
              <td>&amp;#185;</td>
              <td>
              </td>
              <td>\00b9</td>
              <td>0xb9</td>
              <td>Superscript one</td>
            </tr>
            <tr>
              <td>186</td>
              <td style={{ fontSize: "1.628em" }}>º</td>
              <td>&amp;#186;</td>
              <td>
              </td>
              <td>\00ba</td>
              <td>0xba</td>
              <td>Masculine ordinal indicator</td>
            </tr>
            <tr>
              <td>187</td>
              <td style={{ fontSize: "1.628em" }}>»</td>
              <td>&amp;#187;</td>
              <td>
              </td>
              <td>\00bb</td>
              <td>0xbb</td>
              <td>Right double angle quotes</td>
            </tr>
            <tr>
              <td>191</td>
              <td style={{ fontSize: "1.628em" }}>¿</td>
              <td>&amp;#191;</td>
              <td>
              </td>
              <td>\00bf</td>
              <td>0xbf</td>
              <td>Inverted question mark</td>
            </tr>
            <tr>
              <td>215</td>
              <td style={{ fontSize: "1.628em" }}>×</td>
              <td>&amp;#215;</td>
              <td>
              </td>
              <td>\00d7</td>
              <td>0xd7</td>
              <td>Multiplication sign</td>
            </tr>
            <tr>
              <td>247</td>
              <td style={{ fontSize: "1.628em" }}>÷</td>
              <td>&amp;#247;</td>
              <td>
              </td>
              <td>\00f7</td>
              <td>0xf7</td>
              <td>Division sign</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="3">Latin Character Set <a href="#top" target="_self">&#8673; top</a></h2>
        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>192</td>
              <td style={{ fontSize: "1.628em" }}>À</td>
              <td>&amp;#192;</td>
              <td>
              </td>
              <td>\00c0</td>
              <td>0xc0</td>
              <td>Latin capital letter A with grave</td>
            </tr>
            <tr>
              <td>193</td>
              <td style={{ fontSize: "1.628em" }}>Á</td>
              <td>&amp;#193;</td>
              <td>
              </td>
              <td>\00c1</td>
              <td>0xc1</td>
              <td>Latin capital letter A with acute</td>
            </tr>
            <tr>
              <td>194</td>
              <td style={{ fontSize: "1.628em" }}>Â</td>
              <td>&amp;#194;</td>
              <td>
              </td>
              <td>\00c2</td>
              <td>0xc2</td>
              <td>Latin capital letter A with circumflex</td>
            </tr>
            <tr>
              <td>195</td>
              <td style={{ fontSize: "1.628em" }}>Ã</td>
              <td>&amp;#195;</td>
              <td>
              </td>
              <td>\00c3</td>
              <td>0xc3</td>
              <td>Latin capital letter A with tilde</td>
            </tr>
            <tr>
              <td>196</td>
              <td style={{ fontSize: "1.628em" }}>Ä</td>
              <td>&amp;#196;</td>
              <td>
              </td>
              <td>\00c4</td>
              <td>0xc4</td>
              <td>Latin capital letter A with diaeresis</td>
            </tr>
            <tr>
              <td>197</td>
              <td style={{ fontSize: "1.628em" }}>Å</td>
              <td>&amp;#197;</td>
              <td>
              </td>
              <td>\00c5</td>
              <td>0xc5</td>
              <td>Latin capital letter A with ring above</td>
            </tr>
            <tr>
              <td>198</td>
              <td style={{ fontSize: "1.628em" }}>Æ</td>
              <td>&amp;#198;</td>
              <td>
              </td>
              <td>\00c6</td>
              <td>0xc6</td>
              <td>Latin capital letter AE</td>
            </tr>
            <tr>
              <td>199</td>
              <td style={{ fontSize: "1.628em" }}>Ç</td>
              <td>&amp;#199;</td>
              <td>
              </td>
              <td>\00c7</td>
              <td>0xc7</td>
              <td>Latin capital letter C with cedilla</td>
            </tr>
            <tr>
              <td>200</td>
              <td style={{ fontSize: "1.628em" }}>È</td>
              <td>&amp;#200;</td>
              <td>
              </td>
              <td>\00c8</td>
              <td>0xc8</td>
              <td>Latin capital letter E with grave</td>
            </tr>
            <tr>
              <td>201</td>
              <td style={{ fontSize: "1.628em" }}>É</td>
              <td>&amp;#201;</td>
              <td>
              </td>
              <td>\00c9</td>
              <td>0xc9</td>
              <td>Latin capital letter E with acute</td>
            </tr>
            <tr>
              <td>202</td>
              <td style={{ fontSize: "1.628em" }}>Ê</td>
              <td>&amp;#202;</td>
              <td>
              </td>
              <td>\00ca</td>
              <td>0xca</td>
              <td>Latin capital letter E with circumflex</td>
            </tr>
            <tr>
              <td>203</td>
              <td style={{ fontSize: "1.628em" }}>Ë</td>
              <td>&amp;#203;</td>
              <td>
              </td>
              <td>\00cb</td>
              <td>0xcb</td>
              <td>Latin capital letter E with diaeresis</td>
            </tr>
            <tr>
              <td>204</td>
              <td style={{ fontSize: "1.628em" }}>Ì</td>
              <td>&amp;#204;</td>
              <td>
              </td>
              <td>\00cc</td>
              <td>0xcc</td>
              <td>Latin capital letter I with grave</td>
            </tr>
            <tr>
              <td>205</td>
              <td style={{ fontSize: "1.628em" }}>Í</td>
              <td>&amp;#205;</td>
              <td>
              </td>
              <td>\00cd</td>
              <td>0xcd</td>
              <td>Latin capital letter I with acute</td>
            </tr>
            <tr>
              <td>206</td>
              <td style={{ fontSize: "1.628em" }}>Î</td>
              <td>&amp;#206;</td>
              <td>
              </td>
              <td>\00ce</td>
              <td>0xce</td>
              <td>Latin capital letter I with circumflex</td>
            </tr>
            <tr>
              <td>207</td>
              <td style={{ fontSize: "1.628em" }}>Ï</td>
              <td>&amp;#207;</td>
              <td>
              </td>
              <td>\00cf</td>
              <td>0xcf</td>
              <td>Latin capital letter I with diaeresis</td>
            </tr>
            <tr>
              <td>208</td>
              <td style={{ fontSize: "1.628em" }}>Ð</td>
              <td>&amp;#208;</td>
              <td>
              </td>
              <td>\00d0</td>
              <td>0xd0</td>
              <td>Latin capital letter ETH</td>
            </tr>
            <tr>
              <td>209</td>
              <td style={{ fontSize: "1.628em" }}>Ñ</td>
              <td>&amp;#209;</td>
              <td>
              </td>
              <td>\00d1</td>
              <td>0xd1</td>
              <td>Latin capital letter N with tilde</td>
            </tr>
            <tr>
              <td>210</td>
              <td style={{ fontSize: "1.628em" }}>Ò</td>
              <td>&amp;#210;</td>
              <td>
              </td>
              <td>\00d2</td>
              <td>0xd2</td>
              <td>Latin capital letter O with grave</td>
            </tr>
            <tr>
              <td>211</td>
              <td style={{ fontSize: "1.628em" }}>Ó</td>
              <td>&amp;#211;</td>
              <td>
              </td>
              <td>\00d3</td>
              <td>0xd3</td>
              <td>Latin capital letter O with acute</td>
            </tr>
            <tr>
              <td>212</td>
              <td style={{ fontSize: "1.628em" }}>Ô</td>
              <td>&amp;#212;</td>
              <td>
              </td>
              <td>\00d4</td>
              <td>0xd4</td>
              <td>Latin capital letter O with circumflex</td>
            </tr>
            <tr>
              <td>213</td>
              <td style={{ fontSize: "1.628em" }}>Õ</td>
              <td>&amp;#213;</td>
              <td>
              </td>
              <td>\00d5</td>
              <td>0xd5</td>
              <td>Latin capital letter O with tilde</td>
            </tr>
            <tr>
              <td>214</td>
              <td style={{ fontSize: "1.628em" }}>Ö</td>
              <td>&amp;#214;</td>
              <td>
              </td>
              <td>\00d6</td>
              <td>0xd6</td>
              <td>Latin capital letter O with diaeresis</td>
            </tr>
            <tr>
              <td>216</td>
              <td style={{ fontSize: "1.628em" }}>Ø</td>
              <td>&amp;#216;</td>
              <td>
              </td>
              <td>\00d8</td>
              <td>0xd8</td>
              <td>Latin capital letter O with slash</td>
            </tr>
            <tr>
              <td>217</td>
              <td style={{ fontSize: "1.628em" }}>Ù</td>
              <td>&amp;#217;</td>
              <td>
              </td>
              <td>\00d9</td>
              <td>0xd9</td>
              <td>Latin capital letter U with grave</td>
            </tr>
            <tr>
              <td>218</td>
              <td style={{ fontSize: "1.628em" }}>Ú</td>
              <td>&amp;#218;</td>
              <td>
              </td>
              <td>\00da</td>
              <td>0xda</td>
              <td>Latin capital letter U with acute</td>
            </tr>
            <tr>
              <td>219</td>
              <td style={{ fontSize: "1.628em" }}>Û</td>
              <td>&amp;#219;</td>
              <td>
              </td>
              <td>\00db</td>
              <td>0xdb</td>
              <td>Latin capital letter U with circumflex</td>
            </tr>
            <tr>
              <td>220</td>
              <td style={{ fontSize: "1.628em" }}>Ü</td>
              <td>&amp;#220;</td>
              <td>
              </td>
              <td>\00dc</td>
              <td>0xdc</td>
              <td>Latin capital letter U with diaeresis</td>
            </tr>
            <tr>
              <td>221</td>
              <td style={{ fontSize: "1.628em" }}>Ý</td>
              <td>&amp;#221;</td>
              <td>
              </td>
              <td>\00dd</td>
              <td>0xdd</td>
              <td>Latin capital letter Y with acute</td>
            </tr>
            <tr>
              <td>222</td>
              <td style={{ fontSize: "1.628em" }}>Þ</td>
              <td>&amp;#222;</td>
              <td>
              </td>
              <td>\00de</td>
              <td>0xde</td>
              <td>Latin capital letter THORN</td>
            </tr>
            <tr>
              <td>223</td>
              <td style={{ fontSize: "1.628em" }}>ß</td>
              <td>&amp;#223;</td>
              <td>
              </td>
              <td>\00df</td>
              <td>0xdf</td>
              <td>Latin small letter sharp s - ess-zed</td>
            </tr>
            <tr>
              <td>224</td>
              <td style={{ fontSize: "1.628em" }}>à</td>
              <td>&amp;#224;</td>
              <td>
              </td>
              <td>\00e0</td>
              <td>0xe0</td>
              <td>Latin small letter a with grave</td>
            </tr>
            <tr>
              <td>225</td>
              <td style={{ fontSize: "1.628em" }}>á</td>
              <td>&amp;#225;</td>
              <td>
              </td>
              <td>\00e1</td>
              <td>0xe1</td>
              <td>Latin small letter a with acute</td>
            </tr>
            <tr>
              <td>226</td>
              <td style={{ fontSize: "1.628em" }}>â</td>
              <td>&amp;#226;</td>
              <td>
              </td>
              <td>\00e2</td>
              <td>0xe2</td>
              <td>Latin small letter a with circumflex</td>
            </tr>
            <tr>
              <td>227</td>
              <td style={{ fontSize: "1.628em" }}>ã</td>
              <td>&amp;#227;</td>
              <td>
              </td>
              <td>\00e3</td>
              <td>0xe3</td>
              <td>Latin small letter a with tilde</td>
            </tr>
            <tr>
              <td>228</td>
              <td style={{ fontSize: "1.628em" }}>ä</td>
              <td>&amp;#228;</td>
              <td>
              </td>
              <td>\00e4</td>
              <td>0xe4</td>
              <td>Latin small letter a with diaeresis</td>
            </tr>
            <tr>
              <td>229</td>
              <td style={{ fontSize: "1.628em" }}>å</td>
              <td>&amp;#229;</td>
              <td>
              </td>
              <td>\00e5</td>
              <td>0xe5</td>
              <td>Latin small letter a with ring above</td>
            </tr>
            <tr>
              <td>230</td>
              <td style={{ fontSize: "1.628em" }}>æ</td>
              <td>&amp;#230;</td>
              <td>
              </td>
              <td>\00e6</td>
              <td>0xe6</td>
              <td>Latin small letter ae</td>
            </tr>
            <tr>
              <td>231</td>
              <td style={{ fontSize: "1.628em" }}>ç</td>
              <td>&amp;#231;</td>
              <td>
              </td>
              <td>\00e7</td>
              <td>0xe7</td>
              <td>Latin small letter c with cedilla</td>
            </tr>
            <tr>
              <td>232</td>
              <td style={{ fontSize: "1.628em" }}>è</td>
              <td>&amp;#232;</td>
              <td>
              </td>
              <td>\00e8</td>
              <td>0xe8</td>
              <td>Latin small letter e with grave</td>
            </tr>
            <tr>
              <td>233</td>
              <td style={{ fontSize: "1.628em" }}>é</td>
              <td>&amp;#233;</td>
              <td>
              </td>
              <td>\00e9</td>
              <td>0xe9</td>
              <td>Latin small letter e with acute</td>
            </tr>
            <tr>
              <td>234</td>
              <td style={{ fontSize: "1.628em" }}>ê</td>
              <td>&amp;#234;</td>
              <td>
              </td>
              <td>\00ea</td>
              <td>0xea</td>
              <td>Latin small letter e with circumflex</td>
            </tr>
            <tr>
              <td>235</td>
              <td style={{ fontSize: "1.628em" }}>ë</td>
              <td>&amp;#235;</td>
              <td>
              </td>
              <td>\00eb</td>
              <td>0xeb</td>
              <td>Latin small letter e with diaeresis</td>
            </tr>
            <tr>
              <td>236</td>
              <td style={{ fontSize: "1.628em" }}>ì</td>
              <td>&amp;#236;</td>
              <td>
              </td>
              <td>\00ec</td>
              <td>0xec</td>
              <td>Latin small letter i with grave</td>
            </tr>
            <tr>
              <td>237</td>
              <td style={{ fontSize: "1.628em" }}>í</td>
              <td>&amp;#237;</td>
              <td>
              </td>
              <td>\00ed</td>
              <td>0xed</td>
              <td>Latin small letter i with acute</td>
            </tr>
            <tr>
              <td>238</td>
              <td style={{ fontSize: "1.628em" }}>î</td>
              <td>&amp;#238;</td>
              <td>
              </td>
              <td>\00ee</td>
              <td>0xee</td>
              <td>Latin small letter i with circumflex</td>
            </tr>
            <tr>
              <td>239</td>
              <td style={{ fontSize: "1.628em" }}>ï</td>
              <td>&amp;#239;</td>
              <td>
              </td>
              <td>\00ef</td>
              <td>0xef</td>
              <td>Latin small letter i with diaeresis</td>
            </tr>
            <tr>
              <td>240</td>
              <td style={{ fontSize: "1.628em" }}>ð</td>
              <td>&amp;#240;</td>
              <td>
              </td>
              <td>\00f0</td>
              <td>0xf0</td>
              <td>Latin small letter eth</td>
            </tr>
            <tr>
              <td>241</td>
              <td style={{ fontSize: "1.628em" }}>ñ</td>
              <td>&amp;#241;</td>
              <td>
              </td>
              <td>\00f1</td>
              <td>0xf1</td>
              <td>Latin small letter n with tilde</td>
            </tr>
            <tr>
              <td>242</td>
              <td style={{ fontSize: "1.628em" }}>ò</td>
              <td>&amp;#242;</td>
              <td>
              </td>
              <td>\00f2</td>
              <td>0xf2</td>
              <td>Latin small letter o with grave</td>
            </tr>
            <tr>
              <td>243</td>
              <td style={{ fontSize: "1.628em" }}>ó</td>
              <td>&amp;#243;</td>
              <td>
              </td>
              <td>\00f3</td>
              <td>0xf3</td>
              <td>Latin small letter o with acute</td>
            </tr>
            <tr>
              <td>244</td>
              <td style={{ fontSize: "1.628em" }}>ô</td>
              <td>&amp;#244;</td>
              <td>
              </td>
              <td>\00f4</td>
              <td>0xf4</td>
              <td>Latin small letter o with circumflex</td>
            </tr>
            <tr>
              <td>245</td>
              <td style={{ fontSize: "1.628em" }}>õ</td>
              <td>&amp;#245;</td>
              <td>
              </td>
              <td>\00f5</td>
              <td>0xf5</td>
              <td>Latin small letter o with tilde</td>
            </tr>
            <tr>
              <td>246</td>
              <td style={{ fontSize: "1.628em" }}>ö</td>
              <td>&amp;#246;</td>
              <td>
              </td>
              <td>\00f6</td>
              <td>0xf6</td>
              <td>Latin small letter o with diaeresis</td>
            </tr>
            <tr>
              <td>248</td>
              <td style={{ fontSize: "1.628em" }}>ø</td>
              <td>&amp;#248;</td>
              <td>
              </td>
              <td>\00f8</td>
              <td>0xf8</td>
              <td>Latin small letter o with slash</td>
            </tr>
            <tr>
              <td>249</td>
              <td style={{ fontSize: "1.628em" }}>ù</td>
              <td>&amp;#249;</td>
              <td>
              </td>
              <td>\00f9</td>
              <td>0xf9</td>
              <td>Latin small letter u with grave</td>
            </tr>
            <tr>
              <td>250</td>
              <td style={{ fontSize: "1.628em" }}>ú</td>
              <td>&amp;#250;</td>
              <td>
              </td>
              <td>\00fa</td>
              <td>0xfa</td>
              <td>Latin small letter u with acute</td>
            </tr>
            <tr>
              <td>251</td>
              <td style={{ fontSize: "1.628em" }}>û</td>
              <td>&amp;#251;</td>
              <td>
              </td>
              <td>\00fb</td>
              <td>0xfb</td>
              <td>Latin small letter u with circumflex</td>
            </tr>
            <tr>
              <td>252</td>
              <td style={{ fontSize: "1.628em" }}>ü</td>
              <td>&amp;#252;</td>
              <td>
              </td>
              <td>\00fc</td>
              <td>0xfc</td>
              <td>Latin small letter u with diaeresis</td>
            </tr>
            <tr>
              <td>253</td>
              <td style={{ fontSize: "1.628em" }}>ý</td>
              <td>&amp;#253;</td>
              <td>
              </td>
              <td>\00fd</td>
              <td>0xfd</td>
              <td>Latin small letter y with acute</td>
            </tr>
            <tr>
              <td>254</td>
              <td style={{ fontSize: "1.628em" }}>þ</td>
              <td>&amp;#254;</td>
              <td>
              </td>
              <td>\00fe</td>
              <td>0xfe</td>
              <td>Latin small letter thorn</td>
            </tr>
            <tr>
              <td>255</td>
              <td style={{ fontSize: "1.628em" }}>ÿ</td>
              <td>&amp;#255;</td>
              <td>
              </td>
              <td>\00ff</td>
              <td>0xff</td>
              <td>Latin small letter y with diaeresis</td>
            </tr>
            <tr>
              <td>338</td>
              <td style={{ fontSize: "1.628em" }}>Œ</td>
              <td>&amp;#338;</td>
              <td>&amp;OElig;</td>
              <td>\00152</td>
              <td>0x152</td>
              <td>Latin capital letter OE</td>
            </tr>
            <tr>
              <td>339</td>
              <td style={{ fontSize: "1.628em" }}>œ</td>
              <td>&amp;#339;</td>
              <td>&amp;oelig;</td>
              <td>\00153</td>
              <td>0x153</td>
              <td>Latin small letter oe</td>
            </tr>
            <tr>
              <td>352</td>
              <td style={{ fontSize: "1.628em" }}>Š</td>
              <td>&amp;#352;</td>
              <td>&amp;Scaron;</td>
              <td>\00160</td>
              <td>0x160</td>
              <td>Latin capital letter S with caron</td>
            </tr>
            <tr>
              <td>353</td>
              <td style={{ fontSize: "1.628em" }}>š</td>
              <td>&amp;#353;</td>
              <td>&amp;scaron;</td>
              <td>\00161</td>
              <td>0x161</td>
              <td>Latin small letter s with caron</td>
            </tr>
            <tr>
              <td>376</td>
              <td style={{ fontSize: "1.628em" }}>Ÿ</td>
              <td>&amp;#376;</td>
              <td>&amp;Yuml;</td>
              <td>\00178</td>
              <td>0x178</td>
              <td>Latin capital letter Y with diaeresis</td>
            </tr>
            <tr>
              <td>402</td>
              <td style={{ fontSize: "1.628em" }}>ƒ</td>
              <td>&amp;#402;</td>
              <td>&amp;fnof;</td>
              <td>\00192</td>
              <td>0x192</td>
              <td>Latin small f with hook - function</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="4">Greek Set <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>913</td>
              <td style={{ fontSize: "1.628em" }}>Α</td>
              <td>&amp;#913;</td>
              <td>&amp;Alpha;</td>
              <td>\00391</td>
              <td>0x391</td>
              <td>Greek capital letter alpha</td>
            </tr>
            <tr>
              <td>914</td>
              <td style={{ fontSize: "1.628em" }}>Β</td>
              <td>&amp;#914;</td>
              <td>&amp;Beta;</td>
              <td>\00392</td>
              <td>0x392</td>
              <td>Greek capital letter beta</td>
            </tr>
            <tr>
              <td>915</td>
              <td style={{ fontSize: "1.628em" }}>Γ</td>
              <td>&amp;#915;</td>
              <td>&amp;Gamma;</td>
              <td>\00393</td>
              <td>0x393</td>
              <td>Greek capital letter gamma</td>
            </tr>
            <tr>
              <td>916</td>
              <td style={{ fontSize: "1.628em" }}>Δ</td>
              <td>&amp;#916;</td>
              <td>&amp;Delta;</td>
              <td>\00394</td>
              <td>0x394</td>
              <td>Greek capital letter delta</td>
            </tr>
            <tr>
              <td>917</td>
              <td style={{ fontSize: "1.628em" }}>Ε</td>
              <td>&amp;#917;</td>
              <td>&amp;Epsilon;</td>
              <td>\00395</td>
              <td>0x395</td>
              <td>Greek capital letter epsilon</td>
            </tr>
            <tr>
              <td>918</td>
              <td style={{ fontSize: "1.628em" }}>Ζ</td>
              <td>&amp;#918;</td>
              <td>&amp;Zeta;</td>
              <td>\00396</td>
              <td>0x396</td>
              <td>Greek capital letter zeta</td>
            </tr>
            <tr>
              <td>919</td>
              <td style={{ fontSize: "1.628em" }}>Η</td>
              <td>&amp;#919;</td>
              <td>&amp;Eta;</td>
              <td>\00397</td>
              <td>0x397</td>
              <td>Greek capital letter eta</td>
            </tr>
            <tr>
              <td>920</td>
              <td style={{ fontSize: "1.628em" }}>Θ</td>
              <td>&amp;#920;</td>
              <td>&amp;Theta;</td>
              <td>\00398</td>
              <td>0x398</td>
              <td>Greek capital letter theta</td>
            </tr>
            <tr>
              <td>921</td>
              <td style={{ fontSize: "1.628em" }}>Ι</td>
              <td>&amp;#921;</td>
              <td>&amp;Iota;</td>
              <td>\00399</td>
              <td>0x399</td>
              <td>Greek capital letter iota</td>
            </tr>
            <tr>
              <td>922</td>
              <td style={{ fontSize: "1.628em" }}>Κ</td>
              <td>&amp;#922;</td>
              <td>&amp;Kappa;</td>
              <td>\0039a</td>
              <td>0x39a</td>
              <td>Greek capital letter kappa</td>
            </tr>
            <tr>
              <td>923</td>
              <td style={{ fontSize: "1.628em" }}>Λ</td>
              <td>&amp;#923;</td>
              <td>&amp;Lambda;</td>
              <td>\0039b</td>
              <td>0x39b</td>
              <td>Greek capital letter lambda</td>
            </tr>
            <tr>
              <td>924</td>
              <td style={{ fontSize: "1.628em" }}>Μ</td>
              <td>&amp;#924;</td>
              <td>&amp;Mu;</td>
              <td>\0039c</td>
              <td>0x39c</td>
              <td>Greek capital letter mu</td>
            </tr>
            <tr>
              <td>925</td>
              <td style={{ fontSize: "1.628em" }}>Ν</td>
              <td>&amp;#925;</td>
              <td>&amp;Nu;</td>
              <td>\0039d</td>
              <td>0x39d</td>
              <td>Greek capital letter nu</td>
            </tr>
            <tr>
              <td>926</td>
              <td style={{ fontSize: "1.628em" }}>Ξ</td>
              <td>&amp;#926;</td>
              <td>&amp;Xi;</td>
              <td>\0039e</td>
              <td>0x39e</td>
              <td>Greek capital letter xi</td>
            </tr>
            <tr>
              <td>927</td>
              <td style={{ fontSize: "1.628em" }}>Ο</td>
              <td>&amp;#927;</td>
              <td>&amp;Omicron;</td>
              <td>\0039f</td>
              <td>0x39f</td>
              <td>Greek capital letter omicron</td>
            </tr>
            <tr>
              <td>928</td>
              <td style={{ fontSize: "1.628em" }}>Π</td>
              <td>&amp;#928;</td>
              <td>&amp;Pi;</td>
              <td>\003a0</td>
              <td>0x3a0</td>
              <td>Greek capital letter pi</td>
            </tr>
            <tr>
              <td>929</td>
              <td style={{ fontSize: "1.628em" }}>Ρ</td>
              <td>&amp;#929;</td>
              <td>&amp;Rho;</td>
              <td>\003a1</td>
              <td>0x3a1</td>
              <td>Greek capital letter rho</td>
            </tr>
            <tr>
              <td>931</td>
              <td style={{ fontSize: "1.628em" }}>Σ</td>
              <td>&amp;#931;</td>
              <td>&amp;Sigma;</td>
              <td>\003a3</td>
              <td>0x3a3</td>
              <td>Greek capital letter sigma</td>
            </tr>
            <tr>
              <td>932</td>
              <td style={{ fontSize: "1.628em" }}>Τ</td>
              <td>&amp;#932;</td>
              <td>&amp;Tau;</td>
              <td>\003a4</td>
              <td>0x3a4</td>
              <td>Greek capital letter tau</td>
            </tr>
            <tr>
              <td>933</td>
              <td style={{ fontSize: "1.628em" }}>Υ</td>
              <td>&amp;#933;</td>
              <td>&amp;Upsilon;</td>
              <td>\003a5</td>
              <td>0x3a5</td>
              <td>Greek capital letter upsilon</td>
            </tr>
            <tr>
              <td>934</td>
              <td style={{ fontSize: "1.628em" }}>Φ</td>
              <td>&amp;#934;</td>
              <td>&amp;Phi;</td>
              <td>\003a6</td>
              <td>0x3a6</td>
              <td>Greek capital letter phi</td>
            </tr>
            <tr>
              <td>935</td>
              <td style={{ fontSize: "1.628em" }}>Χ</td>
              <td>&amp;#935;</td>
              <td>&amp;Chi;</td>
              <td>\003a7</td>
              <td>0x3a7</td>
              <td>Greek capital letter sigma</td>
            </tr>
            <tr>
              <td>936</td>
              <td style={{ fontSize: "1.628em" }}>Ψ</td>
              <td>&amp;#936;</td>
              <td>&amp;Psi;</td>
              <td>\003a8</td>
              <td>0x3a8</td>
              <td>Greek capital letter psi</td>
            </tr>
            <tr>
              <td>937</td>
              <td style={{ fontSize: "1.628em" }}>Ω</td>
              <td>&amp;#937;</td>
              <td>&amp;Omega;</td>
              <td>\003a9</td>
              <td>0x3a9</td>
              <td>Greek capital letter omega</td>
            </tr>
            <tr>
              <td>945</td>
              <td style={{ fontSize: "1.628em" }}>α</td>
              <td>&amp;#945;</td>
              <td>&amp;alpha;</td>
              <td>\003b1</td>
              <td>0x3b1</td>
              <td>Greek small letter alpha</td>
            </tr>
            <tr>
              <td>946</td>
              <td style={{ fontSize: "1.628em" }}>β</td>
              <td>&amp;#946;</td>
              <td>&amp;beta;</td>
              <td>\003b2</td>
              <td>0x3b2</td>
              <td>Greek small letter beta</td>
            </tr>
            <tr>
              <td>947</td>
              <td style={{ fontSize: "1.628em" }}>γ</td>
              <td>&amp;#947;</td>
              <td>&amp;gamma;</td>
              <td>\003b3</td>
              <td>0x3b3</td>
              <td>Greek small letter gamma</td>
            </tr>
            <tr>
              <td>948</td>
              <td style={{ fontSize: "1.628em" }}>δ</td>
              <td>&amp;#948;</td>
              <td>&amp;delta;</td>
              <td>\003b4</td>
              <td>0x3b4</td>
              <td>Greek small letter delta</td>
            </tr>
            <tr>
              <td>949</td>
              <td style={{ fontSize: "1.628em" }}>ε</td>
              <td>&amp;#949;</td>
              <td>&amp;epsilon;</td>
              <td>\003b5</td>
              <td>0x3b5</td>
              <td>Greek small letter epsilon</td>
            </tr>
            <tr>
              <td>950</td>
              <td style={{ fontSize: "1.628em" }}>ζ</td>
              <td>&amp;#950;</td>
              <td>&amp;zeta;</td>
              <td>\003b6</td>
              <td>0x3b6</td>
              <td>Greek small letter zeta</td>
            </tr>
            <tr>
              <td>951</td>
              <td style={{ fontSize: "1.628em" }}>η</td>
              <td>&amp;#951;</td>
              <td>&amp;eta;</td>
              <td>\003b7</td>
              <td>0x3b7</td>
              <td>Greek small letter eta</td>
            </tr>
            <tr>
              <td>952</td>
              <td style={{ fontSize: "1.628em" }}>θ</td>
              <td>&amp;#952;</td>
              <td>&amp;theta;</td>
              <td>\003b8</td>
              <td>0x3b8</td>
              <td>Greek small letter theta</td>
            </tr>
            <tr>
              <td>953</td>
              <td style={{ fontSize: "1.628em" }}>ι</td>
              <td>&amp;#953;</td>
              <td>&amp;iota;</td>
              <td>\003b9</td>
              <td>0x3b9</td>
              <td>Greek small letter iota</td>
            </tr>
            <tr>
              <td>954</td>
              <td style={{ fontSize: "1.628em" }}>κ</td>
              <td>&amp;#954;</td>
              <td>&amp;kappa;</td>
              <td>\003ba</td>
              <td>0x3ba</td>
              <td>Greek small letter kappa</td>
            </tr>
            <tr>
              <td>955</td>
              <td style={{ fontSize: "1.628em" }}>λ</td>
              <td>&amp;#955;</td>
              <td>&amp;lambda;</td>
              <td>\003bb</td>
              <td>0x3bb</td>
              <td>Greek small letter lambda</td>
            </tr>
            <tr>
              <td>956</td>
              <td style={{ fontSize: "1.628em" }}>μ</td>
              <td>&amp;#956;</td>
              <td>&amp;mu;</td>
              <td>\003bc</td>
              <td>0x3bc</td>
              <td>Greek small letter mu</td>
            </tr>
            <tr>
              <td>957</td>
              <td style={{ fontSize: "1.628em" }}>ν</td>
              <td>&amp;#957;</td>
              <td>&amp;nu;</td>
              <td>\003bd</td>
              <td>0x3bd</td>
              <td>Greek small letter nu</td>
            </tr>
            <tr>
              <td>958</td>
              <td style={{ fontSize: "1.628em" }}>ξ</td>
              <td>&amp;#958;</td>
              <td>&amp;xi;</td>
              <td>\003be</td>
              <td>0x3be</td>
              <td>Greek small letter xi</td>
            </tr>
            <tr>
              <td>959</td>
              <td style={{ fontSize: "1.628em" }}>ο</td>
              <td>&amp;#959;</td>
              <td>&amp;omicron;</td>
              <td>\003bf</td>
              <td>0x3bf</td>
              <td>Greek small letter omicron</td>
            </tr>
            <tr>
              <td>960</td>
              <td style={{ fontSize: "1.628em" }}>π</td>
              <td>&amp;#960;</td>
              <td>&amp;pi;</td>
              <td>\003c0</td>
              <td>0x3c0</td>
              <td>Greek small letter pi</td>
            </tr>
            <tr>
              <td>961</td>
              <td style={{ fontSize: "1.628em" }}>ρ</td>
              <td>&amp;#961;</td>
              <td>&amp;rho;</td>
              <td>\003c1</td>
              <td>0x3c1</td>
              <td>Greek small letter rho</td>
            </tr>
            <tr>
              <td>962</td>
              <td style={{ fontSize: "1.628em" }}>ς</td>
              <td>&amp;#962;</td>
              <td>&amp;sigmaf;</td>
              <td>\003c2</td>
              <td>0x3c2</td>
              <td>Greek small letter final sigma</td>
            </tr>
            <tr>
              <td>963</td>
              <td style={{ fontSize: "1.628em" }}>σ</td>
              <td>&amp;#963;</td>
              <td>&amp;sigma;</td>
              <td>\003c3</td>
              <td>0x3c3</td>
              <td>Greek small letter sigma</td>
            </tr>
            <tr>
              <td>964</td>
              <td style={{ fontSize: "1.628em" }}>τ</td>
              <td>&amp;#964;</td>
              <td>&amp;tau;</td>
              <td>\003c4</td>
              <td>0x3c4</td>
              <td>Greek small letter tau</td>
            </tr>
            <tr>
              <td>965</td>
              <td style={{ fontSize: "1.628em" }}>υ</td>
              <td>&amp;#965;</td>
              <td>&amp;upsilon;</td>
              <td>\003c5</td>
              <td>0x3c5</td>
              <td>Greek small letter upsilon</td>
            </tr>
            <tr>
              <td>966</td>
              <td style={{ fontSize: "1.628em" }}>φ</td>
              <td>&amp;#966;</td>
              <td>&amp;phi;</td>
              <td>\003c6</td>
              <td>0x3c6</td>
              <td>Greek small letter phi</td>
            </tr>
            <tr>
              <td>967</td>
              <td style={{ fontSize: "1.628em" }}>χ</td>
              <td>&amp;#967;</td>
              <td>&amp;chi;</td>
              <td>\003c7</td>
              <td>0x3c7</td>
              <td>Greek small letter chi</td>
            </tr>
            <tr>
              <td>968</td>
              <td style={{ fontSize: "1.628em" }}>ψ</td>
              <td>&amp;#968;</td>
              <td>&amp;psi;</td>
              <td>\003c8</td>
              <td>0x3c8</td>
              <td>Greek small letter psi</td>
            </tr>
            <tr>
              <td>969</td>
              <td style={{ fontSize: "1.628em" }}>ω</td>
              <td>&amp;#969;</td>
              <td>&amp;omega;</td>
              <td>\003c9</td>
              <td>0x3c9</td>
              <td>Greek small letter omega</td>
            </tr>
            <tr>
              <td>977</td>
              <td style={{ fontSize: "1.628em" }}>ϑ</td>
              <td>&amp;#977;</td>
              <td>&amp;thetasym;</td>
              <td>\003d1</td>
              <td>0x3d1</td>
              <td>Greek small letter theta symbol</td>
            </tr>
            <tr>
              <td>978</td>
              <td style={{ fontSize: "1.628em" }}>ϒ</td>
              <td>&amp;#978;</td>
              <td>&amp;upsih;</td>
              <td>\003d2</td>
              <td>0x3d2</td>
              <td>Greek upsilon with hook symbol</td>
            </tr>
            <tr>
              <td>982</td>
              <td style={{ fontSize: "1.628em" }}>ϖ</td>
              <td>&amp;#982;</td>
              <td>&amp;piv;</td>
              <td>\003d6</td>
              <td>0x3d6</td>
              <td>Greek pi symbol</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="5">Punctuation <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8211</td>
              <td style={{ fontSize: "1.628em" }}>–</td>
              <td>&amp;#8211;</td>
              <td>&amp;ndash;</td>
              <td>\002013</td>
              <td>0x2013</td>
              <td>En dash</td>
            </tr>
            <tr>
              <td>8212</td>
              <td style={{ fontSize: "1.628em" }}>—</td>
              <td>&amp;#8212;</td>
              <td>&amp;mdash;</td>
              <td>\002014</td>
              <td>0x2014</td>
              <td>Em dash</td>
            </tr>
            <tr>
              <td>8216</td>
              <td style={{ fontSize: "1.628em" }}>‘</td>
              <td>&amp;#8216;</td>
              <td>&amp;lsquo;</td>
              <td>\002018</td>
              <td>0x2018</td>
              <td>Left single quotation mark</td>
            </tr>
            <tr>
              <td>8217</td>
              <td style={{ fontSize: "1.628em" }}>’</td>
              <td>&amp;#8217;</td>
              <td>&amp;rsquo;</td>
              <td>\002019</td>
              <td>0x2019</td>
              <td>Right single quotation mark</td>
            </tr>
            <tr>
              <td>8218</td>
              <td style={{ fontSize: "1.628em" }}>‚</td>
              <td>&amp;#8218;</td>
              <td>&amp;sbquo;</td>
              <td>\00201a</td>
              <td>0x201a</td>
              <td>Single low-9 quotation mark</td>
            </tr>
            <tr>
              <td>8220</td>
              <td style={{ fontSize: "1.628em" }}>“</td>
              <td>&amp;#8220;</td>
              <td>&amp;ldquo;</td>
              <td>\00201c</td>
              <td>0x201c</td>
              <td>Left double quotation mark</td>
            </tr>
            <tr>
              <td>8221</td>
              <td style={{ fontSize: "1.628em" }}>”</td>
              <td>&amp;#8221;</td>
              <td>&amp;rdquo;</td>
              <td>\00201d</td>
              <td>0x201d</td>
              <td>Right double quotation mark</td>
            </tr>
            <tr>
              <td>8222</td>
              <td style={{ fontSize: "1.628em" }}>„</td>
              <td>&amp;#8222;</td>
              <td>&amp;bdquo;</td>
              <td>\00201e</td>
              <td>0x201e</td>
              <td>Double low-9 quotation mark</td>
            </tr>
            <tr>
              <td>8224</td>
              <td style={{ fontSize: "1.628em" }}>†</td>
              <td>&amp;#8224;</td>
              <td>&amp;dagger;</td>
              <td>\002020</td>
              <td>0x2020</td>
              <td>Dagger</td>
            </tr>
            <tr>
              <td>8225</td>
              <td style={{ fontSize: "1.628em" }}>‡</td>
              <td>&amp;#8225;</td>
              <td>&amp;Dagger;</td>
              <td>\002021</td>
              <td>0x2021</td>
              <td>Double dagger</td>
            </tr>
            <tr>
              <td>8226</td>
              <td style={{ fontSize: "1.628em" }}>•</td>
              <td>&amp;#8226;</td>
              <td>&amp;bull;</td>
              <td>\002022</td>
              <td>0x2022</td>
              <td>Bullet</td>
            </tr>
            <tr>
              <td>8230</td>
              <td style={{ fontSize: "1.628em" }}>…</td>
              <td>&amp;#8230;</td>
              <td>&amp;hellip;</td>
              <td>\002026</td>
              <td>0x2026</td>
              <td>Horizontal ellipsis</td>
            </tr>
            <tr>
              <td>8240</td>
              <td style={{ fontSize: "1.628em" }}>‰</td>
              <td>&amp;#8240;</td>
              <td>&amp;permil;</td>
              <td>\002030</td>
              <td>0x2030</td>
              <td>Per thousand sign</td>
            </tr>
            <tr>
              <td>8241</td>
              <td style={{ fontSize: "1.628em" }}>‱</td>
              <td>&amp;#8241;</td>
              <td>
              </td>
              <td>\002031</td>
              <td>0x2031</td>
              <td>Per thousand sign</td>
            </tr>
            <tr>
              <td>8251</td>
              <td style={{ fontSize: "1.628em" }}>※</td>
              <td>&amp;#8251;</td>
              <td>
              </td>
              <td>\00203b</td>
              <td>0x203b</td>
              <td>Komejirushi</td>
            </tr>
            <tr>
              <td>8252</td>
              <td style={{ fontSize: "1.628em" }}>‼</td>
              <td>&amp;#8252;</td>
              <td>
              </td>
              <td>\00203c</td>
              <td>0x203c</td>
              <td>Double exclamation mark</td>
            </tr>
            <tr>
              <td>8253</td>
              <td style={{ fontSize: "1.628em" }}>‽</td>
              <td>&amp;#8253;</td>
              <td>
              </td>
              <td>\00203d</td>
              <td>0x203d</td>
              <td>Exclamation question</td>
            </tr>
            <tr>
              <td>8254</td>
              <td style={{ fontSize: "1.628em" }}>‾</td>
              <td>&amp;#8254;</td>
              <td>&amp;oline;</td>
              <td>\00203e</td>
              <td>0x203e</td>
              <td>Overline, a.k.a. spacing overscore</td>
            </tr>
            <tr>
              <td>8257</td>
              <td style={{ fontSize: "1.628em" }}>⁁</td>
              <td>&amp;#8257;</td>
              <td>
              </td>
              <td>\002041</td>
              <td>0x2041</td>
              <td>Caret Insertion Point</td>
            </tr>
            <tr>
              <td>8258</td>
              <td style={{ fontSize: "1.628em" }}>⁂</td>
              <td>&amp;#8258;</td>
              <td>
              </td>
              <td>\002042</td>
              <td>0x2042</td>
              <td>Asterism</td>
            </tr>
            <tr>
              <td>8263</td>
              <td style={{ fontSize: "1.628em" }}>⁇</td>
              <td>&amp;#8263;</td>
              <td>
              </td>
              <td>\002047</td>
              <td>0x2047</td>
              <td>Double question</td>
            </tr>
            <tr>
              <td>8264</td>
              <td style={{ fontSize: "1.628em" }}>⁈</td>
              <td>&amp;#8264;</td>
              <td>
              </td>
              <td>\002048</td>
              <td>0x2048</td>
              <td>Question Exclamation</td>
            </tr>
            <tr>
              <td>8265</td>
              <td style={{ fontSize: "1.628em" }}>⁉</td>
              <td>&amp;#8265;</td>
              <td>
              </td>
              <td>\002049</td>
              <td>0x2049</td>
              <td>Exclamation Question</td>
            </tr>
            <tr>
              <td>8273</td>
              <td style={{ fontSize: "1.628em" }}>⁑</td>
              <td>&amp;#8273;</td>
              <td>
              </td>
              <td>\002051</td>
              <td>0x2051</td>
              <td>Double asterisk</td>
            </tr>
            <tr>
              <td>8364</td>
              <td style={{ fontSize: "1.628em" }}>€</td>
              <td>&amp;#8364;</td>
              <td>&amp;euro;</td>
              <td>\0020ac</td>
              <td>0x20ac</td>
              <td>Euro sign</td>
            </tr>
            <tr>
              <td>8482</td>
              <td style={{ fontSize: "1.628em" }}>™</td>
              <td>&amp;#8482;</td>
              <td>&amp;trade;</td>
              <td>\002122</td>
              <td>0x2122</td>
              <td>Trade mark sign</td>
            </tr>
            <tr>
              <td>8704</td>
              <td style={{ fontSize: "1.628em" }}>∀</td>
              <td>&amp;#8704;</td>
              <td>&amp;forall;</td>
              <td>\002200</td>
              <td>0x2200</td>
              <td>For all</td>
            </tr>
            <tr>
              <td>10077</td>
              <td style={{ fontSize: "1.628em" }}>❝</td>
              <td>&amp;#10077;</td>
              <td>
              </td>
              <td>\00275d</td>
              <td>0x275d</td>
              <td>Heavy double turned comma quotation mark ornament</td>
            </tr>
            <tr>
              <td>10078</td>
              <td style={{ fontSize: "1.628em" }}>❞</td>
              <td>&amp;#10078;</td>
              <td>
              </td>
              <td>\00275e</td>
              <td>0x275e</td>
              <td>Heavy double comma quotation mark ornament</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="6">Mathematical <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8706</td>
              <td style={{ fontSize: "1.628em" }}>∂</td>
              <td>&amp;#8706;</td>
              <td>&amp;part;</td>
              <td>\002202</td>
              <td>0x2202</td>
              <td>Partial differential</td>
            </tr>
            <tr>
              <td>8707</td>
              <td style={{ fontSize: "1.628em" }}>∃</td>
              <td>&amp;#8707;</td>
              <td>&amp;exist;</td>
              <td>\002203</td>
              <td>0x2203</td>
              <td>There exists</td>
            </tr>
            <tr>
              <td>8709</td>
              <td style={{ fontSize: "1.628em" }}>∅</td>
              <td>&amp;#8709;</td>
              <td>&amp;empty;</td>
              <td>\002205</td>
              <td>0x2205</td>
              <td>Empty set, null set, diameter</td>
            </tr>
            <tr>
              <td>8711</td>
              <td style={{ fontSize: "1.628em" }}>∇</td>
              <td>&amp;#8711;</td>
              <td>&amp;nabla;</td>
              <td>\002207</td>
              <td>0x2207</td>
              <td>Nabla, backward difference</td>
            </tr>
            <tr>
              <td>8712</td>
              <td style={{ fontSize: "1.628em" }}>∈</td>
              <td>&amp;#8712;</td>
              <td>&amp;isin;</td>
              <td>\002208</td>
              <td>0x2208</td>
              <td>Element of</td>
            </tr>
            <tr>
              <td>8713</td>
              <td style={{ fontSize: "1.628em" }}>∉</td>
              <td>&amp;#8713;</td>
              <td>&amp;notin;</td>
              <td>\002209</td>
              <td>0x2209</td>
              <td>Not an element of</td>
            </tr>
            <tr>
              <td>8715</td>
              <td style={{ fontSize: "1.628em" }}>∋</td>
              <td>&amp;#8715;</td>
              <td>&amp;ni;</td>
              <td>\00220b</td>
              <td>0x220b</td>
              <td>Contains as member</td>
            </tr>
            <tr>
              <td>8719</td>
              <td style={{ fontSize: "1.628em" }}>∏</td>
              <td>&amp;#8719;</td>
              <td>&amp;prod;</td>
              <td>\00220f</td>
              <td>0x220f</td>
              <td>n-ary product</td>
            </tr>
            <tr>
              <td>8721</td>
              <td style={{ fontSize: "1.628em" }}>∑</td>
              <td>&amp;#8721;</td>
              <td>&amp;sum;</td>
              <td>\002211</td>
              <td>0x2211</td>
              <td>n-ary sumation</td>
            </tr>
            <tr>
              <td>8722</td>
              <td style={{ fontSize: "1.628em" }}>−</td>
              <td>&amp;#8722;</td>
              <td>&amp;minus;</td>
              <td>\002212</td>
              <td>0x2212</td>
              <td>Minus sign</td>
            </tr>
            <tr>
              <td>8723</td>
              <td style={{ fontSize: "1.628em" }}>∓</td>
              <td>&amp;#8723;</td>
              <td>
              </td>
              <td>\002213</td>
              <td>0x2213</td>
              <td>Minus-or-plus sign</td>
            </tr>
            <tr>
              <td>8724</td>
              <td style={{ fontSize: "1.628em" }}>∔</td>
              <td>&amp;#8724;</td>
              <td>
              </td>
              <td>\002214</td>
              <td>0x2214</td>
              <td>Dot plus</td>
            </tr>
            <tr>
              <td>8725</td>
              <td style={{ fontSize: "1.628em" }}>∕</td>
              <td>&amp;#8725;</td>
              <td>
              </td>
              <td>\002215</td>
              <td>0x2215</td>
              <td>Division slash</td>
            </tr>
            <tr>
              <td>8726</td>
              <td style={{ fontSize: "1.628em" }}>∖</td>
              <td>&amp;#8726;</td>
              <td>
              </td>
              <td>\002216</td>
              <td>0x2216</td>
              <td>Set minus</td>
            </tr>
            <tr>
              <td>8727</td>
              <td style={{ fontSize: "1.628em" }}>∗</td>
              <td>&amp;#8727;</td>
              <td>&amp;lowast;</td>
              <td>\002217</td>
              <td>0x2217</td>
              <td>Asterisk operator</td>
            </tr>
            <tr>
              <td>8730</td>
              <td style={{ fontSize: "1.628em" }}>√</td>
              <td>&amp;#8730;</td>
              <td>&amp;radic;</td>
              <td>\00221a</td>
              <td>0x221a</td>
              <td>Square root</td>
            </tr>
            <tr>
              <td>8731</td>
              <td style={{ fontSize: "1.628em" }}>∛</td>
              <td>&amp;#8731;</td>
              <td>
              </td>
              <td>\00221b</td>
              <td>0x221b</td>
              <td>Cube Root</td>
            </tr>
            <tr>
              <td>8732</td>
              <td style={{ fontSize: "1.628em" }}>∜</td>
              <td>&amp;#8732;</td>
              <td>
              </td>
              <td>\00221c</td>
              <td>0x221c</td>
              <td>Root</td>
            </tr>
            <tr>
              <td>8733</td>
              <td style={{ fontSize: "1.628em" }}>∝</td>
              <td>&amp;#8733;</td>
              <td>&amp;prop;</td>
              <td>\00221d</td>
              <td>0x221d</td>
              <td>Proportional to</td>
            </tr>
            <tr>
              <td>8734</td>
              <td style={{ fontSize: "1.628em" }}>∞</td>
              <td>&amp;#8734;</td>
              <td>&amp;infin;</td>
              <td>\00221e</td>
              <td>0x221e</td>
              <td>Infinity</td>
            </tr>
            <tr>
              <td>8736</td>
              <td style={{ fontSize: "1.628em" }}>∠</td>
              <td>&amp;#8736;</td>
              <td>&amp;ang;</td>
              <td>\002220</td>
              <td>0x2220</td>
              <td>Angle</td>
            </tr>
            <tr>
              <td>8743</td>
              <td style={{ fontSize: "1.628em" }}>∧</td>
              <td>&amp;#8743;</td>
              <td>&amp;and;</td>
              <td>\002227</td>
              <td>0x2227</td>
              <td>Logical AND, or wedge</td>
            </tr>
            <tr>
              <td>8745</td>
              <td style={{ fontSize: "1.628em" }}>∩</td>
              <td>&amp;#8745;</td>
              <td>&amp;cap;</td>
              <td>\002229</td>
              <td>0x2229</td>
              <td>Intersection, or cap</td>
            </tr>
            <tr>
              <td>8746</td>
              <td style={{ fontSize: "1.628em" }}>∪</td>
              <td>&amp;#8746;</td>
              <td>&amp;cup;</td>
              <td>\00222a</td>
              <td>0x222a</td>
              <td>Union, or cup</td>
            </tr>
            <tr>
              <td>8747</td>
              <td style={{ fontSize: "1.628em" }}>∫</td>
              <td>&amp;#8747;</td>
              <td>&amp;int;</td>
              <td>\00222b</td>
              <td>0x222b</td>
              <td>Integral</td>
            </tr>
            <tr>
              <td>8748</td>
              <td style={{ fontSize: "1.628em" }}>∬</td>
              <td>&amp;#8748;</td>
              <td>
              </td>
              <td>\00222c</td>
              <td>0x222c</td>
              <td>Double integral</td>
            </tr>
            <tr>
              <td>8749</td>
              <td style={{ fontSize: "1.628em" }}>∭</td>
              <td>&amp;#8749;</td>
              <td>
              </td>
              <td>\00222d</td>
              <td>0x222d</td>
              <td>Triple integral</td>
            </tr>
            <tr>
              <td>8750</td>
              <td style={{ fontSize: "1.628em" }}>∮</td>
              <td>&amp;#8750;</td>
              <td>
              </td>
              <td>\00222e</td>
              <td>0x222e</td>
              <td>Line integral</td>
            </tr>
            <tr>
              <td>8751</td>
              <td style={{ fontSize: "1.628em" }}>∯</td>
              <td>&amp;#8751;</td>
              <td>
              </td>
              <td>\00222f</td>
              <td>0x222f</td>
              <td>Double line integral</td>
            </tr>
            <tr>
              <td>8752</td>
              <td style={{ fontSize: "1.628em" }}>∰</td>
              <td>&amp;#8752;</td>
              <td>
              </td>
              <td>\002230</td>
              <td>0x2230</td>
              <td>Triple line integral</td>
            </tr>
            <tr>
              <td>8756</td>
              <td style={{ fontSize: "1.628em" }}>∴</td>
              <td>&amp;#8756;</td>
              <td>&amp;there4;</td>
              <td>\002234</td>
              <td>0x2234</td>
              <td>Therefore</td>
            </tr>
            <tr>
              <td>8757</td>
              <td style={{ fontSize: "1.628em" }}>∵</td>
              <td>&amp;#8757;</td>
              <td>
              </td>
              <td>\002235</td>
              <td>0x2235</td>
              <td>Because sign</td>
            </tr>
            <tr>
              <td>8758</td>
              <td style={{ fontSize: "1.628em" }}>∶</td>
              <td>&amp;#8758;</td>
              <td>
              </td>
              <td>\002236</td>
              <td>0x2236</td>
              <td>Ratio</td>
            </tr>
            <tr>
              <td>8759</td>
              <td style={{ fontSize: "1.628em" }}>∷</td>
              <td>&amp;#8759;</td>
              <td>
              </td>
              <td>\002237</td>
              <td>0x2237</td>
              <td>Proportion</td>
            </tr>
            <tr>
              <td>8763</td>
              <td style={{ fontSize: "1.628em" }}>∻</td>
              <td>&amp;#8763;</td>
              <td>
              </td>
              <td>\00223b</td>
              <td>0x223b</td>
              <td>Homothetic preferences</td>
            </tr>
            <tr>
              <td>8764</td>
              <td style={{ fontSize: "1.628em" }}>∼</td>
              <td>&amp;#8764;</td>
              <td>&amp;sim;</td>
              <td>\00223c</td>
              <td>0x223c</td>
              <td>Tilde operator, or varies with</td>
            </tr>
            <tr>
              <td>8765</td>
              <td style={{ fontSize: "1.628em" }}>∽</td>
              <td>&amp;#8765;</td>
              <td>
              </td>
              <td>\00223d</td>
              <td>0x223d</td>
              <td>Approximation</td>
            </tr>
            <tr>
              <td>8768</td>
              <td style={{ fontSize: "1.628em" }}>≀</td>
              <td>&amp;#8768;</td>
              <td>
              </td>
              <td>\002240</td>
              <td>0x2240</td>
              <td>Wreath product</td>
            </tr>
            <tr>
              <td>8773</td>
              <td style={{ fontSize: "1.628em" }}>≅</td>
              <td>&amp;#8773;</td>
              <td>&amp;cong;</td>
              <td>\002245</td>
              <td>0x2245</td>
              <td>Approximately equal to</td>
            </tr>
            <tr>
              <td>8776</td>
              <td style={{ fontSize: "1.628em" }}>≈</td>
              <td>&amp;#8776;</td>
              <td>&amp;asymp;</td>
              <td>\002248</td>
              <td>0x2248</td>
              <td>Almost equal to, asymptotic to</td>
            </tr>
            <tr>
              <td>8800</td>
              <td style={{ fontSize: "1.628em" }}>≠</td>
              <td>&amp;#8800;</td>
              <td>&amp;ne;</td>
              <td>\002260</td>
              <td>0x2260</td>
              <td>Not equal to</td>
            </tr>
            <tr>
              <td>8801</td>
              <td style={{ fontSize: "1.628em" }}>≡</td>
              <td>&amp;#8801;</td>
              <td>&amp;equiv;</td>
              <td>\002261</td>
              <td>0x2261</td>
              <td>Identical to</td>
            </tr>
            <tr>
              <td>8804</td>
              <td style={{ fontSize: "1.628em" }}>≤</td>
              <td>&amp;#8804;</td>
              <td>&amp;le;</td>
              <td>\002264</td>
              <td>0x2264</td>
              <td>Less-than or equal to</td>
            </tr>
            <tr>
              <td>8805</td>
              <td style={{ fontSize: "1.628em" }}>≥</td>
              <td>&amp;#8805;</td>
              <td>&amp;ge;</td>
              <td>\002265</td>
              <td>0x2265</td>
              <td>Greater-than or equal to</td>
            </tr>
            <tr>
              <td>8834</td>
              <td style={{ fontSize: "1.628em" }}>⊂</td>
              <td>&amp;#8834;</td>
              <td>&amp;sub;</td>
              <td>\002282</td>
              <td>0x2282</td>
              <td>Subset of</td>
            </tr>
            <tr>
              <td>8835</td>
              <td style={{ fontSize: "1.628em" }}>⊃</td>
              <td>&amp;#8835;</td>
              <td>&amp;sup;</td>
              <td>\002283</td>
              <td>0x2283</td>
              <td>Superset of</td>
            </tr>
            <tr>
              <td>8836</td>
              <td style={{ fontSize: "1.628em" }}>⊄</td>
              <td>&amp;#8836;</td>
              <td>&amp;nsub;</td>
              <td>\002284</td>
              <td>0x2284</td>
              <td>Not a subset of</td>
            </tr>
            <tr>
              <td>8838</td>
              <td style={{ fontSize: "1.628em" }}>⊆</td>
              <td>&amp;#8838;</td>
              <td>&amp;sube;</td>
              <td>\002286</td>
              <td>0x2286</td>
              <td>Subset of or equal to</td>
            </tr>
            <tr>
              <td>8839</td>
              <td style={{ fontSize: "1.628em" }}>⊇</td>
              <td>&amp;#8839;</td>
              <td>&amp;supe;</td>
              <td>\002287</td>
              <td>0x2287</td>
              <td>Superset of or equal to</td>
            </tr>
            <tr>
              <td>8853</td>
              <td style={{ fontSize: "1.628em" }}>⊕</td>
              <td>&amp;#8853;</td>
              <td>&amp;oplus;</td>
              <td>\002295</td>
              <td>0x2295</td>
              <td>Circled plus, direct sum</td>
            </tr>
            <tr>
              <td>8854</td>
              <td style={{ fontSize: "1.628em" }}>⊖</td>
              <td>&amp;#8854;</td>
              <td>
              </td>
              <td>\002296</td>
              <td>0x2296</td>
              <td>Circled minus</td>
            </tr>
            <tr>
              <td>8855</td>
              <td style={{ fontSize: "1.628em" }}>⊗</td>
              <td>&amp;#8855;</td>
              <td>&amp;otimes;</td>
              <td>\002297</td>
              <td>0x2297</td>
              <td>Circled times, vector product</td>
            </tr>
            <tr>
              <td>8856</td>
              <td style={{ fontSize: "1.628em" }}>⊘</td>
              <td>&amp;#8856;</td>
              <td>
              </td>
              <td>\002298</td>
              <td>0x2298</td>
              <td>Circled divide</td>
            </tr>
            <tr>
              <td>8857</td>
              <td style={{ fontSize: "1.628em" }}>⊙</td>
              <td>&amp;#8857;</td>
              <td>
              </td>
              <td>\002299</td>
              <td>0x2299</td>
              <td>Circled dot</td>
            </tr>
            <tr>
              <td>8858</td>
              <td style={{ fontSize: "1.628em" }}>⊚</td>
              <td>&amp;#8858;</td>
              <td>
              </td>
              <td>\00229a</td>
              <td>0x229a</td>
              <td>Circled circle</td>
            </tr>
            <tr>
              <td>8859</td>
              <td style={{ fontSize: "1.628em" }}>⊛</td>
              <td>&amp;#8859;</td>
              <td>
              </td>
              <td>\00229b</td>
              <td>0x229b</td>
              <td>Circled asterisk</td>
            </tr>
            <tr>
              <td>8860</td>
              <td style={{ fontSize: "1.628em" }}>⊜</td>
              <td>&amp;#8860;</td>
              <td>
              </td>
              <td>\00229c</td>
              <td>0x229c</td>
              <td>Circled equals</td>
            </tr>
            <tr>
              <td>8861</td>
              <td style={{ fontSize: "1.628em" }}>⊝</td>
              <td>&amp;#8861;</td>
              <td>
              </td>
              <td>\00229d</td>
              <td>0x229d</td>
              <td>Circled minus</td>
            </tr>
            <tr>
              <td>8869</td>
              <td style={{ fontSize: "1.628em" }}>⊥</td>
              <td>&amp;#8869;</td>
              <td>&amp;perp;</td>
              <td>\0022a5</td>
              <td>0x22a5</td>
              <td>Up tack, orthogonal to, perpendicular</td>
            </tr>
            <tr>
              <td>8870</td>
              <td style={{ fontSize: "1.628em" }}>⊦</td>
              <td>&amp;#8870;</td>
              <td>&amp;or;</td>
              <td>\0022a6</td>
              <td>0x22a6</td>
              <td>Logical OR, or vee</td>
            </tr>
            <tr>
              <td>8901</td>
              <td style={{ fontSize: "1.628em" }}>⋅</td>
              <td>&amp;#8901;</td>
              <td>&amp;sdot;</td>
              <td>\0022c5</td>
              <td>0x22c5</td>
              <td>Dot operator</td>
            </tr>
            <tr>
              <td>8968</td>
              <td style={{ fontSize: "1.628em" }}>⌈</td>
              <td>&amp;#8968;</td>
              <td>
              </td>
              <td>\002308</td>
              <td>0x2308</td>
              <td>Left ceiling, a.k.a. apl upstile</td>
            </tr>
            <tr>
              <td>8969</td>
              <td style={{ fontSize: "1.628em" }}>⌉</td>
              <td>&amp;#8969;</td>
              <td>
              </td>
              <td>\002309</td>
              <td>0x2309</td>
              <td>Right ceiling</td>
            </tr>
            <tr>
              <td>8970</td>
              <td style={{ fontSize: "1.628em" }}>⌊</td>
              <td>&amp;#8970;</td>
              <td>
              </td>
              <td>\00230a</td>
              <td>0x230a</td>
              <td>Left floor, apl downstile</td>
            </tr>
            <tr>
              <td>8971</td>
              <td style={{ fontSize: "1.628em" }}>⌋</td>
              <td>&amp;#8971;</td>
              <td>
              </td>
              <td>\00230b</td>
              <td>0x230b</td>
              <td>Right floor</td>
            </tr>
            <tr>
              <td>9642</td>
              <td style={{ fontSize: "1.628em" }}>▪</td>
              <td>&amp;#9642;</td>
              <td>
              </td>
              <td>\0025aa</td>
              <td>0x25aa</td>
              <td>Black small square</td>
            </tr>
            <tr>
              <td>9673</td>
              <td style={{ fontSize: "1.628em" }}>◉</td>
              <td>&amp;#9673;</td>
              <td>
              </td>
              <td>\0025c9</td>
              <td>0x25c9</td>
              <td>Fisheye</td>
            </tr>
            <tr>
              <td>9674</td>
              <td style={{ fontSize: "1.628em" }}>◊</td>
              <td>&amp;#9674;</td>
              <td>
              </td>
              <td>\0025ca</td>
              <td>0x25ca</td>
              <td>Lozenge</td>
            </tr>
            <tr>
              <td>9675</td>
              <td style={{ fontSize: "1.628em" }}>○</td>
              <td>&amp;#9675;</td>
              <td>
              </td>
              <td>\0025cb</td>
              <td>0x25cb</td>
              <td>White circle</td>
            </tr>
            <tr>
              <td>9678</td>
              <td style={{ fontSize: "1.628em" }}>◎</td>
              <td>&amp;#9678;</td>
              <td>
              </td>
              <td>\0025ce</td>
              <td>0x25ce</td>
              <td>Bullseye</td>
            </tr>
            <tr>
              <td>9734</td>
              <td style={{ fontSize: "1.628em" }}>☆</td>
              <td>&amp;#9734;</td>
              <td>
              </td>
              <td>\002606</td>
              <td>0x2606</td>
              <td>White 5 point star</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="7">Fractions <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>188</td>
              <td style={{ fontSize: "1.628em" }}>¼</td>
              <td>&amp;#188;</td>
              <td>&amp;frac14;</td>
              <td>\00bc</td>
              <td>0xbc</td>
              <td>Fraction one quarter</td>
            </tr>
            <tr>
              <td>189</td>
              <td style={{ fontSize: "1.628em" }}>½</td>
              <td>&amp;#189;</td>
              <td>&amp;frac12;</td>
              <td>\00bd</td>
              <td>0xbd</td>
              <td>Fraction one half</td>
            </tr>
            <tr>
              <td>190</td>
              <td style={{ fontSize: "1.628em" }}>¾</td>
              <td>&amp;#190;</td>
              <td>&amp;frac34;</td>
              <td>\00be</td>
              <td>0xbe</td>
              <td>Fraction three quarters</td>
            </tr>
            <tr>
              <td>8533</td>
              <td style={{ fontSize: "1.628em" }}>⅕</td>
              <td>&amp;#8533;</td>
              <td>
              </td>
              <td>\002155</td>
              <td>0x2155</td>
              <td>Fraction one fifth</td>
            </tr>
            <tr>
              <td>8534</td>
              <td style={{ fontSize: "1.628em" }}>⅖</td>
              <td>&amp;#8534;</td>
              <td>
              </td>
              <td>\002156</td>
              <td>0x2156</td>
              <td>Fraction two fifths</td>
            </tr>
            <tr>
              <td>8535</td>
              <td style={{ fontSize: "1.628em" }}>⅗</td>
              <td>&amp;#8535;</td>
              <td>
              </td>
              <td>\002157</td>
              <td>0x2157</td>
              <td>Fraction three fifths</td>
            </tr>
            <tr>
              <td>8536</td>
              <td style={{ fontSize: "1.628em" }}>⅘</td>
              <td>&amp;#8536;</td>
              <td>
              </td>
              <td>\002158</td>
              <td>0x2158</td>
              <td>Fraction four fifths</td>
            </tr>
            <tr>
              <td>8537</td>
              <td style={{ fontSize: "1.628em" }}>⅙</td>
              <td>&amp;#8537;</td>
              <td>
              </td>
              <td>\002159</td>
              <td>0x2159</td>
              <td>Fraction one sixth</td>
            </tr>
            <tr>
              <td>8538</td>
              <td style={{ fontSize: "1.628em" }}>⅚</td>
              <td>&amp;#8538;</td>
              <td>
              </td>
              <td>\00215a</td>
              <td>0x215a</td>
              <td>Fraction five sixths</td>
            </tr>
            <tr>
              <td>8539</td>
              <td style={{ fontSize: "1.628em" }}>⅛</td>
              <td>&amp;#8539;</td>
              <td>
              </td>
              <td>\00215b</td>
              <td>0x215b</td>
              <td>Fraction one eighth</td>
            </tr>
            <tr>
              <td>8540</td>
              <td style={{ fontSize: "1.628em" }}>⅜</td>
              <td>&amp;#8540;</td>
              <td>
              </td>
              <td>\00215c</td>
              <td>0x215c</td>
              <td>Fraction three eighths</td>
            </tr>
            <tr>
              <td>8541</td>
              <td style={{ fontSize: "1.628em" }}>⅝</td>
              <td>&amp;#8541;</td>
              <td>
              </td>
              <td>\00215d</td>
              <td>0x215d</td>
              <td>Fraction five eighths</td>
            </tr>
            <tr>
              <td>8542</td>
              <td style={{ fontSize: "1.628em" }}>⅞</td>
              <td>&amp;#8542;</td>
              <td>
              </td>
              <td>\00215e</td>
              <td>0x215e</td>
              <td>Fraction seven eighths</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="8">Arrows <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8592</td>
              <td style={{ fontSize: "1.628em" }}>←</td>
              <td>&amp;#8592;</td>
              <td>
              </td>
              <td>\002190</td>
              <td>0x2190</td>
              <td>Leftwards arrow</td>
            </tr>
            <tr>
              <td>8593</td>
              <td style={{ fontSize: "1.628em" }}>↑</td>
              <td>&amp;#8593;</td>
              <td>
              </td>
              <td>\002191</td>
              <td>0x2191</td>
              <td>Upwards arrow</td>
            </tr>
            <tr>
              <td>8594</td>
              <td style={{ fontSize: "1.628em" }}>→</td>
              <td>&amp;#8594;</td>
              <td>
              </td>
              <td>\002192</td>
              <td>0x2192</td>
              <td>Rightwards arrow</td>
            </tr>
            <tr>
              <td>8595</td>
              <td style={{ fontSize: "1.628em" }}>↓</td>
              <td>&amp;#8595;</td>
              <td>
              </td>
              <td>\002193</td>
              <td>0x2193</td>
              <td>Downwards arrow</td>
            </tr>
            <tr>
              <td>8596</td>
              <td style={{ fontSize: "1.628em" }}>↔</td>
              <td>&amp;#8596;</td>
              <td>
              </td>
              <td>\002194</td>
              <td>0x2194</td>
              <td>Left right arrow</td>
            </tr>
            <tr>
              <td>8597</td>
              <td style={{ fontSize: "1.628em" }}>↕</td>
              <td>&amp;#8597;</td>
              <td>
              </td>
              <td>\002195</td>
              <td>0x2195</td>
              <td>Up down arrow</td>
            </tr>
            <tr>
              <td>8598</td>
              <td style={{ fontSize: "1.628em" }}>↖</td>
              <td>&amp;#8598;</td>
              <td>
              </td>
              <td>\002196</td>
              <td>0x2196</td>
              <td>North west arrow</td>
            </tr>
            <tr>
              <td>8599</td>
              <td style={{ fontSize: "1.628em" }}>↗</td>
              <td>&amp;#8599;</td>
              <td>
              </td>
              <td>\002197</td>
              <td>0x2197</td>
              <td>North east arrow</td>
            </tr>
            <tr>
              <td>8600</td>
              <td style={{ fontSize: "1.628em" }}>↘</td>
              <td>&amp;#8600;</td>
              <td>
              </td>
              <td>\002198</td>
              <td>0x2198</td>
              <td>South east arrow</td>
            </tr>
            <tr>
              <td>8601</td>
              <td style={{ fontSize: "1.628em" }}>↙</td>
              <td>&amp;#8601;</td>
              <td>
              </td>
              <td>\002199</td>
              <td>0x2199</td>
              <td>South west arrow</td>
            </tr>
            <tr>
              <td>8602</td>
              <td style={{ fontSize: "1.628em" }}>↚</td>
              <td>&amp;#8602;</td>
              <td>
              </td>
              <td>\00219a</td>
              <td>0x219a</td>
              <td>Leftwards arrow with stroke</td>
            </tr>
            <tr>
              <td>8603</td>
              <td style={{ fontSize: "1.628em" }}>↛</td>
              <td>&amp;#8603;</td>
              <td>
              </td>
              <td>\00219b</td>
              <td>0x219b</td>
              <td>Rightwards arrow with stroke</td>
            </tr>
            <tr>
              <td>8604</td>
              <td style={{ fontSize: "1.628em" }}>↜</td>
              <td>&amp;#8604;</td>
              <td>
              </td>
              <td>\00219c</td>
              <td>0x219c</td>
              <td>Leftwards wave arrow</td>
            </tr>
            <tr>
              <td>8605</td>
              <td style={{ fontSize: "1.628em" }}>↝</td>
              <td>&amp;#8605;</td>
              <td>
              </td>
              <td>\00219d</td>
              <td>0x219d</td>
              <td>Rightwards wave arrow</td>
            </tr>
            <tr>
              <td>8606</td>
              <td style={{ fontSize: "1.628em" }}>↞</td>
              <td>&amp;#8606;</td>
              <td>
              </td>
              <td>\00219e</td>
              <td>0x219e</td>
              <td>Leftwards two headed arrow</td>
            </tr>
            <tr>
              <td>8607</td>
              <td style={{ fontSize: "1.628em" }}>↟</td>
              <td>&amp;#8607;</td>
              <td>
              </td>
              <td>\00219f</td>
              <td>0x219f</td>
              <td>Upwards two headed arrow</td>
            </tr>
            <tr>
              <td>8608</td>
              <td style={{ fontSize: "1.628em" }}>↠</td>
              <td>&amp;#8608;</td>
              <td>
              </td>
              <td>\0021a0</td>
              <td>0x21a0</td>
              <td>Rightwards two headed arrow</td>
            </tr>
            <tr>
              <td>8609</td>
              <td style={{ fontSize: "1.628em" }}>↡</td>
              <td>&amp;#8609;</td>
              <td>
              </td>
              <td>\0021a1</td>
              <td>0x21a1</td>
              <td>Downwards two headed arrow</td>
            </tr>
            <tr>
              <td>8610</td>
              <td style={{ fontSize: "1.628em" }}>↢</td>
              <td>&amp;#8610;</td>
              <td>
              </td>
              <td>\0021a2</td>
              <td>0x21a2</td>
              <td>Leftwards arrow with tail</td>
            </tr>
            <tr>
              <td>8611</td>
              <td style={{ fontSize: "1.628em" }}>↣</td>
              <td>&amp;#8611;</td>
              <td>
              </td>
              <td>\0021a3</td>
              <td>0x21a3</td>
              <td>Rightwards arrow with tail</td>
            </tr>
            <tr>
              <td>8612</td>
              <td style={{ fontSize: "1.628em" }}>↤</td>
              <td>&amp;#8612;</td>
              <td>
              </td>
              <td>\0021a4</td>
              <td>0x21a4</td>
              <td>Leftwards arrow from bar</td>
            </tr>
            <tr>
              <td>8613</td>
              <td style={{ fontSize: "1.628em" }}>↥</td>
              <td>&amp;#8613;</td>
              <td>
              </td>
              <td>\0021a5</td>
              <td>0x21a5</td>
              <td>Upwards arrow from bar</td>
            </tr>
            <tr>
              <td>8614</td>
              <td style={{ fontSize: "1.628em" }}>↦</td>
              <td>&amp;#8614;</td>
              <td>
              </td>
              <td>\0021a6</td>
              <td>0x21a6</td>
              <td>Downwards arrow from bar</td>
            </tr>
            <tr>
              <td>8616</td>
              <td style={{ fontSize: "1.628em" }}>↨</td>
              <td>&amp;#8616;</td>
              <td>
              </td>
              <td>\0021a8</td>
              <td>0x21a8</td>
              <td>Up down arrow with base</td>
            </tr>
            <tr>
              <td>8617</td>
              <td style={{ fontSize: "1.628em" }}>↩</td>
              <td>&amp;#8617;</td>
              <td>
              </td>
              <td>\0021a9</td>
              <td>0x21a9</td>
              <td>Leftwards arrow with hook</td>
            </tr>
            <tr>
              <td>8618</td>
              <td style={{ fontSize: "1.628em" }}>↪</td>
              <td>&amp;#8618;</td>
              <td>
              </td>
              <td>\0021aa</td>
              <td>0x21aa</td>
              <td>Rightwards arrow with hook</td>
            </tr>
            <tr>
              <td>8619</td>
              <td style={{ fontSize: "1.628em" }}>↫</td>
              <td>&amp;#8619;</td>
              <td>
              </td>
              <td>\0021ab</td>
              <td>0x21ab</td>
              <td>Leftwards arrow with loop</td>
            </tr>
            <tr>
              <td>8620</td>
              <td style={{ fontSize: "1.628em" }}>↬</td>
              <td>&amp;#8620;</td>
              <td>
              </td>
              <td>\0021ac</td>
              <td>0x21ac</td>
              <td>Rightwards arrow with loop</td>
            </tr>
            <tr>
              <td>8621</td>
              <td style={{ fontSize: "1.628em" }}>↭</td>
              <td>&amp;#8621;</td>
              <td>
              </td>
              <td>\0021ad</td>
              <td>0x21ad</td>
              <td>Left right wave arrow</td>
            </tr>
            <tr>
              <td>8622</td>
              <td style={{ fontSize: "1.628em" }}>↮</td>
              <td>&amp;#8622;</td>
              <td>
              </td>
              <td>\0021ae</td>
              <td>0x21ae</td>
              <td>Left right arrow with stroke</td>
            </tr>
            <tr>
              <td>8623</td>
              <td style={{ fontSize: "1.628em" }}>↯</td>
              <td>&amp;#8623;</td>
              <td>
              </td>
              <td>\0021af</td>
              <td>0x21af</td>
              <td>Downwards zigzag arrow</td>
            </tr>
            <tr>
              <td>8624</td>
              <td style={{ fontSize: "1.628em" }}>↰</td>
              <td>&amp;#8624;</td>
              <td>
              </td>
              <td>\0021b0</td>
              <td>0x21b0</td>
              <td>Upwards arrow with tip leftwards</td>
            </tr>
            <tr>
              <td>8625</td>
              <td style={{ fontSize: "1.628em" }}>↱</td>
              <td>&amp;#8625;</td>
              <td>
              </td>
              <td>\0021b1</td>
              <td>0x21b1</td>
              <td>Upwards arrow with tip rightwards</td>
            </tr>
            <tr>
              <td>8626</td>
              <td style={{ fontSize: "1.628em" }}>↲</td>
              <td>&amp;#8626;</td>
              <td>
              </td>
              <td>\0021b2</td>
              <td>0x21b2</td>
              <td>Downwards arrow with tip leftwards</td>
            </tr>
            <tr>
              <td>8627</td>
              <td style={{ fontSize: "1.628em" }}>↳</td>
              <td>&amp;#8627;</td>
              <td>
              </td>
              <td>\0021b3</td>
              <td>0x21b3</td>
              <td>Downwards arrow with tip rightwards</td>
            </tr>
            <tr>
              <td>8628</td>
              <td style={{ fontSize: "1.628em" }}>↴</td>
              <td>&amp;#8628;</td>
              <td>
              </td>
              <td>\0021b4</td>
              <td>0x21b4</td>
              <td>Rightwards arrow with corner downwards</td>
            </tr>
            <tr>
              <td>8629</td>
              <td style={{ fontSize: "1.628em" }}>↵</td>
              <td>&amp;#8629;</td>
              <td>
              </td>
              <td>\0021b5</td>
              <td>0x21b5</td>
              <td>Downwards arrow with corner leftwards</td>
            </tr>
            <tr>
              <td>8630</td>
              <td style={{ fontSize: "1.628em" }}>↶</td>
              <td>&amp;#8630;</td>
              <td>
              </td>
              <td>\0021b6</td>
              <td>0x21b6</td>
              <td>Anticlockwise top semicircle arrow</td>
            </tr>
            <tr>
              <td>8631</td>
              <td style={{ fontSize: "1.628em" }}>↷</td>
              <td>&amp;#8631;</td>
              <td>
              </td>
              <td>\0021b7</td>
              <td>0x21b7</td>
              <td>Clockwise top semicircle arrow</td>
            </tr>
            <tr>
              <td>8632</td>
              <td style={{ fontSize: "1.628em" }}>↸</td>
              <td>&amp;#8632;</td>
              <td>
              </td>
              <td>\0021b8</td>
              <td>0x21b8</td>
              <td>North west arrow to long bar</td>
            </tr>
            <tr>
              <td>8633</td>
              <td style={{ fontSize: "1.628em" }}>↹</td>
              <td>&amp;#8633;</td>
              <td>
              </td>
              <td>\0021b9</td>
              <td>0x21b9</td>
              <td>Leftwards arrow to bar over rightwards arrow to bar</td>
            </tr>
            <tr>
              <td>8634</td>
              <td style={{ fontSize: "1.628em" }}>↺</td>
              <td>&amp;#8634;</td>
              <td>
              </td>
              <td>\0021ba</td>
              <td>0x21ba</td>
              <td>Anticlockwise open circle arrow</td>
            </tr>
            <tr>
              <td>8635</td>
              <td style={{ fontSize: "1.628em" }}>↻</td>
              <td>&amp;#8635;</td>
              <td>
              </td>
              <td>\0021bb</td>
              <td>0x21bb</td>
              <td>Clockwise open circle arrow</td>
            </tr>
            <tr>
              <td>8636</td>
              <td style={{ fontSize: "1.628em" }}>↼</td>
              <td>&amp;#8636;</td>
              <td>
              </td>
              <td>\0021bc</td>
              <td>0x21bc</td>
              <td>Leftwards harpoon with barb upwards</td>
            </tr>
            <tr>
              <td>8637</td>
              <td style={{ fontSize: "1.628em" }}>↽</td>
              <td>&amp;#8637;</td>
              <td>
              </td>
              <td>\0021bd</td>
              <td>0x21bd</td>
              <td>Leftwards harpoon with barb downwards</td>
            </tr>
            <tr>
              <td>8638</td>
              <td style={{ fontSize: "1.628em" }}>↾</td>
              <td>&amp;#8638;</td>
              <td>
              </td>
              <td>\0021be</td>
              <td>0x21be</td>
              <td>Upwards harpoon with barb rightwards</td>
            </tr>
            <tr>
              <td>8639</td>
              <td style={{ fontSize: "1.628em" }}>↿</td>
              <td>&amp;#8639;</td>
              <td>
              </td>
              <td>\0021bf</td>
              <td>0x21bf</td>
              <td>Upwards harpoon with barb leftwards</td>
            </tr>
            <tr>
              <td>8640</td>
              <td style={{ fontSize: "1.628em" }}>⇀</td>
              <td>&amp;#8640;</td>
              <td>
              </td>
              <td>\0021c0</td>
              <td>0x21c0</td>
              <td>Rightwards harpoon with barb upwards</td>
            </tr>
            <tr>
              <td>8641</td>
              <td style={{ fontSize: "1.628em" }}>⇁</td>
              <td>&amp;#8641;</td>
              <td>
              </td>
              <td>\0021c1</td>
              <td>0x21c1</td>
              <td>Rightwards harpoon with barb downwards</td>
            </tr>
            <tr>
              <td>8642</td>
              <td style={{ fontSize: "1.628em" }}>⇂</td>
              <td>&amp;#8642;</td>
              <td>
              </td>
              <td>\0021c2</td>
              <td>0x21c2</td>
              <td>Downwards harpoon with barb rightwards</td>
            </tr>
            <tr>
              <td>8643</td>
              <td style={{ fontSize: "1.628em" }}>⇃</td>
              <td>&amp;#8643;</td>
              <td>
              </td>
              <td>\0021c3</td>
              <td>0x21c3</td>
              <td>Downwards harpoon with barb leftwards</td>
            </tr>
            <tr>
              <td>8644</td>
              <td style={{ fontSize: "1.628em" }}>⇄</td>
              <td>&amp;#8644;</td>
              <td>
              </td>
              <td>\0021c4</td>
              <td>0x21c4</td>
              <td>Rightwards arrow over leftwards arrow</td>
            </tr>
            <tr>
              <td>8645</td>
              <td style={{ fontSize: "1.628em" }}>⇅</td>
              <td>&amp;#8645;</td>
              <td>
              </td>
              <td>\0021c5</td>
              <td>0x21c5</td>
              <td>Upwards arrow leftwards of downwards arrow</td>
            </tr>
            <tr>
              <td>8646</td>
              <td style={{ fontSize: "1.628em" }}>⇆</td>
              <td>&amp;#8646;</td>
              <td>
              </td>
              <td>\0021c6</td>
              <td>0x21c6</td>
              <td>Leftwards arrow over rightwards arrow</td>
            </tr>
            <tr>
              <td>8647</td>
              <td style={{ fontSize: "1.628em" }}>⇇</td>
              <td>&amp;#8647;</td>
              <td>
              </td>
              <td>\0021c7</td>
              <td>0x21c7</td>
              <td>Leftwards paired arrows</td>
            </tr>
            <tr>
              <td>8648</td>
              <td style={{ fontSize: "1.628em" }}>⇈</td>
              <td>&amp;#8648;</td>
              <td>
              </td>
              <td>\0021c8</td>
              <td>0x21c8</td>
              <td>Upwards paired arrows</td>
            </tr>
            <tr>
              <td>8649</td>
              <td style={{ fontSize: "1.628em" }}>⇉</td>
              <td>&amp;#8649;</td>
              <td>
              </td>
              <td>\0021c9</td>
              <td>0x21c9</td>
              <td>Rightwards paired arrows</td>
            </tr>
            <tr>
              <td>8650</td>
              <td style={{ fontSize: "1.628em" }}>⇊</td>
              <td>&amp;#8650;</td>
              <td>
              </td>
              <td>\0021ca</td>
              <td>0x21ca</td>
              <td>Downwards paired arrows</td>
            </tr>
            <tr>
              <td>8651</td>
              <td style={{ fontSize: "1.628em" }}>⇋</td>
              <td>&amp;#8651;</td>
              <td>
              </td>
              <td>\0021cb</td>
              <td>0x21cb</td>
              <td>Leftwards harpoon over rightwards harpoon</td>
            </tr>
            <tr>
              <td>8652</td>
              <td style={{ fontSize: "1.628em" }}>⇌</td>
              <td>&amp;#8652;</td>
              <td>
              </td>
              <td>\0021cc</td>
              <td>0x21cc</td>
              <td>Rightwards harpoon over leftwards harpoon</td>
            </tr>
            <tr>
              <td>8653</td>
              <td style={{ fontSize: "1.628em" }}>⇍</td>
              <td>&amp;#8653;</td>
              <td>
              </td>
              <td>\0021cd</td>
              <td>0x21cd</td>
              <td>Leftwards double arrow with stroke</td>
            </tr>
            <tr>
              <td>8654</td>
              <td style={{ fontSize: "1.628em" }}>⇎</td>
              <td>&amp;#8654;</td>
              <td>
              </td>
              <td>\0021ce</td>
              <td>0x21ce</td>
              <td>Left right double arrow with stroke</td>
            </tr>
            <tr>
              <td>8655</td>
              <td style={{ fontSize: "1.628em" }}>⇏</td>
              <td>&amp;#8655;</td>
              <td>
              </td>
              <td>\0021cf</td>
              <td>0x21cf</td>
              <td>Rightwards double arrow with stroke</td>
            </tr>
            <tr>
              <td>8656</td>
              <td style={{ fontSize: "1.628em" }}>⇐</td>
              <td>&amp;#8656;</td>
              <td>
              </td>
              <td>\0021d0</td>
              <td>0x21d0</td>
              <td>Leftwards double arrow</td>
            </tr>
            <tr>
              <td>8657</td>
              <td style={{ fontSize: "1.628em" }}>⇑</td>
              <td>&amp;#8657;</td>
              <td>
              </td>
              <td>\0021d1</td>
              <td>0x21d1</td>
              <td>Upwards double arrow</td>
            </tr>
            <tr>
              <td>8658</td>
              <td style={{ fontSize: "1.628em" }}>⇒</td>
              <td>&amp;#8658;</td>
              <td>
              </td>
              <td>\0021d2</td>
              <td>0x21d2</td>
              <td>Rightwards double arrow</td>
            </tr>
            <tr>
              <td>8659</td>
              <td style={{ fontSize: "1.628em" }}>⇓</td>
              <td>&amp;#8659;</td>
              <td>
              </td>
              <td>\0021d3</td>
              <td>0x21d3</td>
              <td>Downwards double arrow</td>
            </tr>
            <tr>
              <td>8660</td>
              <td style={{ fontSize: "1.628em" }}>⇔</td>
              <td>&amp;#8660;</td>
              <td>
              </td>
              <td>\0021d4</td>
              <td>0x21d4</td>
              <td>Left right double arrow</td>
            </tr>
            <tr>
              <td>8661</td>
              <td style={{ fontSize: "1.628em" }}>⇕</td>
              <td>&amp;#8661;</td>
              <td>
              </td>
              <td>\0021d5</td>
              <td>0x21d5</td>
              <td>Up down double arrow</td>
            </tr>
            <tr>
              <td>8662</td>
              <td style={{ fontSize: "1.628em" }}>⇖</td>
              <td>&amp;#8662;</td>
              <td>
              </td>
              <td>\0021d6</td>
              <td>0x21d6</td>
              <td>North west double arrow</td>
            </tr>
            <tr>
              <td>8663</td>
              <td style={{ fontSize: "1.628em" }}>⇗</td>
              <td>&amp;#8663;</td>
              <td>
              </td>
              <td>\0021d7</td>
              <td>0x21d7</td>
              <td>North east double arrow</td>
            </tr>
            <tr>
              <td>8664</td>
              <td style={{ fontSize: "1.628em" }}>⇘</td>
              <td>&amp;#8664;</td>
              <td>
              </td>
              <td>\0021d8</td>
              <td>0x21d8</td>
              <td>South east double arrow</td>
            </tr>
            <tr>
              <td>8665</td>
              <td style={{ fontSize: "1.628em" }}>⇙</td>
              <td>&amp;#8665;</td>
              <td>
              </td>
              <td>\0021d9</td>
              <td>0x21d9</td>
              <td>South west double arrow</td>
            </tr>
            <tr>
              <td>8666</td>
              <td style={{ fontSize: "1.628em" }}>⇚</td>
              <td>&amp;#8666;</td>
              <td>
              </td>
              <td>\0021da</td>
              <td>0x21da</td>
              <td>Leftwards triple arrow</td>
            </tr>
            <tr>
              <td>8667</td>
              <td style={{ fontSize: "1.628em" }}>⇛</td>
              <td>&amp;#8667;</td>
              <td>
              </td>
              <td>\0021db</td>
              <td>0x21db</td>
              <td>Rightwards triple arrow</td>
            </tr>
            <tr>
              <td>8668</td>
              <td style={{ fontSize: "1.628em" }}>⇜</td>
              <td>&amp;#8668;</td>
              <td>
              </td>
              <td>\0021dc</td>
              <td>0x21dc</td>
              <td>Leftwards squiggle arrow</td>
            </tr>
            <tr>
              <td>8669</td>
              <td style={{ fontSize: "1.628em" }}>⇝</td>
              <td>&amp;#8669;</td>
              <td>
              </td>
              <td>\0021dd</td>
              <td>0x21dd</td>
              <td>Rightwards squiggle arrow</td>
            </tr>
            <tr>
              <td>8670</td>
              <td style={{ fontSize: "1.628em" }}>⇞</td>
              <td>&amp;#8670;</td>
              <td>
              </td>
              <td>\0021de</td>
              <td>0x21de</td>
              <td>Upwards arrow with double stroke</td>
            </tr>
            <tr>
              <td>8671</td>
              <td style={{ fontSize: "1.628em" }}>⇟</td>
              <td>&amp;#8671;</td>
              <td>
              </td>
              <td>\0021df</td>
              <td>0x21df</td>
              <td>Downwards arrow with double stroke</td>
            </tr>
            <tr>
              <td>8672</td>
              <td style={{ fontSize: "1.628em" }}>⇠</td>
              <td>&amp;#8672;</td>
              <td>
              </td>
              <td>\0021e0</td>
              <td>0x21e0</td>
              <td>Leftwards dashed arrow</td>
            </tr>
            <tr>
              <td>8673</td>
              <td style={{ fontSize: "1.628em" }}>⇡</td>
              <td>&amp;#8673;</td>
              <td>
              </td>
              <td>\0021e1</td>
              <td>0x21e1</td>
              <td>Upwards dashed arrow</td>
            </tr>
            <tr>
              <td>8674</td>
              <td style={{ fontSize: "1.628em" }}>⇢</td>
              <td>&amp;#8674;</td>
              <td>
              </td>
              <td>\0021e2</td>
              <td>0x21e2</td>
              <td>Rightwards dashed arrow</td>
            </tr>
            <tr>
              <td>8675</td>
              <td style={{ fontSize: "1.628em" }}>⇣</td>
              <td>&amp;#8675;</td>
              <td>
              </td>
              <td>\0021e3</td>
              <td>0x21e3</td>
              <td>Downwards dashed arrow</td>
            </tr>
            <tr>
              <td>8676</td>
              <td style={{ fontSize: "1.628em" }}>⇤</td>
              <td>&amp;#8676;</td>
              <td>
              </td>
              <td>\0021e4</td>
              <td>0x21e4</td>
              <td>Leftwards arrow to bar</td>
            </tr>
            <tr>
              <td>8677</td>
              <td style={{ fontSize: "1.628em" }}>⇥</td>
              <td>&amp;#8677;</td>
              <td>
              </td>
              <td>\0021e5</td>
              <td>0x21e5</td>
              <td>Rightwards arrow to bar</td>
            </tr>
            <tr>
              <td>8678</td>
              <td style={{ fontSize: "1.628em" }}>⇦</td>
              <td>&amp;#8678;</td>
              <td>
              </td>
              <td>\0021e6</td>
              <td>0x21e6</td>
              <td>Leftwards white arrow</td>
            </tr>
            <tr>
              <td>8679</td>
              <td style={{ fontSize: "1.628em" }}>⇧</td>
              <td>&amp;#8679;</td>
              <td>
              </td>
              <td>\0021e7</td>
              <td>0x21e7</td>
              <td>Upwards white arrow</td>
            </tr>
            <tr>
              <td>8680</td>
              <td style={{ fontSize: "1.628em" }}>⇨</td>
              <td>&amp;#8680;</td>
              <td>
              </td>
              <td>\0021e8</td>
              <td>0x21e8</td>
              <td>Rightwards white arrow</td>
            </tr>
            <tr>
              <td>8681</td>
              <td style={{ fontSize: "1.628em" }}>⇩</td>
              <td>&amp;#8681;</td>
              <td>
              </td>
              <td>\0021e9</td>
              <td>0x21e9</td>
              <td>Downwards white arrow</td>
            </tr>
            <tr>
              <td>10136</td>
              <td style={{ fontSize: "1.628em" }}>➘</td>
              <td>&amp;#10136;</td>
              <td>
              </td>
              <td>\002798</td>
              <td>0x2798</td>
              <td>Heavy south east arrow</td>
            </tr>
            <tr>
              <td>10137</td>
              <td style={{ fontSize: "1.628em" }}>➙</td>
              <td>&amp;#10137;</td>
              <td>
              </td>
              <td>\002799</td>
              <td>0x2799</td>
              <td>Heavy rightwards arrow</td>
            </tr>
            <tr>
              <td>10138</td>
              <td style={{ fontSize: "1.628em" }}>➚</td>
              <td>&amp;#10138;</td>
              <td>
              </td>
              <td>\00279a</td>
              <td>0x279a</td>
              <td>Heavy north east arrow</td>
            </tr>
            <tr>
              <td>10139</td>
              <td style={{ fontSize: "1.628em" }}>➛</td>
              <td>&amp;#10139;</td>
              <td>
              </td>
              <td>\00279b</td>
              <td>0x279b</td>
              <td>Drafting point rightwards arrow</td>
            </tr>
            <tr>
              <td>10140</td>
              <td style={{ fontSize: "1.628em" }}>➜</td>
              <td>&amp;#10140;</td>
              <td>
              </td>
              <td>\00279c</td>
              <td>0x279c</td>
              <td>Heavy round-tipped rightwards arrow</td>
            </tr>
            <tr>
              <td>10141</td>
              <td style={{ fontSize: "1.628em" }}>➝</td>
              <td>&amp;#10141;</td>
              <td>
              </td>
              <td>\00279d</td>
              <td>0x279d</td>
              <td>Triangle-headed rightwards arrow</td>
            </tr>
            <tr>
              <td>10142</td>
              <td style={{ fontSize: "1.628em" }}>➞</td>
              <td>&amp;#10142;</td>
              <td>
              </td>
              <td>\00279e</td>
              <td>0x279e</td>
              <td>Heavy triangle-headed rightwards arrow</td>
            </tr>
            <tr>
              <td>10143</td>
              <td style={{ fontSize: "1.628em" }}>➟</td>
              <td>&amp;#10143;</td>
              <td>
              </td>
              <td>\00279f</td>
              <td>0x279f</td>
              <td>Dashed triangle-headed rightwards arrow</td>
            </tr>
            <tr>
              <td>10144</td>
              <td style={{ fontSize: "1.628em" }}>➠</td>
              <td>&amp;#10144;</td>
              <td>
              </td>
              <td>\0027a0</td>
              <td>0x27a0</td>
              <td>Heavy dashed triangle-headed rightwards arrow</td>
            </tr>
            <tr>
              <td>10145</td>
              <td style={{ fontSize: "1.628em" }}>➡</td>
              <td>&amp;#10145;</td>
              <td>
              </td>
              <td>\0027a1</td>
              <td>0x27a1</td>
              <td>Black rightwards arrow</td>
            </tr>
            <tr>
              <td>10146</td>
              <td style={{ fontSize: "1.628em" }}>➢</td>
              <td>&amp;#10146;</td>
              <td>
              </td>
              <td>\0027a2</td>
              <td>0x27a2</td>
              <td>Three-d top-lighted rightwards arrowhead</td>
            </tr>
            <tr>
              <td>10147</td>
              <td style={{ fontSize: "1.628em" }}>➣</td>
              <td>&amp;#10147;</td>
              <td>
              </td>
              <td>\0027a3</td>
              <td>0x27a3</td>
              <td>Three-d bottom-lighted rightwards arrowhead</td>
            </tr>
            <tr>
              <td>10148</td>
              <td style={{ fontSize: "1.628em" }}>➤</td>
              <td>&amp;#10148;</td>
              <td>
              </td>
              <td>\0027a4</td>
              <td>0x27a4</td>
              <td>Black rightwards arrowhead</td>
            </tr>
            <tr>
              <td>10149</td>
              <td style={{ fontSize: "1.628em" }}>➥</td>
              <td>&amp;#10149;</td>
              <td>
              </td>
              <td>\0027a5</td>
              <td>0x27a5</td>
              <td>Heavy black curved upwards and rightwards arrow</td>
            </tr>
            <tr>
              <td>10151</td>
              <td style={{ fontSize: "1.628em" }}>➧</td>
              <td>&amp;#10151;</td>
              <td>
              </td>
              <td>\0027a7</td>
              <td>0x27a7</td>
              <td>Squat black rightwards arrow</td>
            </tr>
            <tr>
              <td>10152</td>
              <td style={{ fontSize: "1.628em" }}>➨</td>
              <td>&amp;#10152;</td>
              <td>
              </td>
              <td>\0027a8</td>
              <td>0x27a8</td>
              <td>Heavy concave-pointed black rightwards arrow</td>
            </tr>
            <tr>
              <td>10153</td>
              <td style={{ fontSize: "1.628em" }}>➩</td>
              <td>&amp;#10153;</td>
              <td>
              </td>
              <td>\0027a9</td>
              <td>0x27a9</td>
              <td>Right-shaded white rightwards arrow</td>
            </tr>
            <tr>
              <td>10154</td>
              <td style={{ fontSize: "1.628em" }}>➪</td>
              <td>&amp;#10154;</td>
              <td>
              </td>
              <td>\0027aa</td>
              <td>0x27aa</td>
              <td>Left-shaded white rightwards arrow</td>
            </tr>
            <tr>
              <td>10155</td>
              <td style={{ fontSize: "1.628em" }}>➫</td>
              <td>&amp;#10155;</td>
              <td>
              </td>
              <td>\0027ab</td>
              <td>0x27ab</td>
              <td>Back-tilted shadowed white rightwards arrow</td>
            </tr>
            <tr>
              <td>10156</td>
              <td style={{ fontSize: "1.628em" }}>➬</td>
              <td>&amp;#10156;</td>
              <td>
              </td>
              <td>\0027ac</td>
              <td>0x27ac</td>
              <td>Front-tilted shadowed white rightwards arrow</td>
            </tr>
            <tr>
              <td>10157</td>
              <td style={{ fontSize: "1.628em" }}>➭</td>
              <td>&amp;#10157;</td>
              <td>
              </td>
              <td>\0027ad</td>
              <td>0x27ad</td>
              <td>Heavy lower right-shadowed white rightwards arrow</td>
            </tr>
            <tr>
              <td>10158</td>
              <td style={{ fontSize: "1.628em" }}>➮</td>
              <td>&amp;#10158;</td>
              <td>
              </td>
              <td>\0027ae</td>
              <td>0x27ae</td>
              <td>Heavy upper right-shadowed white rightwards arrow</td>
            </tr>
            <tr>
              <td>10159</td>
              <td style={{ fontSize: "1.628em" }}>➯</td>
              <td>&amp;#10159;</td>
              <td>
              </td>
              <td>\0027af</td>
              <td>0x27af</td>
              <td>Notched lower right-shadowed white rightwards arrow</td>
            </tr>
            <tr>
              <td>10161</td>
              <td style={{ fontSize: "1.628em" }}>➱</td>
              <td>&amp;#10161;</td>
              <td>
              </td>
              <td>\0027b1</td>
              <td>0x27b1</td>
              <td>Notched upper right-shadowed white rightwards arrow</td>
            </tr>
            <tr>
              <td>10162</td>
              <td style={{ fontSize: "1.628em" }}>➲</td>
              <td>&amp;#10162;</td>
              <td>
              </td>
              <td>\0027b2</td>
              <td>0x27b2</td>
              <td>Circled heavy white rightwards arrow</td>
            </tr>
            <tr>
              <td>10163</td>
              <td style={{ fontSize: "1.628em" }}>➳</td>
              <td>&amp;#10163;</td>
              <td>
              </td>
              <td>\0027b3</td>
              <td>0x27b3</td>
              <td>White-feathered rightwards arrow</td>
            </tr>
            <tr>
              <td>10164</td>
              <td style={{ fontSize: "1.628em" }}>➴</td>
              <td>&amp;#10164;</td>
              <td>
              </td>
              <td>\0027b4</td>
              <td>0x27b4</td>
              <td>Black-feathered south east arrow</td>
            </tr>
            <tr>
              <td>10165</td>
              <td style={{ fontSize: "1.628em" }}>➵</td>
              <td>&amp;#10165;</td>
              <td>
              </td>
              <td>\0027b5</td>
              <td>0x27b5</td>
              <td>Black-feathered rightwards arrow</td>
            </tr>
            <tr>
              <td>10166</td>
              <td style={{ fontSize: "1.628em" }}>➶</td>
              <td>&amp;#10166;</td>
              <td>
              </td>
              <td>\0027b6</td>
              <td>0x27b6</td>
              <td>Black-feathered north east arrow</td>
            </tr>
            <tr>
              <td>10167</td>
              <td style={{ fontSize: "1.628em" }}>➷</td>
              <td>&amp;#10167;</td>
              <td>
              </td>
              <td>\0027b7</td>
              <td>0x27b7</td>
              <td>Heavy black-feathered south east arrow</td>
            </tr>
            <tr>
              <td>10168</td>
              <td style={{ fontSize: "1.628em" }}>➸</td>
              <td>&amp;#10168;</td>
              <td>
              </td>
              <td>\0027b8</td>
              <td>0x27b8</td>
              <td>Heavy black-feathered rightwards arrow</td>
            </tr>
            <tr>
              <td>10169</td>
              <td style={{ fontSize: "1.628em" }}>➹</td>
              <td>&amp;#10169;</td>
              <td>
              </td>
              <td>\0027b9</td>
              <td>0x27b9</td>
              <td>Heavy black-feathered north east arrow</td>
            </tr>
            <tr>
              <td>10170</td>
              <td style={{ fontSize: "1.628em" }}>➺</td>
              <td>&amp;#10170;</td>
              <td>
              </td>
              <td>\0027ba</td>
              <td>0x27ba</td>
              <td>Teardrop-barbed rightwards arrow</td>
            </tr>
            <tr>
              <td>10171</td>
              <td style={{ fontSize: "1.628em" }}>➻</td>
              <td>&amp;#10171;</td>
              <td>
              </td>
              <td>\0027bb</td>
              <td>0x27bb</td>
              <td>Heavy teardrop-shanked rightwards arrow</td>
            </tr>
            <tr>
              <td>10172</td>
              <td style={{ fontSize: "1.628em" }}>➼</td>
              <td>&amp;#10172;</td>
              <td>
              </td>
              <td>\0027bc</td>
              <td>0x27bc</td>
              <td>Wedge-tailed rightwards arrow</td>
            </tr>
            <tr>
              <td>10173</td>
              <td style={{ fontSize: "1.628em" }}>➽</td>
              <td>&amp;#10173;</td>
              <td>
              </td>
              <td>\0027bd</td>
              <td>0x27bd</td>
              <td>Heavy wedge-tailed rightwards arrow</td>
            </tr>
            <tr>
              <td>10174</td>
              <td style={{ fontSize: "1.628em" }}>➾</td>
              <td>&amp;#10174;</td>
              <td>
              </td>
              <td>\0027be</td>
              <td>0x27be</td>
              <td>Open-outlined rightwards arrow</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="9">Stars <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8902</td>
              <td style={{ fontSize: "1.628em" }}>⋆</td>
              <td>&amp;#8902;</td>
              <td>
              </td>
              <td>\0022c6</td>
              <td>0x22c6</td>
              <td>5 point star</td>
            </tr>
            <tr>
              <td>9733</td>
              <td style={{ fontSize: "1.628em" }}>★</td>
              <td>&amp;#9733;</td>
              <td>
              </td>
              <td>\002605</td>
              <td>0x2605</td>
              <td>Black 5 point star</td>
            </tr>
            <tr>
              <td>9885</td>
              <td style={{ fontSize: "1.628em" }}>⚝</td>
              <td>&amp;#9885;</td>
              <td>
              </td>
              <td>\00269d</td>
              <td>0x269d</td>
              <td>Outlined white star</td>
            </tr>
            <tr>
              <td>9956</td>
              <td style={{ fontSize: "1.628em" }}>⛤</td>
              <td>&amp;#9956;</td>
              <td>
              </td>
              <td>\0026e4</td>
              <td>0x26e4</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9957</td>
              <td style={{ fontSize: "1.628em" }}>⛥</td>
              <td>&amp;#9957;</td>
              <td>
              </td>
              <td>\0026e5</td>
              <td>0x26e5</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9958</td>
              <td style={{ fontSize: "1.628em" }}>⛦</td>
              <td>&amp;#9958;</td>
              <td>
              </td>
              <td>\0026e6</td>
              <td>0x26e6</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9959</td>
              <td style={{ fontSize: "1.628em" }}>⛧</td>
              <td>&amp;#9959;</td>
              <td>
              </td>
              <td>\0026e7</td>
              <td>0x26e7</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>10018</td>
              <td style={{ fontSize: "1.628em" }}>✢</td>
              <td>&amp;#10018;</td>
              <td>
              </td>
              <td>\002722</td>
              <td>0x2722</td>
              <td>Four teardrop-spoked asterisk</td>
            </tr>
            <tr>
              <td>10019</td>
              <td style={{ fontSize: "1.628em" }}>✣</td>
              <td>&amp;#10019;</td>
              <td>
              </td>
              <td>\002723</td>
              <td>0x2723</td>
              <td>Four balloon-spoked asterisk</td>
            </tr>
            <tr>
              <td>10020</td>
              <td style={{ fontSize: "1.628em" }}>✤</td>
              <td>&amp;#10020;</td>
              <td>
              </td>
              <td>\002724</td>
              <td>0x2724</td>
              <td>Heavy four balloon-spoked asterisk</td>
            </tr>
            <tr>
              <td>10021</td>
              <td style={{ fontSize: "1.628em" }}>✥</td>
              <td>&amp;#10021;</td>
              <td>
              </td>
              <td>\002725</td>
              <td>0x2725</td>
              <td>Four club-spoked asterisk</td>
            </tr>
            <tr>
              <td>10022</td>
              <td style={{ fontSize: "1.628em" }}>✦</td>
              <td>&amp;#10022;</td>
              <td>
              </td>
              <td>\002726</td>
              <td>0x2726</td>
              <td>Black four pointed star</td>
            </tr>
            <tr>
              <td>10023</td>
              <td style={{ fontSize: "1.628em" }}>✧</td>
              <td>&amp;#10023;</td>
              <td>
              </td>
              <td>\002727</td>
              <td>0x2727</td>
              <td>White four pointed star</td>
            </tr>
            <tr>
              <td>10024</td>
              <td style={{ fontSize: "1.628em" }}>✨</td>
              <td>&amp;#10024;</td>
              <td>
              </td>
              <td>\002728</td>
              <td>0x2728</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>10025</td>
              <td style={{ fontSize: "1.628em" }}>✩</td>
              <td>&amp;#10025;</td>
              <td>
              </td>
              <td>\002729</td>
              <td>0x2729</td>
              <td>Stress outlined white star</td>
            </tr>
            <tr>
              <td>10026</td>
              <td style={{ fontSize: "1.628em" }}>✪</td>
              <td>&amp;#10026;</td>
              <td>
              </td>
              <td>\00272a</td>
              <td>0x272a</td>
              <td>Circled white star</td>
            </tr>
            <tr>
              <td>10027</td>
              <td style={{ fontSize: "1.628em" }}>✫</td>
              <td>&amp;#10027;</td>
              <td>
              </td>
              <td>\00272b</td>
              <td>0x272b</td>
              <td>Open centre black star</td>
            </tr>
            <tr>
              <td>10028</td>
              <td style={{ fontSize: "1.628em" }}>✬</td>
              <td>&amp;#10028;</td>
              <td>
              </td>
              <td>\00272c</td>
              <td>0x272c</td>
              <td>Black centre white star</td>
            </tr>
            <tr>
              <td>10029</td>
              <td style={{ fontSize: "1.628em" }}>✭</td>
              <td>&amp;#10029;</td>
              <td>
              </td>
              <td>\00272d</td>
              <td>0x272d</td>
              <td>Outlined black star</td>
            </tr>
            <tr>
              <td>10030</td>
              <td style={{ fontSize: "1.628em" }}>✮</td>
              <td>&amp;#10030;</td>
              <td>
              </td>
              <td>\00272e</td>
              <td>0x272e</td>
              <td>Heavy outlined black star</td>
            </tr>
            <tr>
              <td>10031</td>
              <td style={{ fontSize: "1.628em" }}>✯</td>
              <td>&amp;#10031;</td>
              <td>
              </td>
              <td>\00272f</td>
              <td>0x272f</td>
              <td>Pinwheel star</td>
            </tr>
            <tr>
              <td>10032</td>
              <td style={{ fontSize: "1.628em" }}>✰</td>
              <td>&amp;#10032;</td>
              <td>
              </td>
              <td>\002730</td>
              <td>0x2730</td>
              <td>Shadowed white star</td>
            </tr>
            <tr>
              <td>10033</td>
              <td style={{ fontSize: "1.628em" }}>✱</td>
              <td>&amp;#10033;</td>
              <td>
              </td>
              <td>\002731</td>
              <td>0x2731</td>
              <td>Heavy asterisk</td>
            </tr>
            <tr>
              <td>10034</td>
              <td style={{ fontSize: "1.628em" }}>✲</td>
              <td>&amp;#10034;</td>
              <td>
              </td>
              <td>\002732</td>
              <td>0x2732</td>
              <td>Open centre asterisk</td>
            </tr>
            <tr>
              <td>10035</td>
              <td style={{ fontSize: "1.628em" }}>✳</td>
              <td>&amp;#10035;</td>
              <td>
              </td>
              <td>\002733</td>
              <td>0x2733</td>
              <td>Eight spoked asterisk</td>
            </tr>
            <tr>
              <td>10036</td>
              <td style={{ fontSize: "1.628em" }}>✴</td>
              <td>&amp;#10036;</td>
              <td>
              </td>
              <td>\002734</td>
              <td>0x2734</td>
              <td>Eight pointed black star</td>
            </tr>
            <tr>
              <td>10037</td>
              <td style={{ fontSize: "1.628em" }}>✵</td>
              <td>&amp;#10037;</td>
              <td>
              </td>
              <td>\002735</td>
              <td>0x2735</td>
              <td>Eight pointed pinwheel star</td>
            </tr>
            <tr>
              <td>10038</td>
              <td style={{ fontSize: "1.628em" }}>✶</td>
              <td>&amp;#10038;</td>
              <td>
              </td>
              <td>\002736</td>
              <td>0x2736</td>
              <td>Six pointed black star</td>
            </tr>
            <tr>
              <td>10039</td>
              <td style={{ fontSize: "1.628em" }}>✷</td>
              <td>&amp;#10039;</td>
              <td>
              </td>
              <td>\002737</td>
              <td>0x2737</td>
              <td>Heavy eight pointed rectilinear black star</td>
            </tr>
            <tr>
              <td>10041</td>
              <td style={{ fontSize: "1.628em" }}>✹</td>
              <td>&amp;#10041;</td>
              <td>
              </td>
              <td>\002739</td>
              <td>0x2739</td>
              <td>Twelve pointed black star</td>
            </tr>
            <tr>
              <td>10042</td>
              <td style={{ fontSize: "1.628em" }}>✺</td>
              <td>&amp;#10042;</td>
              <td>
              </td>
              <td>\00273a</td>
              <td>0x273a</td>
              <td>Sixteen pointed asterisk</td>
            </tr>
            <tr>
              <td>10043</td>
              <td style={{ fontSize: "1.628em" }}>✻</td>
              <td>&amp;#10043;</td>
              <td>
              </td>
              <td>\00273b</td>
              <td>0x273b</td>
              <td>Teardrop-spoked asterisk</td>
            </tr>
            <tr>
              <td>10044</td>
              <td style={{ fontSize: "1.628em" }}>✼</td>
              <td>&amp;#10044;</td>
              <td>
              </td>
              <td>\00273c</td>
              <td>0x273c</td>
              <td>Open centre teardrop-spoked asterisk</td>
            </tr>
            <tr>
              <td>10045</td>
              <td style={{ fontSize: "1.628em" }}>✽</td>
              <td>&amp;#10045;</td>
              <td>
              </td>
              <td>\00273d</td>
              <td>0x273d</td>
              <td>Heavy teardrop-spoked asterisk</td>
            </tr>
            <tr>
              <td>10046</td>
              <td style={{ fontSize: "1.628em" }}>✾</td>
              <td>&amp;#10046;</td>
              <td>
              </td>
              <td>\00273e</td>
              <td>0x273e</td>
              <td>Six petalled black and white florette</td>
            </tr>
            <tr>
              <td>10050</td>
              <td style={{ fontSize: "1.628em" }}>❂</td>
              <td>&amp;#10050;</td>
              <td>
              </td>
              <td>\002742</td>
              <td>0x2742</td>
              <td>Circled open centre eight pointed star</td>
            </tr>
            <tr>
              <td>10051</td>
              <td style={{ fontSize: "1.628em" }}>❃</td>
              <td>&amp;#10051;</td>
              <td>
              </td>
              <td>\002743</td>
              <td>0x2743</td>
              <td>Heavy teardrop-spoked pinwheel asterisk</td>
            </tr>
            <tr>
              <td>10053</td>
              <td style={{ fontSize: "1.628em" }}>❅</td>
              <td>&amp;#10053;</td>
              <td>
              </td>
              <td>\002745</td>
              <td>0x2745</td>
              <td>Tight trifoliate snowflake</td>
            </tr>
            <tr>
              <td>10054</td>
              <td style={{ fontSize: "1.628em" }}>❆</td>
              <td>&amp;#10054;</td>
              <td>
              </td>
              <td>\002746</td>
              <td>0x2746</td>
              <td>Heavy chevron snowflake</td>
            </tr>
            <tr>
              <td>10055</td>
              <td style={{ fontSize: "1.628em" }}>❇</td>
              <td>&amp;#10055;</td>
              <td>
              </td>
              <td>\002747</td>
              <td>0x2747</td>
              <td>Sparkle</td>
            </tr>
            <tr>
              <td>10056</td>
              <td style={{ fontSize: "1.628em" }}>❈</td>
              <td>&amp;#10056;</td>
              <td>
              </td>
              <td>\002748</td>
              <td>0x2748</td>
              <td>Heavy sparkle</td>
            </tr>
            <tr>
              <td>10057</td>
              <td style={{ fontSize: "1.628em" }}>❉</td>
              <td>&amp;#10057;</td>
              <td>
              </td>
              <td>\002749</td>
              <td>0x2749</td>
              <td>Balloon-spoked asterisk</td>
            </tr>
            <tr>
              <td>10058</td>
              <td style={{ fontSize: "1.628em" }}>❊</td>
              <td>&amp;#10058;</td>
              <td>
              </td>
              <td>\00274a</td>
              <td>0x274a</td>
              <td>Eight teardrop-spoked propeller asterisk</td>
            </tr>
            <tr>
              <td>10059</td>
              <td style={{ fontSize: "1.628em" }}>❋</td>
              <td>&amp;#10059;</td>
              <td>
              </td>
              <td>\00274b</td>
              <td>0x274b</td>
              <td>Heavy eight teardrop-spoked propeller asterisk</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="10">Hearts <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10083</td>
              <td style={{ fontSize: "1.628em" }}>❣</td>
              <td>&amp;#10083;</td>
              <td>
              </td>
              <td>\002763</td>
              <td>0x2763</td>
              <td>Exclamation Heart</td>
            </tr>
            <tr>
              <td>10084</td>
              <td style={{ fontSize: "1.628em" }}>❤</td>
              <td>&amp;#10084;</td>
              <td>
              </td>
              <td>\002764</td>
              <td>0x2764</td>
              <td>Big Heart</td>
            </tr>
            <tr>
              <td>10085</td>
              <td style={{ fontSize: "1.628em" }}>❥</td>
              <td>&amp;#10085;</td>
              <td>
              </td>
              <td>\002765</td>
              <td>0x2765</td>
              <td>Rotated Heart</td>
            </tr>
            <tr>
              <td>10086</td>
              <td style={{ fontSize: "1.628em" }}>❦</td>
              <td>&amp;#10086;</td>
              <td>
              </td>
              <td>\002766</td>
              <td>0x2766</td>
              <td>Floral Heart</td>
            </tr>
            <tr>
              <td>128147</td>
              <td style={{ fontSize: "1.628em" }}>💓</td>
              <td>&amp;#128147;</td>
              <td>
              </td>
              <td>\001f493</td>
              <td>0x1f493</td>
              <td>Heart Pulse</td>
            </tr>
            <tr>
              <td>128148</td>
              <td style={{ fontSize: "1.628em" }}>💔</td>
              <td>&amp;#128148;</td>
              <td>
              </td>
              <td>\001f494</td>
              <td>0x1f494</td>
              <td>Broken Heart</td>
            </tr>
            <tr>
              <td>128149</td>
              <td style={{ fontSize: "1.628em" }}>💕</td>
              <td>&amp;#128149;</td>
              <td>
              </td>
              <td>\001f495</td>
              <td>0x1f495</td>
              <td>Heart Couple</td>
            </tr>
            <tr>
              <td>128150</td>
              <td style={{ fontSize: "1.628em" }}>💖</td>
              <td>&amp;#128150;</td>
              <td>
              </td>
              <td>\001f496</td>
              <td>0x1f496</td>
              <td>Heart Stars</td>
            </tr>
            <tr>
              <td>128151</td>
              <td style={{ fontSize: "1.628em" }}>💗</td>
              <td>&amp;#128151;</td>
              <td>
              </td>
              <td>\001f497</td>
              <td>0x1f497</td>
              <td>Hearts</td>
            </tr>
            <tr>
              <td>128152</td>
              <td style={{ fontSize: "1.628em" }}>💘</td>
              <td>&amp;#128152;</td>
              <td>
              </td>
              <td>\001f498</td>
              <td>0x1f498</td>
              <td>Heart with Arrow</td>
            </tr>
            <tr>
              <td>128153</td>
              <td style={{ fontSize: "1.628em" }}>💙</td>
              <td>&amp;#128153;</td>
              <td>
              </td>
              <td>\001f499</td>
              <td>0x1f499</td>
              <td>Blue Heart</td>
            </tr>
            <tr>
              <td>128154</td>
              <td style={{ fontSize: "1.628em" }}>💚</td>
              <td>&amp;#128154;</td>
              <td>
              </td>
              <td>\001f49a</td>
              <td>0x1f49a</td>
              <td>Green Heart</td>
            </tr>
            <tr>
              <td>128155</td>
              <td style={{ fontSize: "1.628em" }}>💛</td>
              <td>&amp;#128155;</td>
              <td>
              </td>
              <td>\001f49b</td>
              <td>0x1f49b</td>
              <td>Yellow Heart</td>
            </tr>
            <tr>
              <td>128156</td>
              <td style={{ fontSize: "1.628em" }}>💜</td>
              <td>&amp;#128156;</td>
              <td>
              </td>
              <td>\001f49c</td>
              <td>0x1f49c</td>
              <td>Purple Heart</td>
            </tr>
            <tr>
              <td>128157</td>
              <td style={{ fontSize: "1.628em" }}>💝</td>
              <td>&amp;#128157;</td>
              <td>
              </td>
              <td>\001f49d</td>
              <td>0x1f49d</td>
              <td>Heart with Ribbon</td>
            </tr>
            <tr>
              <td>128158</td>
              <td style={{ fontSize: "1.628em" }}>💞</td>
              <td>&amp;#128158;</td>
              <td>
              </td>
              <td>\001f49e</td>
              <td>0x1f49e</td>
              <td>Hearts Together</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="11">Zodiac <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9800</td>
              <td style={{ fontSize: "1.628em" }}>♈</td>
              <td>&amp;#9800;</td>
              <td>
              </td>
              <td>\002648</td>
              <td>0x2648</td>
              <td>Aries</td>
            </tr>
            <tr>
              <td>9801</td>
              <td style={{ fontSize: "1.628em" }}>♉</td>
              <td>&amp;#9801;</td>
              <td>
              </td>
              <td>\002649</td>
              <td>0x2649</td>
              <td>Taurus</td>
            </tr>
            <tr>
              <td>9802</td>
              <td style={{ fontSize: "1.628em" }}>♊</td>
              <td>&amp;#9802;</td>
              <td>
              </td>
              <td>\00264a</td>
              <td>0x264a</td>
              <td>Gemini</td>
            </tr>
            <tr>
              <td>9803</td>
              <td style={{ fontSize: "1.628em" }}>♋</td>
              <td>&amp;#9803;</td>
              <td>
              </td>
              <td>\00264b</td>
              <td>0x264b</td>
              <td>Cancer</td>
            </tr>
            <tr>
              <td>9804</td>
              <td style={{ fontSize: "1.628em" }}>♌</td>
              <td>&amp;#9804;</td>
              <td>
              </td>
              <td>\00264c</td>
              <td>0x264c</td>
              <td>Leo</td>
            </tr>
            <tr>
              <td>9805</td>
              <td style={{ fontSize: "1.628em" }}>♍</td>
              <td>&amp;#9805;</td>
              <td>
              </td>
              <td>\00264d</td>
              <td>0x264d</td>
              <td>Virgo</td>
            </tr>
            <tr>
              <td>9806</td>
              <td style={{ fontSize: "1.628em" }}>♎</td>
              <td>&amp;#9806;</td>
              <td>
              </td>
              <td>\00264e</td>
              <td>0x264e</td>
              <td>Libra</td>
            </tr>
            <tr>
              <td>9807</td>
              <td style={{ fontSize: "1.628em" }}>♏</td>
              <td>&amp;#9807;</td>
              <td>
              </td>
              <td>\00264f</td>
              <td>0x264f</td>
              <td>Scorpio</td>
            </tr>
            <tr>
              <td>9808</td>
              <td style={{ fontSize: "1.628em" }}>♐</td>
              <td>&amp;#9808;</td>
              <td>
              </td>
              <td>\002650</td>
              <td>0x2650</td>
              <td>Sagittarius</td>
            </tr>
            <tr>
              <td>9809</td>
              <td style={{ fontSize: "1.628em" }}>♑</td>
              <td>&amp;#9809;</td>
              <td>
              </td>
              <td>\002651</td>
              <td>0x2651</td>
              <td>Capricorn</td>
            </tr>
            <tr>
              <td>9810</td>
              <td style={{ fontSize: "1.628em" }}>♒</td>
              <td>&amp;#9810;</td>
              <td>
              </td>
              <td>\002652</td>
              <td>0x2652</td>
              <td>Aquarius</td>
            </tr>
            <tr>
              <td>9811</td>
              <td style={{ fontSize: "1.628em" }}>♓</td>
              <td>&amp;#9811;</td>
              <td>
              </td>
              <td>\002653</td>
              <td>0x2653</td>
              <td>Pisces</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="12">Games <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9812</td>
              <td style={{ fontSize: "1.628em" }}>♔</td>
              <td>&amp;#9812;</td>
              <td>
              </td>
              <td>\002654</td>
              <td>0x2654</td>
              <td>White chess king</td>
            </tr>
            <tr>
              <td>9813</td>
              <td style={{ fontSize: "1.628em" }}>♕</td>
              <td>&amp;#9813;</td>
              <td>
              </td>
              <td>\002655</td>
              <td>0x2655</td>
              <td>White chess queen</td>
            </tr>
            <tr>
              <td>9814</td>
              <td style={{ fontSize: "1.628em" }}>♖</td>
              <td>&amp;#9814;</td>
              <td>
              </td>
              <td>\002656</td>
              <td>0x2656</td>
              <td>White chess rook</td>
            </tr>
            <tr>
              <td>9815</td>
              <td style={{ fontSize: "1.628em" }}>♗</td>
              <td>&amp;#9815;</td>
              <td>
              </td>
              <td>\002657</td>
              <td>0x2657</td>
              <td>White chess bishop</td>
            </tr>
            <tr>
              <td>9816</td>
              <td style={{ fontSize: "1.628em" }}>♘</td>
              <td>&amp;#9816;</td>
              <td>
              </td>
              <td>\002658</td>
              <td>0x2658</td>
              <td>White chess knight</td>
            </tr>
            <tr>
              <td>9817</td>
              <td style={{ fontSize: "1.628em" }}>♙</td>
              <td>&amp;#9817;</td>
              <td>
              </td>
              <td>\002659</td>
              <td>0x2659</td>
              <td>White chess pawn</td>
            </tr>
            <tr>
              <td>9818</td>
              <td style={{ fontSize: "1.628em" }}>♚</td>
              <td>&amp;#9818;</td>
              <td>
              </td>
              <td>\00265a</td>
              <td>0x265a</td>
              <td>Black chess king</td>
            </tr>
            <tr>
              <td>9819</td>
              <td style={{ fontSize: "1.628em" }}>♛</td>
              <td>&amp;#9819;</td>
              <td>
              </td>
              <td>\00265b</td>
              <td>0x265b</td>
              <td>Black chess queen</td>
            </tr>
            <tr>
              <td>9820</td>
              <td style={{ fontSize: "1.628em" }}>♜</td>
              <td>&amp;#9820;</td>
              <td>
              </td>
              <td>\00265c</td>
              <td>0x265c</td>
              <td>Black chess rook</td>
            </tr>
            <tr>
              <td>9821</td>
              <td style={{ fontSize: "1.628em" }}>♝</td>
              <td>&amp;#9821;</td>
              <td>
              </td>
              <td>\00265d</td>
              <td>0x265d</td>
              <td>Black chess bishop</td>
            </tr>
            <tr>
              <td>9822</td>
              <td style={{ fontSize: "1.628em" }}>♞</td>
              <td>&amp;#9822;</td>
              <td>
              </td>
              <td>\00265e</td>
              <td>0x265e</td>
              <td>Black chess knight</td>
            </tr>
            <tr>
              <td>9823</td>
              <td style={{ fontSize: "1.628em" }}>♟</td>
              <td>&amp;#9823;</td>
              <td>
              </td>
              <td>\00265f</td>
              <td>0x265f</td>
              <td>Black chess pawn</td>
            </tr>
            <tr>
              <td>9824</td>
              <td style={{ fontSize: "1.628em" }}>♠</td>
              <td>&amp;#9824;</td>
              <td>&amp;spades;</td>
              <td>\002660</td>
              <td>0x2660</td>
              <td>Black Spade suit</td>
            </tr>
            <tr>
              <td>9825</td>
              <td style={{ fontSize: "1.628em" }}>♡</td>
              <td>&amp;#9825;</td>
              <td>
              </td>
              <td>\002661</td>
              <td>0x2661</td>
              <td>White Heart suit, valentine</td>
            </tr>
            <tr>
              <td>9826</td>
              <td style={{ fontSize: "1.628em" }}>♢</td>
              <td>&amp;#9826;</td>
              <td>
              </td>
              <td>\002662</td>
              <td>0x2662</td>
              <td>White Diamond suit</td>
            </tr>
            <tr>
              <td>9827</td>
              <td style={{ fontSize: "1.628em" }}>♣</td>
              <td>&amp;#9827;</td>
              <td>&amp;clubs;</td>
              <td>\002663</td>
              <td>0x2663</td>
              <td>Black Club suit, shamrock</td>
            </tr>
            <tr>
              <td>9828</td>
              <td style={{ fontSize: "1.628em" }}>♤</td>
              <td>&amp;#9828;</td>
              <td>
              </td>
              <td>\002664</td>
              <td>0x2664</td>
              <td>White Spade suit</td>
            </tr>
            <tr>
              <td>9829</td>
              <td style={{ fontSize: "1.628em" }}>♥</td>
              <td>&amp;#9829;</td>
              <td>&amp;hearts;</td>
              <td>\002665</td>
              <td>0x2665</td>
              <td>Black Heart suit, valentine</td>
            </tr>
            <tr>
              <td>9830</td>
              <td style={{ fontSize: "1.628em" }}>♦</td>
              <td>&amp;#9830;</td>
              <td>&amp;diams;</td>
              <td>\002666</td>
              <td>0x2666</td>
              <td>Black Diamond suit</td>
            </tr>
            <tr>
              <td>9831</td>
              <td style={{ fontSize: "1.628em" }}>♧</td>
              <td>&amp;#9831;</td>
              <td>
              </td>
              <td>\002667</td>
              <td>0x2667</td>
              <td>White Club suit, shamrock</td>
            </tr>
            <tr>
              <td>9856</td>
              <td style={{ fontSize: "1.628em" }}>⚀</td>
              <td>&amp;#9856;</td>
              <td>
              </td>
              <td>\002680</td>
              <td>0x2680</td>
              <td>Die 1</td>
            </tr>
            <tr>
              <td>9857</td>
              <td style={{ fontSize: "1.628em" }}>⚁</td>
              <td>&amp;#9857;</td>
              <td>
              </td>
              <td>\002681</td>
              <td>0x2681</td>
              <td>Die 2</td>
            </tr>
            <tr>
              <td>9858</td>
              <td style={{ fontSize: "1.628em" }}>⚂</td>
              <td>&amp;#9858;</td>
              <td>
              </td>
              <td>\002682</td>
              <td>0x2682</td>
              <td>Die 3</td>
            </tr>
            <tr>
              <td>9859</td>
              <td style={{ fontSize: "1.628em" }}>⚃</td>
              <td>&amp;#9859;</td>
              <td>
              </td>
              <td>\002683</td>
              <td>0x2683</td>
              <td>Die 4</td>
            </tr>
            <tr>
              <td>9860</td>
              <td style={{ fontSize: "1.628em" }}>⚄</td>
              <td>&amp;#9860;</td>
              <td>
              </td>
              <td>\002684</td>
              <td>0x2684</td>
              <td>Die 5</td>
            </tr>
            <tr>
              <td>9861</td>
              <td style={{ fontSize: "1.628em" }}>⚅</td>
              <td>&amp;#9861;</td>
              <td>
              </td>
              <td>\002685</td>
              <td>0x2685</td>
              <td>Die 6</td>
            </tr>
            <tr>
              <td>9917</td>
              <td style={{ fontSize: "1.628em" }}>⚽</td>
              <td>&amp;#9917;</td>
              <td>
              </td>
              <td>\0026bd</td>
              <td>0x26bd</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9918</td>
              <td style={{ fontSize: "1.628em" }}>⚾</td>
              <td>&amp;#9918;</td>
              <td>
              </td>
              <td>\0026be</td>
              <td>0x26be</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9975</td>
              <td style={{ fontSize: "1.628em" }}>⛷</td>
              <td>&amp;#9975;</td>
              <td>
              </td>
              <td>\0026f7</td>
              <td>0x26f7</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9976</td>
              <td style={{ fontSize: "1.628em" }}>⛸</td>
              <td>&amp;#9976;</td>
              <td>
              </td>
              <td>\0026f8</td>
              <td>0x26f8</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9977</td>
              <td style={{ fontSize: "1.628em" }}>⛹</td>
              <td>&amp;#9977;</td>
              <td>
              </td>
              <td>\0026f9</td>
              <td>0x26f9</td>
              <td>
              </td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="13">Numbers <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9312</td>
              <td style={{ fontSize: "1.628em" }}>①</td>
              <td>&amp;#9312;</td>
              <td>
              </td>
              <td>\002460</td>
              <td>0x2460</td>
              <td>Circled digit one</td>
            </tr>
            <tr>
              <td>9313</td>
              <td style={{ fontSize: "1.628em" }}>②</td>
              <td>&amp;#9313;</td>
              <td>
              </td>
              <td>\002461</td>
              <td>0x2461</td>
              <td>Circled digit two</td>
            </tr>
            <tr>
              <td>9314</td>
              <td style={{ fontSize: "1.628em" }}>③</td>
              <td>&amp;#9314;</td>
              <td>
              </td>
              <td>\002462</td>
              <td>0x2462</td>
              <td>Circled digit three</td>
            </tr>
            <tr>
              <td>9315</td>
              <td style={{ fontSize: "1.628em" }}>④</td>
              <td>&amp;#9315;</td>
              <td>
              </td>
              <td>\002463</td>
              <td>0x2463</td>
              <td>Circled digit four</td>
            </tr>
            <tr>
              <td>9316</td>
              <td style={{ fontSize: "1.628em" }}>⑤</td>
              <td>&amp;#9316;</td>
              <td>
              </td>
              <td>\002464</td>
              <td>0x2464</td>
              <td>Circled digit five</td>
            </tr>
            <tr>
              <td>9317</td>
              <td style={{ fontSize: "1.628em" }}>⑥</td>
              <td>&amp;#9317;</td>
              <td>
              </td>
              <td>\002465</td>
              <td>0x2465</td>
              <td>Circled digit six</td>
            </tr>
            <tr>
              <td>9318</td>
              <td style={{ fontSize: "1.628em" }}>⑦</td>
              <td>&amp;#9318;</td>
              <td>
              </td>
              <td>\002466</td>
              <td>0x2466</td>
              <td>Circled digit seven</td>
            </tr>
            <tr>
              <td>9319</td>
              <td style={{ fontSize: "1.628em" }}>⑧</td>
              <td>&amp;#9319;</td>
              <td>
              </td>
              <td>\002467</td>
              <td>0x2467</td>
              <td>Circled digit eight</td>
            </tr>
            <tr>
              <td>9320</td>
              <td style={{ fontSize: "1.628em" }}>⑨</td>
              <td>&amp;#9320;</td>
              <td>
              </td>
              <td>\002468</td>
              <td>0x2468</td>
              <td>Circled digit nine</td>
            </tr>
            <tr>
              <td>9321</td>
              <td style={{ fontSize: "1.628em" }}>⑩</td>
              <td>&amp;#9321;</td>
              <td>
              </td>
              <td>\002469</td>
              <td>0x2469</td>
              <td>Circled number ten</td>
            </tr>
            <tr>
              <td>9322</td>
              <td style={{ fontSize: "1.628em" }}>⑪</td>
              <td>&amp;#9322;</td>
              <td>
              </td>
              <td>\00246a</td>
              <td>0x246a</td>
              <td>Circled number eleven</td>
            </tr>
            <tr>
              <td>9323</td>
              <td style={{ fontSize: "1.628em" }}>⑫</td>
              <td>&amp;#9323;</td>
              <td>
              </td>
              <td>\00246b</td>
              <td>0x246b</td>
              <td>Circled number twelve</td>
            </tr>
            <tr>
              <td>9324</td>
              <td style={{ fontSize: "1.628em" }}>⑬</td>
              <td>&amp;#9324;</td>
              <td>
              </td>
              <td>\00246c</td>
              <td>0x246c</td>
              <td>Circled number thirteen</td>
            </tr>
            <tr>
              <td>9325</td>
              <td style={{ fontSize: "1.628em" }}>⑭</td>
              <td>&amp;#9325;</td>
              <td>
              </td>
              <td>\00246d</td>
              <td>0x246d</td>
              <td>Circled number fourteen</td>
            </tr>
            <tr>
              <td>9326</td>
              <td style={{ fontSize: "1.628em" }}>⑮</td>
              <td>&amp;#9326;</td>
              <td>
              </td>
              <td>\00246e</td>
              <td>0x246e</td>
              <td>Circled number fifteen</td>
            </tr>
            <tr>
              <td>9327</td>
              <td style={{ fontSize: "1.628em" }}>⑯</td>
              <td>&amp;#9327;</td>
              <td>
              </td>
              <td>\00246f</td>
              <td>0x246f</td>
              <td>Circled number sixteen</td>
            </tr>
            <tr>
              <td>9328</td>
              <td style={{ fontSize: "1.628em" }}>⑰</td>
              <td>&amp;#9328;</td>
              <td>
              </td>
              <td>\002470</td>
              <td>0x2470</td>
              <td>Circled number seventeen</td>
            </tr>
            <tr>
              <td>9329</td>
              <td style={{ fontSize: "1.628em" }}>⑱</td>
              <td>&amp;#9329;</td>
              <td>
              </td>
              <td>\002471</td>
              <td>0x2471</td>
              <td>Circled number eighteen</td>
            </tr>
            <tr>
              <td>9330</td>
              <td style={{ fontSize: "1.628em" }}>⑲</td>
              <td>&amp;#9330;</td>
              <td>
              </td>
              <td>\002472</td>
              <td>0x2472</td>
              <td>Circled number nineteen</td>
            </tr>
            <tr>
              <td>9331</td>
              <td style={{ fontSize: "1.628em" }}>⑳</td>
              <td>&amp;#9331;</td>
              <td>
              </td>
              <td>\002473</td>
              <td>0x2473</td>
              <td>Circled number twenty</td>
            </tr>
            <tr>
              <td>9332</td>
              <td style={{ fontSize: "1.628em" }}>⑴</td>
              <td>&amp;#9332;</td>
              <td>
              </td>
              <td>\002474</td>
              <td>0x2474</td>
              <td>Parenthesized digit one</td>
            </tr>
            <tr>
              <td>9333</td>
              <td style={{ fontSize: "1.628em" }}>⑵</td>
              <td>&amp;#9333;</td>
              <td>
              </td>
              <td>\002475</td>
              <td>0x2475</td>
              <td>Parenthesized digit two</td>
            </tr>
            <tr>
              <td>9334</td>
              <td style={{ fontSize: "1.628em" }}>⑶</td>
              <td>&amp;#9334;</td>
              <td>
              </td>
              <td>\002476</td>
              <td>0x2476</td>
              <td>Parenthesized digit three</td>
            </tr>
            <tr>
              <td>9335</td>
              <td style={{ fontSize: "1.628em" }}>⑷</td>
              <td>&amp;#9335;</td>
              <td>
              </td>
              <td>\002477</td>
              <td>0x2477</td>
              <td>Parenthesized digit four</td>
            </tr>
            <tr>
              <td>9336</td>
              <td style={{ fontSize: "1.628em" }}>⑸</td>
              <td>&amp;#9336;</td>
              <td>
              </td>
              <td>\002478</td>
              <td>0x2478</td>
              <td>Parenthesized digit five</td>
            </tr>
            <tr>
              <td>9337</td>
              <td style={{ fontSize: "1.628em" }}>⑹</td>
              <td>&amp;#9337;</td>
              <td>
              </td>
              <td>\002479</td>
              <td>0x2479</td>
              <td>Parenthesized digit six</td>
            </tr>
            <tr>
              <td>9338</td>
              <td style={{ fontSize: "1.628em" }}>⑺</td>
              <td>&amp;#9338;</td>
              <td>
              </td>
              <td>\00247a</td>
              <td>0x247a</td>
              <td>Parenthesized digit seven</td>
            </tr>
            <tr>
              <td>9339</td>
              <td style={{ fontSize: "1.628em" }}>⑻</td>
              <td>&amp;#9339;</td>
              <td>
              </td>
              <td>\00247b</td>
              <td>0x247b</td>
              <td>Parenthesized digit eight</td>
            </tr>
            <tr>
              <td>9340</td>
              <td style={{ fontSize: "1.628em" }}>⑼</td>
              <td>&amp;#9340;</td>
              <td>
              </td>
              <td>\00247c</td>
              <td>0x247c</td>
              <td>Parenthesized digit nine</td>
            </tr>
            <tr>
              <td>9341</td>
              <td style={{ fontSize: "1.628em" }}>⑽</td>
              <td>&amp;#9341;</td>
              <td>
              </td>
              <td>\00247d</td>
              <td>0x247d</td>
              <td>Parenthesized number ten</td>
            </tr>
            <tr>
              <td>9342</td>
              <td style={{ fontSize: "1.628em" }}>⑾</td>
              <td>&amp;#9342;</td>
              <td>
              </td>
              <td>\00247e</td>
              <td>0x247e</td>
              <td>Parenthesized number eleven</td>
            </tr>
            <tr>
              <td>9343</td>
              <td style={{ fontSize: "1.628em" }}>⑿</td>
              <td>&amp;#9343;</td>
              <td>
              </td>
              <td>\00247f</td>
              <td>0x247f</td>
              <td>Parenthesized number twelve</td>
            </tr>
            <tr>
              <td>9344</td>
              <td style={{ fontSize: "1.628em" }}>⒀</td>
              <td>&amp;#9344;</td>
              <td>
              </td>
              <td>\002480</td>
              <td>0x2480</td>
              <td>Parenthesized number thirteen</td>
            </tr>
            <tr>
              <td>9345</td>
              <td style={{ fontSize: "1.628em" }}>⒁</td>
              <td>&amp;#9345;</td>
              <td>
              </td>
              <td>\002481</td>
              <td>0x2481</td>
              <td>Parenthesized number fourteen</td>
            </tr>
            <tr>
              <td>9346</td>
              <td style={{ fontSize: "1.628em" }}>⒂</td>
              <td>&amp;#9346;</td>
              <td>
              </td>
              <td>\002482</td>
              <td>0x2482</td>
              <td>Parenthesized number fifteen</td>
            </tr>
            <tr>
              <td>9347</td>
              <td style={{ fontSize: "1.628em" }}>⒃</td>
              <td>&amp;#9347;</td>
              <td>
              </td>
              <td>\002483</td>
              <td>0x2483</td>
              <td>Parenthesized number sixteen</td>
            </tr>
            <tr>
              <td>9348</td>
              <td style={{ fontSize: "1.628em" }}>⒄</td>
              <td>&amp;#9348;</td>
              <td>
              </td>
              <td>\002484</td>
              <td>0x2484</td>
              <td>Parenthesized number seventeen</td>
            </tr>
            <tr>
              <td>9349</td>
              <td style={{ fontSize: "1.628em" }}>⒅</td>
              <td>&amp;#9349;</td>
              <td>
              </td>
              <td>\002485</td>
              <td>0x2485</td>
              <td>Parenthesized number eighteen</td>
            </tr>
            <tr>
              <td>9350</td>
              <td style={{ fontSize: "1.628em" }}>⒆</td>
              <td>&amp;#9350;</td>
              <td>
              </td>
              <td>\002486</td>
              <td>0x2486</td>
              <td>Parenthesized number nineteen</td>
            </tr>
            <tr>
              <td>9351</td>
              <td style={{ fontSize: "1.628em" }}>⒇</td>
              <td>&amp;#9351;</td>
              <td>
              </td>
              <td>\002487</td>
              <td>0x2487</td>
              <td>Parenthesized number twenty</td>
            </tr>
            <tr>
              <td>9352</td>
              <td style={{ fontSize: "1.628em" }}>⒈</td>
              <td>&amp;#9352;</td>
              <td>
              </td>
              <td>\002488</td>
              <td>0x2488</td>
              <td>Digit one full stop</td>
            </tr>
            <tr>
              <td>9353</td>
              <td style={{ fontSize: "1.628em" }}>⒉</td>
              <td>&amp;#9353;</td>
              <td>
              </td>
              <td>\002489</td>
              <td>0x2489</td>
              <td>Digit two full stop</td>
            </tr>
            <tr>
              <td>9354</td>
              <td style={{ fontSize: "1.628em" }}>⒊</td>
              <td>&amp;#9354;</td>
              <td>
              </td>
              <td>\00248a</td>
              <td>0x248a</td>
              <td>Digit three full stop</td>
            </tr>
            <tr>
              <td>9355</td>
              <td style={{ fontSize: "1.628em" }}>⒋</td>
              <td>&amp;#9355;</td>
              <td>
              </td>
              <td>\00248b</td>
              <td>0x248b</td>
              <td>Digit four full stop</td>
            </tr>
            <tr>
              <td>9356</td>
              <td style={{ fontSize: "1.628em" }}>⒌</td>
              <td>&amp;#9356;</td>
              <td>
              </td>
              <td>\00248c</td>
              <td>0x248c</td>
              <td>Digit five full stop</td>
            </tr>
            <tr>
              <td>9357</td>
              <td style={{ fontSize: "1.628em" }}>⒍</td>
              <td>&amp;#9357;</td>
              <td>
              </td>
              <td>\00248d</td>
              <td>0x248d</td>
              <td>Digit six full stop</td>
            </tr>
            <tr>
              <td>9358</td>
              <td style={{ fontSize: "1.628em" }}>⒎</td>
              <td>&amp;#9358;</td>
              <td>
              </td>
              <td>\00248e</td>
              <td>0x248e</td>
              <td>Digit seven full stop</td>
            </tr>
            <tr>
              <td>9359</td>
              <td style={{ fontSize: "1.628em" }}>⒏</td>
              <td>&amp;#9359;</td>
              <td>
              </td>
              <td>\00248f</td>
              <td>0x248f</td>
              <td>Digit eight full stop</td>
            </tr>
            <tr>
              <td>9360</td>
              <td style={{ fontSize: "1.628em" }}>⒐</td>
              <td>&amp;#9360;</td>
              <td>
              </td>
              <td>\002490</td>
              <td>0x2490</td>
              <td>Digit nine full stop</td>
            </tr>
            <tr>
              <td>9361</td>
              <td style={{ fontSize: "1.628em" }}>⒑</td>
              <td>&amp;#9361;</td>
              <td>
              </td>
              <td>\002491</td>
              <td>0x2491</td>
              <td>Number ten full stop</td>
            </tr>
            <tr>
              <td>9362</td>
              <td style={{ fontSize: "1.628em" }}>⒒</td>
              <td>&amp;#9362;</td>
              <td>
              </td>
              <td>\002492</td>
              <td>0x2492</td>
              <td>Number eleven full stop</td>
            </tr>
            <tr>
              <td>9363</td>
              <td style={{ fontSize: "1.628em" }}>⒓</td>
              <td>&amp;#9363;</td>
              <td>
              </td>
              <td>\002493</td>
              <td>0x2493</td>
              <td>Number twelve full stop</td>
            </tr>
            <tr>
              <td>9364</td>
              <td style={{ fontSize: "1.628em" }}>⒔</td>
              <td>&amp;#9364;</td>
              <td>
              </td>
              <td>\002494</td>
              <td>0x2494</td>
              <td>Number thirteen full stop</td>
            </tr>
            <tr>
              <td>9365</td>
              <td style={{ fontSize: "1.628em" }}>⒕</td>
              <td>&amp;#9365;</td>
              <td>
              </td>
              <td>\002495</td>
              <td>0x2495</td>
              <td>Number fourteen full stop</td>
            </tr>
            <tr>
              <td>9366</td>
              <td style={{ fontSize: "1.628em" }}>⒖</td>
              <td>&amp;#9366;</td>
              <td>
              </td>
              <td>\002496</td>
              <td>0x2496</td>
              <td>Number fifteen full stop</td>
            </tr>
            <tr>
              <td>9367</td>
              <td style={{ fontSize: "1.628em" }}>⒗</td>
              <td>&amp;#9367;</td>
              <td>
              </td>
              <td>\002497</td>
              <td>0x2497</td>
              <td>Number sixteen full stop</td>
            </tr>
            <tr>
              <td>9368</td>
              <td style={{ fontSize: "1.628em" }}>⒘</td>
              <td>&amp;#9368;</td>
              <td>
              </td>
              <td>\002498</td>
              <td>0x2498</td>
              <td>Number seventeen full stop</td>
            </tr>
            <tr>
              <td>9369</td>
              <td style={{ fontSize: "1.628em" }}>⒙</td>
              <td>&amp;#9369;</td>
              <td>
              </td>
              <td>\002499</td>
              <td>0x2499</td>
              <td>Number eighteen full stop</td>
            </tr>
            <tr>
              <td>9370</td>
              <td style={{ fontSize: "1.628em" }}>⒚</td>
              <td>&amp;#9370;</td>
              <td>
              </td>
              <td>\00249a</td>
              <td>0x249a</td>
              <td>Number nineteen full stop</td>
            </tr>
            <tr>
              <td>9371</td>
              <td style={{ fontSize: "1.628em" }}>⒛</td>
              <td>&amp;#9371;</td>
              <td>
              </td>
              <td>\00249b</td>
              <td>0x249b</td>
              <td>Number twenty full stop</td>
            </tr>
            <tr>
              <td>9450</td>
              <td style={{ fontSize: "1.628em" }}>⓪</td>
              <td>&amp;#9450;</td>
              <td>
              </td>
              <td>\0024ea</td>
              <td>0x24ea</td>
              <td>Circled digit zero</td>
            </tr>
            <tr>
              <td>9451</td>
              <td style={{ fontSize: "1.628em" }}>⓫</td>
              <td>&amp;#9451;</td>
              <td>
              </td>
              <td>\0024eb</td>
              <td>0x24eb</td>
              <td>Dingbat negative circled number evelven</td>
            </tr>
            <tr>
              <td>9452</td>
              <td style={{ fontSize: "1.628em" }}>⓬</td>
              <td>&amp;#9452;</td>
              <td>
              </td>
              <td>\0024ec</td>
              <td>0x24ec</td>
              <td>Dingbat negative circled number twelve</td>
            </tr>
            <tr>
              <td>9453</td>
              <td style={{ fontSize: "1.628em" }}>⓭</td>
              <td>&amp;#9453;</td>
              <td>
              </td>
              <td>\0024ed</td>
              <td>0x24ed</td>
              <td>Dingbat negative circled number thirteen</td>
            </tr>
            <tr>
              <td>9454</td>
              <td style={{ fontSize: "1.628em" }}>⓮</td>
              <td>&amp;#9454;</td>
              <td>
              </td>
              <td>\0024ee</td>
              <td>0x24ee</td>
              <td>Dingbat negative circled number fourteen</td>
            </tr>
            <tr>
              <td>9455</td>
              <td style={{ fontSize: "1.628em" }}>⓯</td>
              <td>&amp;#9455;</td>
              <td>
              </td>
              <td>\0024ef</td>
              <td>0x24ef</td>
              <td>Dingbat negative circled number fifteen</td>
            </tr>
            <tr>
              <td>9456</td>
              <td style={{ fontSize: "1.628em" }}>⓰</td>
              <td>&amp;#9456;</td>
              <td>
              </td>
              <td>\0024f0</td>
              <td>0x24f0</td>
              <td>Dingbat negative circled number sixteen</td>
            </tr>
            <tr>
              <td>9457</td>
              <td style={{ fontSize: "1.628em" }}>⓱</td>
              <td>&amp;#9457;</td>
              <td>
              </td>
              <td>\0024f1</td>
              <td>0x24f1</td>
              <td>Dingbat negative circled number seventeen</td>
            </tr>
            <tr>
              <td>9458</td>
              <td style={{ fontSize: "1.628em" }}>⓲</td>
              <td>&amp;#9458;</td>
              <td>
              </td>
              <td>\0024f2</td>
              <td>0x24f2</td>
              <td>Dingbat negative circled number eighteen</td>
            </tr>
            <tr>
              <td>9459</td>
              <td style={{ fontSize: "1.628em" }}>⓳</td>
              <td>&amp;#9459;</td>
              <td>
              </td>
              <td>\0024f3</td>
              <td>0x24f3</td>
              <td>Dingbat negative circled number nineteen</td>
            </tr>
            <tr>
              <td>9460</td>
              <td style={{ fontSize: "1.628em" }}>⓴</td>
              <td>&amp;#9460;</td>
              <td>
              </td>
              <td>\0024f4</td>
              <td>0x24f4</td>
              <td>Dingbat negative circled number twenty</td>
            </tr>
            <tr>
              <td>10102</td>
              <td style={{ fontSize: "1.628em" }}>❶</td>
              <td>&amp;#10102;</td>
              <td>
              </td>
              <td>\002776</td>
              <td>0x2776</td>
              <td>Dingbat negative circled digit one</td>
            </tr>
            <tr>
              <td>10103</td>
              <td style={{ fontSize: "1.628em" }}>❷</td>
              <td>&amp;#10103;</td>
              <td>
              </td>
              <td>\002777</td>
              <td>0x2777</td>
              <td>Dingbat negative circled digit two</td>
            </tr>
            <tr>
              <td>10104</td>
              <td style={{ fontSize: "1.628em" }}>❸</td>
              <td>&amp;#10104;</td>
              <td>
              </td>
              <td>\002778</td>
              <td>0x2778</td>
              <td>Dingbat negative circled digit three</td>
            </tr>
            <tr>
              <td>10105</td>
              <td style={{ fontSize: "1.628em" }}>❹</td>
              <td>&amp;#10105;</td>
              <td>
              </td>
              <td>\002779</td>
              <td>0x2779</td>
              <td>Dingbat negative circled digit four</td>
            </tr>
            <tr>
              <td>10106</td>
              <td style={{ fontSize: "1.628em" }}>❺</td>
              <td>&amp;#10106;</td>
              <td>
              </td>
              <td>\00277a</td>
              <td>0x277a</td>
              <td>Dingbat negative circled digit five</td>
            </tr>
            <tr>
              <td>10107</td>
              <td style={{ fontSize: "1.628em" }}>❻</td>
              <td>&amp;#10107;</td>
              <td>
              </td>
              <td>\00277b</td>
              <td>0x277b</td>
              <td>Dingbat negative circled digit six</td>
            </tr>
            <tr>
              <td>10108</td>
              <td style={{ fontSize: "1.628em" }}>❼</td>
              <td>&amp;#10108;</td>
              <td>
              </td>
              <td>\00277c</td>
              <td>0x277c</td>
              <td>Dingbat negative circled digit seven</td>
            </tr>
            <tr>
              <td>10109</td>
              <td style={{ fontSize: "1.628em" }}>❽</td>
              <td>&amp;#10109;</td>
              <td>
              </td>
              <td>\00277d</td>
              <td>0x277d</td>
              <td>Dingbat negative circled digit eight</td>
            </tr>
            <tr>
              <td>10110</td>
              <td style={{ fontSize: "1.628em" }}>❾</td>
              <td>&amp;#10110;</td>
              <td>
              </td>
              <td>\00277e</td>
              <td>0x277e</td>
              <td>Dingbat negative circled digit nine</td>
            </tr>
            <tr>
              <td>10111</td>
              <td style={{ fontSize: "1.628em" }}>❿</td>
              <td>&amp;#10111;</td>
              <td>
              </td>
              <td>\00277f</td>
              <td>0x277f</td>
              <td>Dingbat negative circled number ten</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="14">Religious &amp; Political Symbols <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1421</td>
              <td style={{ fontSize: "1.628em" }}>֍</td>
              <td>&amp;#1421;</td>
              <td>
              </td>
              <td>\0058d</td>
              <td>0x58d</td>
              <td>Right facing Armenian eternity sign</td>
            </tr>
            <tr>
              <td>1422</td>
              <td style={{ fontSize: "1.628em" }}>֎</td>
              <td>&amp;#1422;</td>
              <td>
              </td>
              <td>\0058e</td>
              <td>0x58e</td>
              <td>Left facing Armenian eternity sign</td>
            </tr>
            <tr>
              <td>2384</td>
              <td style={{ fontSize: "1.628em" }}>ॐ</td>
              <td>&amp;#2384;</td>
              <td>
              </td>
              <td>\00950</td>
              <td>0x950</td>
              <td>Devanagari Om</td>
            </tr>
            <tr>
              <td>9764</td>
              <td style={{ fontSize: "1.628em" }}>☤</td>
              <td>&amp;#9764;</td>
              <td>
              </td>
              <td>\002624</td>
              <td>0x2624</td>
              <td>Caduceus</td>
            </tr>
            <tr>
              <td>9765</td>
              <td style={{ fontSize: "1.628em" }}>☥</td>
              <td>&amp;#9765;</td>
              <td>
              </td>
              <td>\002625</td>
              <td>0x2625</td>
              <td>Ankh</td>
            </tr>
            <tr>
              <td>9766</td>
              <td style={{ fontSize: "1.628em" }}>☦</td>
              <td>&amp;#9766;</td>
              <td>
              </td>
              <td>\002626</td>
              <td>0x2626</td>
              <td>Orthodox cross</td>
            </tr>
            <tr>
              <td>9767</td>
              <td style={{ fontSize: "1.628em" }}>☧</td>
              <td>&amp;#9767;</td>
              <td>
              </td>
              <td>\002627</td>
              <td>0x2627</td>
              <td>Chi Rho</td>
            </tr>
            <tr>
              <td>9768</td>
              <td style={{ fontSize: "1.628em" }}>☨</td>
              <td>&amp;#9768;</td>
              <td>
              </td>
              <td>\002628</td>
              <td>0x2628</td>
              <td>Cross of Lorraine</td>
            </tr>
            <tr>
              <td>9769</td>
              <td style={{ fontSize: "1.628em" }}>☩</td>
              <td>&amp;#9769;</td>
              <td>
              </td>
              <td>\002629</td>
              <td>0x2629</td>
              <td>Cross of Jerusalem</td>
            </tr>
            <tr>
              <td>9770</td>
              <td style={{ fontSize: "1.628em" }}>☪</td>
              <td>&amp;#9770;</td>
              <td>
              </td>
              <td>\00262a</td>
              <td>0x262a</td>
              <td>Star and Crescent</td>
            </tr>
            <tr>
              <td>9771</td>
              <td style={{ fontSize: "1.628em" }}>☫</td>
              <td>&amp;#9771;</td>
              <td>
              </td>
              <td>\00262b</td>
              <td>0x262b</td>
              <td>Farsi Symbol</td>
            </tr>
            <tr>
              <td>9772</td>
              <td style={{ fontSize: "1.628em" }}>☬</td>
              <td>&amp;#9772;</td>
              <td>
              </td>
              <td>\00262c</td>
              <td>0x262c</td>
              <td>Adi Shakti</td>
            </tr>
            <tr>
              <td>9773</td>
              <td style={{ fontSize: "1.628em" }}>☭</td>
              <td>&amp;#9773;</td>
              <td>
              </td>
              <td>\00262d</td>
              <td>0x262d</td>
              <td>Hammer and Sickle</td>
            </tr>
            <tr>
              <td>9774</td>
              <td style={{ fontSize: "1.628em" }}>☮</td>
              <td>&amp;#9774;</td>
              <td>
              </td>
              <td>\00262e</td>
              <td>0x262e</td>
              <td>Peace Symbol</td>
            </tr>
            <tr>
              <td>9775</td>
              <td style={{ fontSize: "1.628em" }}>☯</td>
              <td>&amp;#9775;</td>
              <td>
              </td>
              <td>\00262f</td>
              <td>0x262f</td>
              <td>Yin Yang</td>
            </tr>
            <tr>
              <td>9784</td>
              <td style={{ fontSize: "1.628em" }}>☸</td>
              <td>&amp;#9784;</td>
              <td>
              </td>
              <td>\002638</td>
              <td>0x2638</td>
              <td>Wheel of Dharma</td>
            </tr>
            <tr>
              <td>10013</td>
              <td style={{ fontSize: "1.628em" }}>✝</td>
              <td>&amp;#10013;</td>
              <td>
              </td>
              <td>\00271d</td>
              <td>0x271d</td>
              <td>Latin cross</td>
            </tr>
            <tr>
              <td>10014</td>
              <td style={{ fontSize: "1.628em" }}>✞</td>
              <td>&amp;#10014;</td>
              <td>
              </td>
              <td>\00271e</td>
              <td>0x271e</td>
              <td>Shadowed white Latin cross</td>
            </tr>
            <tr>
              <td>10015</td>
              <td style={{ fontSize: "1.628em" }}>✟</td>
              <td>&amp;#10015;</td>
              <td>
              </td>
              <td>\00271f</td>
              <td>0x271f</td>
              <td>Outlined Latin Cross</td>
            </tr>
            <tr>
              <td>10016</td>
              <td style={{ fontSize: "1.628em" }}>✠</td>
              <td>&amp;#10016;</td>
              <td>
              </td>
              <td>\002720</td>
              <td>0x2720</td>
              <td>Maltese cross</td>
            </tr>
            <tr>
              <td>10017</td>
              <td style={{ fontSize: "1.628em" }}>✡</td>
              <td>&amp;#10017;</td>
              <td>
              </td>
              <td>\002721</td>
              <td>0x2721</td>
              <td>Star of David</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="15">Musical <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9833</td>
              <td style={{ fontSize: "1.628em" }}>♩</td>
              <td>&amp;#9833;</td>
              <td>
              </td>
              <td>\002669</td>
              <td>0x2669</td>
              <td>Crotchet / Quarter note</td>
            </tr>
            <tr>
              <td>9834</td>
              <td style={{ fontSize: "1.628em" }}>♪</td>
              <td>&amp;#9834;</td>
              <td>
              </td>
              <td>\00266a</td>
              <td>0x266a</td>
              <td>Quaver / Eighth note</td>
            </tr>
            <tr>
              <td>9835</td>
              <td style={{ fontSize: "1.628em" }}>♫</td>
              <td>&amp;#9835;</td>
              <td>
              </td>
              <td>\00266b</td>
              <td>0x266b</td>
              <td>Quaver</td>
            </tr>
            <tr>
              <td>9836</td>
              <td style={{ fontSize: "1.628em" }}>♬</td>
              <td>&amp;#9836;</td>
              <td>
              </td>
              <td>\00266c</td>
              <td>0x266c</td>
              <td>Double Quaver</td>
            </tr>
            <tr>
              <td>9837</td>
              <td style={{ fontSize: "1.628em" }}>♭</td>
              <td>&amp;#9837;</td>
              <td>
              </td>
              <td>\00266d</td>
              <td>0x266d</td>
              <td>Flat note</td>
            </tr>
            <tr>
              <td>9838</td>
              <td style={{ fontSize: "1.628em" }}>♮</td>
              <td>&amp;#9838;</td>
              <td>
              </td>
              <td>\00266e</td>
              <td>0x266e</td>
              <td>Natural Note</td>
            </tr>
            <tr>
              <td>9839</td>
              <td style={{ fontSize: "1.628em" }}>♯</td>
              <td>&amp;#9839;</td>
              <td>
              </td>
              <td>\00266f</td>
              <td>0x266f</td>
              <td>Sharp Note</td>
            </tr>
            <tr>
              <td>127929</td>
              <td style={{ fontSize: "1.628em" }}>🎹</td>
              <td>&amp;#127929;</td>
              <td>
              </td>
              <td>\001f3b9</td>
              <td>0x1f3b9</td>
              <td>Keyboard</td>
            </tr>
            <tr>
              <td>127932</td>
              <td style={{ fontSize: "1.628em" }}>🎼</td>
              <td>&amp;#127932;</td>
              <td>
              </td>
              <td>\001f3bc</td>
              <td>0x1f3bc</td>
              <td>Score</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="16">Unicode Shapes and Symbols <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2109</td>
              <td style={{ fontSize: "1.628em" }}>࠽</td>
              <td>&amp;#2109;</td>
              <td>
              </td>
              <td>\0083d</td>
              <td>0x83d</td>
              <td>Degree fahrenheit sign</td>
            </tr>
            <tr>
              <td>8451</td>
              <td style={{ fontSize: "1.628em" }}>℃</td>
              <td>&amp;#8451;</td>
              <td>
              </td>
              <td>\002103</td>
              <td>0x2103</td>
              <td>Degrees Celsius</td>
            </tr>
            <tr>
              <td>8984</td>
              <td style={{ fontSize: "1.628em" }}>⌘</td>
              <td>&amp;#8984;</td>
              <td>
              </td>
              <td>\002318</td>
              <td>0x2318</td>
              <td>Place of interest sign</td>
            </tr>
            <tr>
              <td>8986</td>
              <td style={{ fontSize: "1.628em" }}>⌚</td>
              <td>&amp;#8986;</td>
              <td>
              </td>
              <td>\00231a</td>
              <td>0x231a</td>
              <td>Watch</td>
            </tr>
            <tr>
              <td>8987</td>
              <td style={{ fontSize: "1.628em" }}>⌛</td>
              <td>&amp;#8987;</td>
              <td>
              </td>
              <td>\00231b</td>
              <td>0x231b</td>
              <td>Egg timer</td>
            </tr>
            <tr>
              <td>8999</td>
              <td style={{ fontSize: "1.628em" }}>⌧</td>
              <td>&amp;#8999;</td>
              <td>
              </td>
              <td>\002327</td>
              <td>0x2327</td>
              <td>X in a rectangle box</td>
            </tr>
            <tr>
              <td>9000</td>
              <td style={{ fontSize: "1.628em" }}>⌨</td>
              <td>&amp;#9000;</td>
              <td>
              </td>
              <td>\002328</td>
              <td>0x2328</td>
              <td>Keyboard</td>
            </tr>
            <tr>
              <td>9004</td>
              <td style={{ fontSize: "1.628em" }}>⌬</td>
              <td>&amp;#9004;</td>
              <td>
              </td>
              <td>\00232c</td>
              <td>0x232c</td>
              <td>Benzine ring</td>
            </tr>
            <tr>
              <td>9043</td>
              <td style={{ fontSize: "1.628em" }}>⍓</td>
              <td>&amp;#9043;</td>
              <td>
              </td>
              <td>\002353</td>
              <td>0x2353</td>
              <td>APL functional symbol quad up caret</td>
            </tr>
            <tr>
              <td>9632</td>
              <td style={{ fontSize: "1.628em" }}>■</td>
              <td>&amp;#9632;</td>
              <td>
              </td>
              <td>\0025a0</td>
              <td>0x25a0</td>
              <td>Black square</td>
            </tr>
            <tr>
              <td>9633</td>
              <td style={{ fontSize: "1.628em" }}>□</td>
              <td>&amp;#9633;</td>
              <td>
              </td>
              <td>\0025a1</td>
              <td>0x25a1</td>
              <td>White square</td>
            </tr>
            <tr>
              <td>9647</td>
              <td style={{ fontSize: "1.628em" }}>▯</td>
              <td>&amp;#9647;</td>
              <td>
              </td>
              <td>\0025af</td>
              <td>0x25af</td>
              <td>White vertical rectangle</td>
            </tr>
            <tr>
              <td>9670</td>
              <td style={{ fontSize: "1.628em" }}>◆</td>
              <td>&amp;#9670;</td>
              <td>
              </td>
              <td>\0025c6</td>
              <td>0x25c6</td>
              <td>Black diamond</td>
            </tr>
            <tr>
              <td>9679</td>
              <td style={{ fontSize: "1.628em" }}>●</td>
              <td>&amp;#9679;</td>
              <td>
              </td>
              <td>\0025cf</td>
              <td>0x25cf</td>
              <td>Black circle</td>
            </tr>
            <tr>
              <td>9728</td>
              <td style={{ fontSize: "1.628em" }}>☀</td>
              <td>&amp;#9728;</td>
              <td>
              </td>
              <td>\002600</td>
              <td>0x2600</td>
              <td>Black sun with rays</td>
            </tr>
            <tr>
              <td>9729</td>
              <td style={{ fontSize: "1.628em" }}>☁</td>
              <td>&amp;#9729;</td>
              <td>
              </td>
              <td>\002601</td>
              <td>0x2601</td>
              <td>Cloud</td>
            </tr>
            <tr>
              <td>9730</td>
              <td style={{ fontSize: "1.628em" }}>☂</td>
              <td>&amp;#9730;</td>
              <td>
              </td>
              <td>\002602</td>
              <td>0x2602</td>
              <td>Umbrella</td>
            </tr>
            <tr>
              <td>9731</td>
              <td style={{ fontSize: "1.628em" }}>☃</td>
              <td>&amp;#9731;</td>
              <td>
              </td>
              <td>\002603</td>
              <td>0x2603</td>
              <td>Snowman</td>
            </tr>
            <tr>
              <td>9732</td>
              <td style={{ fontSize: "1.628em" }}>☄</td>
              <td>&amp;#9732;</td>
              <td>
              </td>
              <td>\002604</td>
              <td>0x2604</td>
              <td>Comet</td>
            </tr>
            <tr>
              <td>9742</td>
              <td style={{ fontSize: "1.628em" }}>☎</td>
              <td>&amp;#9742;</td>
              <td>
              </td>
              <td>\00260e</td>
              <td>0x260e</td>
              <td>Black telephone</td>
            </tr>
            <tr>
              <td>9743</td>
              <td style={{ fontSize: "1.628em" }}>☏</td>
              <td>&amp;#9743;</td>
              <td>
              </td>
              <td>\00260f</td>
              <td>0x260f</td>
              <td>White telephone</td>
            </tr>
            <tr>
              <td>9745</td>
              <td style={{ fontSize: "1.628em" }}>☑</td>
              <td>&amp;#9745;</td>
              <td>
              </td>
              <td>\002611</td>
              <td>0x2611</td>
              <td>Ballot box with check</td>
            </tr>
            <tr>
              <td>9746</td>
              <td style={{ fontSize: "1.628em" }}>☒</td>
              <td>&amp;#9746;</td>
              <td>
              </td>
              <td>\002612</td>
              <td>0x2612</td>
              <td>Ballot box with X</td>
            </tr>
            <tr>
              <td>9752</td>
              <td style={{ fontSize: "1.628em" }}>☘</td>
              <td>&amp;#9752;</td>
              <td>
              </td>
              <td>\002618</td>
              <td>0x2618</td>
              <td>Clover</td>
            </tr>
            <tr>
              <td>9760</td>
              <td style={{ fontSize: "1.628em" }}>☠</td>
              <td>&amp;#9760;</td>
              <td>
              </td>
              <td>\002620</td>
              <td>0x2620</td>
              <td>Skull and crossbones</td>
            </tr>
            <tr>
              <td>9762</td>
              <td style={{ fontSize: "1.628em" }}>☢</td>
              <td>&amp;#9762;</td>
              <td>
              </td>
              <td>\002622</td>
              <td>0x2622</td>
              <td>Radioactive sign</td>
            </tr>
            <tr>
              <td>9763</td>
              <td style={{ fontSize: "1.628em" }}>☣</td>
              <td>&amp;#9763;</td>
              <td>
              </td>
              <td>\002623</td>
              <td>0x2623</td>
              <td>Biohazard sign</td>
            </tr>
            <tr>
              <td>9785</td>
              <td style={{ fontSize: "1.628em" }}>☹</td>
              <td>&amp;#9785;</td>
              <td>
              </td>
              <td>\002639</td>
              <td>0x2639</td>
              <td>White frowning face</td>
            </tr>
            <tr>
              <td>9786</td>
              <td style={{ fontSize: "1.628em" }}>☺</td>
              <td>&amp;#9786;</td>
              <td>
              </td>
              <td>\00263a</td>
              <td>0x263a</td>
              <td>White smiling face</td>
            </tr>
            <tr>
              <td>9788</td>
              <td style={{ fontSize: "1.628em" }}>☼</td>
              <td>&amp;#9788;</td>
              <td>
              </td>
              <td>\00263c</td>
              <td>0x263c</td>
              <td>White sun with rays</td>
            </tr>
            <tr>
              <td>9789</td>
              <td style={{ fontSize: "1.628em" }}>☽</td>
              <td>&amp;#9789;</td>
              <td>
              </td>
              <td>\00263d</td>
              <td>0x263d</td>
              <td>First quarter moon</td>
            </tr>
            <tr>
              <td>9790</td>
              <td style={{ fontSize: "1.628em" }}>☾</td>
              <td>&amp;#9790;</td>
              <td>
              </td>
              <td>\00263e</td>
              <td>0x263e</td>
              <td>Last quarter moon</td>
            </tr>
            <tr>
              <td>9791</td>
              <td style={{ fontSize: "1.628em" }}>☿</td>
              <td>&amp;#9791;</td>
              <td>
              </td>
              <td>\00263f</td>
              <td>0x263f</td>
              <td>Mercury</td>
            </tr>
            <tr>
              <td>9792</td>
              <td style={{ fontSize: "1.628em" }}>♀</td>
              <td>&amp;#9792;</td>
              <td>
              </td>
              <td>\002640</td>
              <td>0x2640</td>
              <td>Female sign</td>
            </tr>
            <tr>
              <td>9793</td>
              <td style={{ fontSize: "1.628em" }}>♁</td>
              <td>&amp;#9793;</td>
              <td>
              </td>
              <td>\002641</td>
              <td>0x2641</td>
              <td>Earth</td>
            </tr>
            <tr>
              <td>9794</td>
              <td style={{ fontSize: "1.628em" }}>♂</td>
              <td>&amp;#9794;</td>
              <td>
              </td>
              <td>\002642</td>
              <td>0x2642</td>
              <td>Male sign</td>
            </tr>
            <tr>
              <td>9832</td>
              <td style={{ fontSize: "1.628em" }}>♨</td>
              <td>&amp;#9832;</td>
              <td>
              </td>
              <td>\002668</td>
              <td>0x2668</td>
              <td>Hot springs</td>
            </tr>
            <tr>
              <td>9842</td>
              <td style={{ fontSize: "1.628em" }}>♲</td>
              <td>&amp;#9842;</td>
              <td>
              </td>
              <td>\002672</td>
              <td>0x2672</td>
              <td>Recycle</td>
            </tr>
            <tr>
              <td>9851</td>
              <td style={{ fontSize: "1.628em" }}>♻</td>
              <td>&amp;#9851;</td>
              <td>
              </td>
              <td>\00267b</td>
              <td>0x267b</td>
              <td>Recycle</td>
            </tr>
            <tr>
              <td>9852</td>
              <td style={{ fontSize: "1.628em" }}>♼</td>
              <td>&amp;#9852;</td>
              <td>
              </td>
              <td>\00267c</td>
              <td>0x267c</td>
              <td>Recycle</td>
            </tr>
            <tr>
              <td>9853</td>
              <td style={{ fontSize: "1.628em" }}>♽</td>
              <td>&amp;#9853;</td>
              <td>
              </td>
              <td>\00267d</td>
              <td>0x267d</td>
              <td>Recycle</td>
            </tr>
            <tr>
              <td>9855</td>
              <td style={{ fontSize: "1.628em" }}>♿</td>
              <td>&amp;#9855;</td>
              <td>
              </td>
              <td>\00267f</td>
              <td>0x267f</td>
              <td>Disability</td>
            </tr>
            <tr>
              <td>9874</td>
              <td style={{ fontSize: "1.628em" }}>⚒</td>
              <td>&amp;#9874;</td>
              <td>
              </td>
              <td>\002692</td>
              <td>0x2692</td>
              <td>Hammers</td>
            </tr>
            <tr>
              <td>9875</td>
              <td style={{ fontSize: "1.628em" }}>⚓</td>
              <td>&amp;#9875;</td>
              <td>
              </td>
              <td>\002693</td>
              <td>0x2693</td>
              <td>Anchor</td>
            </tr>
            <tr>
              <td>9876</td>
              <td style={{ fontSize: "1.628em" }}>⚔</td>
              <td>&amp;#9876;</td>
              <td>
              </td>
              <td>\002694</td>
              <td>0x2694</td>
              <td>Duelling Swords</td>
            </tr>
            <tr>
              <td>9877</td>
              <td style={{ fontSize: "1.628em" }}>⚕</td>
              <td>&amp;#9877;</td>
              <td>
              </td>
              <td>\002695</td>
              <td>0x2695</td>
              <td>Staff of aesculapius</td>
            </tr>
            <tr>
              <td>9878</td>
              <td style={{ fontSize: "1.628em" }}>⚖</td>
              <td>&amp;#9878;</td>
              <td>
              </td>
              <td>\002696</td>
              <td>0x2696</td>
              <td>Scales</td>
            </tr>
            <tr>
              <td>9880</td>
              <td style={{ fontSize: "1.628em" }}>⚘</td>
              <td>&amp;#9880;</td>
              <td>
              </td>
              <td>\002698</td>
              <td>0x2698</td>
              <td>Flower</td>
            </tr>
            <tr>
              <td>9881</td>
              <td style={{ fontSize: "1.628em" }}>⚙</td>
              <td>&amp;#9881;</td>
              <td>
              </td>
              <td>\002699</td>
              <td>0x2699</td>
              <td>Gear</td>
            </tr>
            <tr>
              <td>9882</td>
              <td style={{ fontSize: "1.628em" }}>⚚</td>
              <td>&amp;#9882;</td>
              <td>
              </td>
              <td>\00269a</td>
              <td>0x269a</td>
              <td>Staff of hermes</td>
            </tr>
            <tr>
              <td>9883</td>
              <td style={{ fontSize: "1.628em" }}>⚛</td>
              <td>&amp;#9883;</td>
              <td>
              </td>
              <td>\00269b</td>
              <td>0x269b</td>
              <td>Atomic</td>
            </tr>
            <tr>
              <td>9884</td>
              <td style={{ fontSize: "1.628em" }}>⚜</td>
              <td>&amp;#9884;</td>
              <td>
              </td>
              <td>\00269c</td>
              <td>0x269c</td>
              <td>Fleur-de-lis</td>
            </tr>
            <tr>
              <td>9886</td>
              <td style={{ fontSize: "1.628em" }}>⚞</td>
              <td>&amp;#9886;</td>
              <td>
              </td>
              <td>\00269e</td>
              <td>0x269e</td>
              <td>Three lines converging right</td>
            </tr>
            <tr>
              <td>9887</td>
              <td style={{ fontSize: "1.628em" }}>⚟</td>
              <td>&amp;#9887;</td>
              <td>
              </td>
              <td>\00269f</td>
              <td>0x269f</td>
              <td>Three lines converging left</td>
            </tr>
            <tr>
              <td>9888</td>
              <td style={{ fontSize: "1.628em" }}>⚠</td>
              <td>&amp;#9888;</td>
              <td>
              </td>
              <td>\0026a0</td>
              <td>0x26a0</td>
              <td>Caution</td>
            </tr>
            <tr>
              <td>9889</td>
              <td style={{ fontSize: "1.628em" }}>⚡</td>
              <td>&amp;#9889;</td>
              <td>
              </td>
              <td>\0026a1</td>
              <td>0x26a1</td>
              <td>Electricity</td>
            </tr>
            <tr>
              <td>9890</td>
              <td style={{ fontSize: "1.628em" }}>⚢</td>
              <td>&amp;#9890;</td>
              <td>
              </td>
              <td>\0026a2</td>
              <td>0x26a2</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9891</td>
              <td style={{ fontSize: "1.628em" }}>⚣</td>
              <td>&amp;#9891;</td>
              <td>
              </td>
              <td>\0026a3</td>
              <td>0x26a3</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9892</td>
              <td style={{ fontSize: "1.628em" }}>⚤</td>
              <td>&amp;#9892;</td>
              <td>
              </td>
              <td>\0026a4</td>
              <td>0x26a4</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9893</td>
              <td style={{ fontSize: "1.628em" }}>⚥</td>
              <td>&amp;#9893;</td>
              <td>
              </td>
              <td>\0026a5</td>
              <td>0x26a5</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9894</td>
              <td style={{ fontSize: "1.628em" }}>⚦</td>
              <td>&amp;#9894;</td>
              <td>
              </td>
              <td>\0026a6</td>
              <td>0x26a6</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9895</td>
              <td style={{ fontSize: "1.628em" }}>⚧</td>
              <td>&amp;#9895;</td>
              <td>
              </td>
              <td>\0026a7</td>
              <td>0x26a7</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9896</td>
              <td style={{ fontSize: "1.628em" }}>⚨</td>
              <td>&amp;#9896;</td>
              <td>
              </td>
              <td>\0026a8</td>
              <td>0x26a8</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9897</td>
              <td style={{ fontSize: "1.628em" }}>⚩</td>
              <td>&amp;#9897;</td>
              <td>
              </td>
              <td>\0026a9</td>
              <td>0x26a9</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9904</td>
              <td style={{ fontSize: "1.628em" }}>⚰</td>
              <td>&amp;#9904;</td>
              <td>
              </td>
              <td>\0026b0</td>
              <td>0x26b0</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9905</td>
              <td style={{ fontSize: "1.628em" }}>⚱</td>
              <td>&amp;#9905;</td>
              <td>
              </td>
              <td>\0026b1</td>
              <td>0x26b1</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9906</td>
              <td style={{ fontSize: "1.628em" }}>⚲</td>
              <td>&amp;#9906;</td>
              <td>
              </td>
              <td>\0026b2</td>
              <td>0x26b2</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9907</td>
              <td style={{ fontSize: "1.628em" }}>⚳</td>
              <td>&amp;#9907;</td>
              <td>
              </td>
              <td>\0026b3</td>
              <td>0x26b3</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9908</td>
              <td style={{ fontSize: "1.628em" }}>⚴</td>
              <td>&amp;#9908;</td>
              <td>
              </td>
              <td>\0026b4</td>
              <td>0x26b4</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9909</td>
              <td style={{ fontSize: "1.628em" }}>⚵</td>
              <td>&amp;#9909;</td>
              <td>
              </td>
              <td>\0026b5</td>
              <td>0x26b5</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9924</td>
              <td style={{ fontSize: "1.628em" }}>⛄</td>
              <td>&amp;#9924;</td>
              <td>
              </td>
              <td>\0026c4</td>
              <td>0x26c4</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9951</td>
              <td style={{ fontSize: "1.628em" }}>⛟</td>
              <td>&amp;#9951;</td>
              <td>
              </td>
              <td>\0026df</td>
              <td>0x26df</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9969</td>
              <td style={{ fontSize: "1.628em" }}>⛱</td>
              <td>&amp;#9969;</td>
              <td>
              </td>
              <td>\0026f1</td>
              <td>0x26f1</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9970</td>
              <td style={{ fontSize: "1.628em" }}>⛲</td>
              <td>&amp;#9970;</td>
              <td>
              </td>
              <td>\0026f2</td>
              <td>0x26f2</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9971</td>
              <td style={{ fontSize: "1.628em" }}>⛳</td>
              <td>&amp;#9971;</td>
              <td>
              </td>
              <td>\0026f3</td>
              <td>0x26f3</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9972</td>
              <td style={{ fontSize: "1.628em" }}>⛴</td>
              <td>&amp;#9972;</td>
              <td>
              </td>
              <td>\0026f4</td>
              <td>0x26f4</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9973</td>
              <td style={{ fontSize: "1.628em" }}>⛵</td>
              <td>&amp;#9973;</td>
              <td>
              </td>
              <td>\0026f5</td>
              <td>0x26f5</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9984</td>
              <td style={{ fontSize: "1.628em" }}>✀</td>
              <td>&amp;#9984;</td>
              <td>
              </td>
              <td>\002700</td>
              <td>0x2700</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9985</td>
              <td style={{ fontSize: "1.628em" }}>✁</td>
              <td>&amp;#9985;</td>
              <td>
              </td>
              <td>\002701</td>
              <td>0x2701</td>
              <td>Upper blade scissors</td>
            </tr>
            <tr>
              <td>9986</td>
              <td style={{ fontSize: "1.628em" }}>✂</td>
              <td>&amp;#9986;</td>
              <td>
              </td>
              <td>\002702</td>
              <td>0x2702</td>
              <td>Black scissors</td>
            </tr>
            <tr>
              <td>9987</td>
              <td style={{ fontSize: "1.628em" }}>✃</td>
              <td>&amp;#9987;</td>
              <td>
              </td>
              <td>\002703</td>
              <td>0x2703</td>
              <td>Lower blade scissors</td>
            </tr>
            <tr>
              <td>9988</td>
              <td style={{ fontSize: "1.628em" }}>✄</td>
              <td>&amp;#9988;</td>
              <td>
              </td>
              <td>\002704</td>
              <td>0x2704</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9990</td>
              <td style={{ fontSize: "1.628em" }}>✆</td>
              <td>&amp;#9990;</td>
              <td>
              </td>
              <td>\002706</td>
              <td>0x2706</td>
              <td>Telephone location sign</td>
            </tr>
            <tr>
              <td>9992</td>
              <td style={{ fontSize: "1.628em" }}>✈</td>
              <td>&amp;#9992;</td>
              <td>
              </td>
              <td>\002708</td>
              <td>0x2708</td>
              <td>Airplane</td>
            </tr>
            <tr>
              <td>9993</td>
              <td style={{ fontSize: "1.628em" }}>✉</td>
              <td>&amp;#9993;</td>
              <td>
              </td>
              <td>\002709</td>
              <td>0x2709</td>
              <td>Envelope</td>
            </tr>
            <tr>
              <td>9994</td>
              <td style={{ fontSize: "1.628em" }}>✊</td>
              <td>&amp;#9994;</td>
              <td>
              </td>
              <td>\00270a</td>
              <td>0x270a</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9995</td>
              <td style={{ fontSize: "1.628em" }}>✋</td>
              <td>&amp;#9995;</td>
              <td>
              </td>
              <td>\00270b</td>
              <td>0x270b</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>9996</td>
              <td style={{ fontSize: "1.628em" }}>✌</td>
              <td>&amp;#9996;</td>
              <td>
              </td>
              <td>\00270c</td>
              <td>0x270c</td>
              <td>Victory hand</td>
            </tr>
            <tr>
              <td>9997</td>
              <td style={{ fontSize: "1.628em" }}>✍</td>
              <td>&amp;#9997;</td>
              <td>
              </td>
              <td>\00270d</td>
              <td>0x270d</td>
              <td>Writing hand</td>
            </tr>
            <tr>
              <td>9998</td>
              <td style={{ fontSize: "1.628em" }}>✎</td>
              <td>&amp;#9998;</td>
              <td>
              </td>
              <td>\00270e</td>
              <td>0x270e</td>
              <td>Lower Right Pencil</td>
            </tr>
            <tr>
              <td>9999</td>
              <td style={{ fontSize: "1.628em" }}>✏</td>
              <td>&amp;#9999;</td>
              <td>
              </td>
              <td>\00270f</td>
              <td>0x270f</td>
              <td>Pencil</td>
            </tr>
            <tr>
              <td>10000</td>
              <td style={{ fontSize: "1.628em" }}>✐</td>
              <td>&amp;#10000;</td>
              <td>
              </td>
              <td>\002710</td>
              <td>0x2710</td>
              <td>Upper Right Pencil</td>
            </tr>
            <tr>
              <td>10003</td>
              <td style={{ fontSize: "1.628em" }}>✓</td>
              <td>&amp;#10003;</td>
              <td>
              </td>
              <td>\002713</td>
              <td>0x2713</td>
              <td>Check mark</td>
            </tr>
            <tr>
              <td>10004</td>
              <td style={{ fontSize: "1.628em" }}>✔</td>
              <td>&amp;#10004;</td>
              <td>
              </td>
              <td>\002714</td>
              <td>0x2714</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>10005</td>
              <td style={{ fontSize: "1.628em" }}>✕</td>
              <td>&amp;#10005;</td>
              <td>
              </td>
              <td>\002715</td>
              <td>0x2715</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>10006</td>
              <td style={{ fontSize: "1.628em" }}>✖</td>
              <td>&amp;#10006;</td>
              <td>
              </td>
              <td>\002716</td>
              <td>0x2716</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>10007</td>
              <td style={{ fontSize: "1.628em" }}>✗</td>
              <td>&amp;#10007;</td>
              <td>
              </td>
              <td>\002717</td>
              <td>0x2717</td>
              <td>Ballot X</td>
            </tr>
            <tr>
              <td>10008</td>
              <td style={{ fontSize: "1.628em" }}>✘</td>
              <td>&amp;#10008;</td>
              <td>
              </td>
              <td>\002718</td>
              <td>0x2718</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>10047</td>
              <td style={{ fontSize: "1.628em" }}>✿</td>
              <td>&amp;#10047;</td>
              <td>
              </td>
              <td>\00273f</td>
              <td>0x273f</td>
              <td>Black florette</td>
            </tr>
            <tr>
              <td>10048</td>
              <td style={{ fontSize: "1.628em" }}>❀</td>
              <td>&amp;#10048;</td>
              <td>
              </td>
              <td>\002740</td>
              <td>0x2740</td>
              <td>White florette</td>
            </tr>
            <tr>
              <td>10049</td>
              <td style={{ fontSize: "1.628em" }}>❁</td>
              <td>&amp;#10049;</td>
              <td>
              </td>
              <td>\002741</td>
              <td>0x2741</td>
              <td>Eight petalled outlined black florette</td>
            </tr>
            <tr>
              <td>10052</td>
              <td style={{ fontSize: "1.628em" }}>❄</td>
              <td>&amp;#10052;</td>
              <td>
              </td>
              <td>\002744</td>
              <td>0x2744</td>
              <td>Snowflake</td>
            </tr>
            <tr>
              <td>10061</td>
              <td style={{ fontSize: "1.628em" }}>❍</td>
              <td>&amp;#10061;</td>
              <td>
              </td>
              <td>\00274d</td>
              <td>0x274d</td>
              <td>Shadowed white circle</td>
            </tr>
            <tr>
              <td>10063</td>
              <td style={{ fontSize: "1.628em" }}>❏</td>
              <td>&amp;#10063;</td>
              <td>
              </td>
              <td>\00274f</td>
              <td>0x274f</td>
              <td>Lower right drop shadowed white square</td>
            </tr>
            <tr>
              <td>10064</td>
              <td style={{ fontSize: "1.628em" }}>❐</td>
              <td>&amp;#10064;</td>
              <td>
              </td>
              <td>\002750</td>
              <td>0x2750</td>
              <td>Upper right drop shadowed white square</td>
            </tr>
            <tr>
              <td>10065</td>
              <td style={{ fontSize: "1.628em" }}>❑</td>
              <td>&amp;#10065;</td>
              <td>
              </td>
              <td>\002751</td>
              <td>0x2751</td>
              <td>Lower right shadowed white square</td>
            </tr>
            <tr>
              <td>10066</td>
              <td style={{ fontSize: "1.628em" }}>❒</td>
              <td>&amp;#10066;</td>
              <td>
              </td>
              <td>\002752</td>
              <td>0x2752</td>
              <td>Upper right shadowed white square</td>
            </tr>
            <tr>
              <td>10070</td>
              <td style={{ fontSize: "1.628em" }}>❖</td>
              <td>&amp;#10070;</td>
              <td>
              </td>
              <td>\002756</td>
              <td>0x2756</td>
              <td>Black diamond minus white X</td>
            </tr>
            <tr>
              <td>10731</td>
              <td style={{ fontSize: "1.628em" }}>⧫</td>
              <td>&amp;#10731;</td>
              <td>
              </td>
              <td>\0029eb</td>
              <td>0x29eb</td>
              <td>Black lozenge</td>
            </tr>
            <tr>
              <td>11047</td>
              <td style={{ fontSize: "1.628em" }}>⬧</td>
              <td>&amp;#11047;</td>
              <td>
              </td>
              <td>\002b27</td>
              <td>0x2b27</td>
              <td>Black medium lozenge</td>
            </tr>
            <tr>
              <td>128274</td>
              <td style={{ fontSize: "1.628em" }}>🔒</td>
              <td>&amp;#128274;</td>
              <td>
              </td>
              <td>\001f512</td>
              <td>0x1f512</td>
              <td>Padlock</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="17">Currency <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8352</td>
              <td style={{ fontSize: "1.628em" }}>₠</td>
              <td>&amp;#8352;</td>
              <td>
              </td>
              <td>\0020a0</td>
              <td>0x20a0</td>
              <td>Euro-currency sign</td>
            </tr>
            <tr>
              <td>8353</td>
              <td style={{ fontSize: "1.628em" }}>₡</td>
              <td>&amp;#8353;</td>
              <td>
              </td>
              <td>\0020a1</td>
              <td>0x20a1</td>
              <td>Cent sign</td>
            </tr>
            <tr>
              <td>8356</td>
              <td style={{ fontSize: "1.628em" }}>₤</td>
              <td>&amp;#8356;</td>
              <td>
              </td>
              <td>\0020a4</td>
              <td>0x20a4</td>
              <td>Pound sterling</td>
            </tr>
          </tbody>
        </table>

      <h2 className="sb-totop" tabIndex={-1} id="18">Units <a href="#top" target="_self">&#8673; top</a></h2>

        <table className="sb-table">
          <colgroup>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "120px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "50px"}}/>
            <col style={{ width: "400px"}}/>
          </colgroup>
          <thead>
            <tr>
              <th>Code</th>
              <th>Symbol</th>
              <th>Html Code</th>
              <th>Html Name</th>
              <th>CSS</th>
              <th>Hex</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>13169</td>
              <td style={{ fontSize: "1.628em" }}>㍱</td>
              <td>&amp;#13169;</td>
              <td>
              </td>
              <td>\003371</td>
              <td>0x3371</td>
              <td>Hectopascal</td>
            </tr>
            <tr>
              <td>13170</td>
              <td style={{ fontSize: "1.628em" }}>㍲</td>
              <td>&amp;#13170;</td>
              <td>
              </td>
              <td>\003372</td>
              <td>0x3372</td>
              <td>Dalton (atomic mass)</td>
            </tr>
            <tr>
              <td>13171</td>
              <td style={{ fontSize: "1.628em" }}>㍳</td>
              <td>&amp;#13171;</td>
              <td>
              </td>
              <td>\003373</td>
              <td>0x3373</td>
              <td>Astronomical Unit</td>
            </tr>
            <tr>
              <td>13172</td>
              <td style={{ fontSize: "1.628em" }}>㍴</td>
              <td>&amp;#13172;</td>
              <td>
              </td>
              <td>\003374</td>
              <td>0x3374</td>
              <td>Bar (Pressure)</td>
            </tr>
            <tr>
              <td>13173</td>
              <td style={{ fontSize: "1.628em" }}>㍵</td>
              <td>&amp;#13173;</td>
              <td>
              </td>
              <td>\003375</td>
              <td>0x3375</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13174</td>
              <td style={{ fontSize: "1.628em" }}>㍶</td>
              <td>&amp;#13174;</td>
              <td>
              </td>
              <td>\003376</td>
              <td>0x3376</td>
              <td>Parsec</td>
            </tr>
            <tr>
              <td>13184</td>
              <td style={{ fontSize: "1.628em" }}>㎀</td>
              <td>&amp;#13184;</td>
              <td>
              </td>
              <td>\003380</td>
              <td>0x3380</td>
              <td>Pico Amps</td>
            </tr>
            <tr>
              <td>13185</td>
              <td style={{ fontSize: "1.628em" }}>㎁</td>
              <td>&amp;#13185;</td>
              <td>
              </td>
              <td>\003381</td>
              <td>0x3381</td>
              <td>Nano Amps</td>
            </tr>
            <tr>
              <td>13186</td>
              <td style={{ fontSize: "1.628em" }}>㎂</td>
              <td>&amp;#13186;</td>
              <td>
              </td>
              <td>\003382</td>
              <td>0x3382</td>
              <td>Micro Amps</td>
            </tr>
            <tr>
              <td>13187</td>
              <td style={{ fontSize: "1.628em" }}>㎃</td>
              <td>&amp;#13187;</td>
              <td>
              </td>
              <td>\003383</td>
              <td>0x3383</td>
              <td>Mega Amps</td>
            </tr>
            <tr>
              <td>13188</td>
              <td style={{ fontSize: "1.628em" }}>㎄</td>
              <td>&amp;#13188;</td>
              <td>
              </td>
              <td>\003384</td>
              <td>0x3384</td>
              <td>Kilo Amps</td>
            </tr>
            <tr>
              <td>13189</td>
              <td style={{ fontSize: "1.628em" }}>㎅</td>
              <td>&amp;#13189;</td>
              <td>
              </td>
              <td>\003385</td>
              <td>0x3385</td>
              <td>Kilobyte</td>
            </tr>
            <tr>
              <td>13190</td>
              <td style={{ fontSize: "1.628em" }}>㎆</td>
              <td>&amp;#13190;</td>
              <td>
              </td>
              <td>\003386</td>
              <td>0x3386</td>
              <td>Megabyte</td>
            </tr>
            <tr>
              <td>13191</td>
              <td style={{ fontSize: "1.628em" }}>㎇</td>
              <td>&amp;#13191;</td>
              <td>
              </td>
              <td>\003387</td>
              <td>0x3387</td>
              <td>Gigabyte</td>
            </tr>
            <tr>
              <td>13192</td>
              <td style={{ fontSize: "1.628em" }}>㎈</td>
              <td>&amp;#13192;</td>
              <td>
              </td>
              <td>\003388</td>
              <td>0x3388</td>
              <td>Calories</td>
            </tr>
            <tr>
              <td>13193</td>
              <td style={{ fontSize: "1.628em" }}>㎉</td>
              <td>&amp;#13193;</td>
              <td>
              </td>
              <td>\003389</td>
              <td>0x3389</td>
              <td>Kilocalories</td>
            </tr>
            <tr>
              <td>13194</td>
              <td style={{ fontSize: "1.628em" }}>㎊</td>
              <td>&amp;#13194;</td>
              <td>
              </td>
              <td>\00338a</td>
              <td>0x338a</td>
              <td>Pico Farads</td>
            </tr>
            <tr>
              <td>13195</td>
              <td style={{ fontSize: "1.628em" }}>㎋</td>
              <td>&amp;#13195;</td>
              <td>
              </td>
              <td>\00338b</td>
              <td>0x338b</td>
              <td>Nano Farads</td>
            </tr>
            <tr>
              <td>13196</td>
              <td style={{ fontSize: "1.628em" }}>㎌</td>
              <td>&amp;#13196;</td>
              <td>
              </td>
              <td>\00338c</td>
              <td>0x338c</td>
              <td>Micro Farads</td>
            </tr>
            <tr>
              <td>13197</td>
              <td style={{ fontSize: "1.628em" }}>㎍</td>
              <td>&amp;#13197;</td>
              <td>
              </td>
              <td>\00338d</td>
              <td>0x338d</td>
              <td>Micro Grams</td>
            </tr>
            <tr>
              <td>13198</td>
              <td style={{ fontSize: "1.628em" }}>㎎</td>
              <td>&amp;#13198;</td>
              <td>
              </td>
              <td>\00338e</td>
              <td>0x338e</td>
              <td>Miligrams</td>
            </tr>
            <tr>
              <td>13199</td>
              <td style={{ fontSize: "1.628em" }}>㎏</td>
              <td>&amp;#13199;</td>
              <td>
              </td>
              <td>\00338f</td>
              <td>0x338f</td>
              <td>Kilograms</td>
            </tr>
            <tr>
              <td>13200</td>
              <td style={{ fontSize: "1.628em" }}>㎐</td>
              <td>&amp;#13200;</td>
              <td>
              </td>
              <td>\003390</td>
              <td>0x3390</td>
              <td>Hertz</td>
            </tr>
            <tr>
              <td>13201</td>
              <td style={{ fontSize: "1.628em" }}>㎑</td>
              <td>&amp;#13201;</td>
              <td>
              </td>
              <td>\003391</td>
              <td>0x3391</td>
              <td>Kilohertz</td>
            </tr>
            <tr>
              <td>13202</td>
              <td style={{ fontSize: "1.628em" }}>㎒</td>
              <td>&amp;#13202;</td>
              <td>
              </td>
              <td>\003392</td>
              <td>0x3392</td>
              <td>Megahertz</td>
            </tr>
            <tr>
              <td>13203</td>
              <td style={{ fontSize: "1.628em" }}>㎓</td>
              <td>&amp;#13203;</td>
              <td>
              </td>
              <td>\003393</td>
              <td>0x3393</td>
              <td>Gigahertz</td>
            </tr>
            <tr>
              <td>13204</td>
              <td style={{ fontSize: "1.628em" }}>㎔</td>
              <td>&amp;#13204;</td>
              <td>
              </td>
              <td>\003394</td>
              <td>0x3394</td>
              <td>Terahertz</td>
            </tr>
            <tr>
              <td>13205</td>
              <td style={{ fontSize: "1.628em" }}>㎕</td>
              <td>&amp;#13205;</td>
              <td>
              </td>
              <td>\003395</td>
              <td>0x3395</td>
              <td>Micro litres</td>
            </tr>
            <tr>
              <td>13206</td>
              <td style={{ fontSize: "1.628em" }}>㎖</td>
              <td>&amp;#13206;</td>
              <td>
              </td>
              <td>\003396</td>
              <td>0x3396</td>
              <td>Mililitres</td>
            </tr>
            <tr>
              <td>13207</td>
              <td style={{ fontSize: "1.628em" }}>㎗</td>
              <td>&amp;#13207;</td>
              <td>
              </td>
              <td>\003397</td>
              <td>0x3397</td>
              <td>Decilitres</td>
            </tr>
            <tr>
              <td>13208</td>
              <td style={{ fontSize: "1.628em" }}>㎘</td>
              <td>&amp;#13208;</td>
              <td>
              </td>
              <td>\003398</td>
              <td>0x3398</td>
              <td>Kilolitres</td>
            </tr>
            <tr>
              <td>13209</td>
              <td style={{ fontSize: "1.628em" }}>㎙</td>
              <td>&amp;#13209;</td>
              <td>
              </td>
              <td>\003399</td>
              <td>0x3399</td>
              <td>Femtometre</td>
            </tr>
            <tr>
              <td>13210</td>
              <td style={{ fontSize: "1.628em" }}>㎚</td>
              <td>&amp;#13210;</td>
              <td>
              </td>
              <td>\00339a</td>
              <td>0x339a</td>
              <td>Nanometre</td>
            </tr>
            <tr>
              <td>13211</td>
              <td style={{ fontSize: "1.628em" }}>㎛</td>
              <td>&amp;#13211;</td>
              <td>
              </td>
              <td>\00339b</td>
              <td>0x339b</td>
              <td>Micrometre</td>
            </tr>
            <tr>
              <td>13212</td>
              <td style={{ fontSize: "1.628em" }}>㎜</td>
              <td>&amp;#13212;</td>
              <td>
              </td>
              <td>\00339c</td>
              <td>0x339c</td>
              <td>Milimetre</td>
            </tr>
            <tr>
              <td>13213</td>
              <td style={{ fontSize: "1.628em" }}>㎝</td>
              <td>&amp;#13213;</td>
              <td>
              </td>
              <td>\00339d</td>
              <td>0x339d</td>
              <td>Centimetre</td>
            </tr>
            <tr>
              <td>13214</td>
              <td style={{ fontSize: "1.628em" }}>㎞</td>
              <td>&amp;#13214;</td>
              <td>
              </td>
              <td>\00339e</td>
              <td>0x339e</td>
              <td>Kilometre</td>
            </tr>
            <tr>
              <td>13215</td>
              <td style={{ fontSize: "1.628em" }}>㎟</td>
              <td>&amp;#13215;</td>
              <td>
              </td>
              <td>\00339f</td>
              <td>0x339f</td>
              <td>Millimetre squared</td>
            </tr>
            <tr>
              <td>13216</td>
              <td style={{ fontSize: "1.628em" }}>㎠</td>
              <td>&amp;#13216;</td>
              <td>
              </td>
              <td>\0033a0</td>
              <td>0x33a0</td>
              <td>Centimetre squared</td>
            </tr>
            <tr>
              <td>13217</td>
              <td style={{ fontSize: "1.628em" }}>㎡</td>
              <td>&amp;#13217;</td>
              <td>
              </td>
              <td>\0033a1</td>
              <td>0x33a1</td>
              <td>Metre squared</td>
            </tr>
            <tr>
              <td>13218</td>
              <td style={{ fontSize: "1.628em" }}>㎢</td>
              <td>&amp;#13218;</td>
              <td>
              </td>
              <td>\0033a2</td>
              <td>0x33a2</td>
              <td>Kilometre squared</td>
            </tr>
            <tr>
              <td>13219</td>
              <td style={{ fontSize: "1.628em" }}>㎣</td>
              <td>&amp;#13219;</td>
              <td>
              </td>
              <td>\0033a3</td>
              <td>0x33a3</td>
              <td>Millimetre cubed</td>
            </tr>
            <tr>
              <td>13220</td>
              <td style={{ fontSize: "1.628em" }}>㎤</td>
              <td>&amp;#13220;</td>
              <td>
              </td>
              <td>\0033a4</td>
              <td>0x33a4</td>
              <td>Centimetre cubed</td>
            </tr>
            <tr>
              <td>13221</td>
              <td style={{ fontSize: "1.628em" }}>㎥</td>
              <td>&amp;#13221;</td>
              <td>
              </td>
              <td>\0033a5</td>
              <td>0x33a5</td>
              <td>Metre cubed</td>
            </tr>
            <tr>
              <td>13222</td>
              <td style={{ fontSize: "1.628em" }}>㎦</td>
              <td>&amp;#13222;</td>
              <td>
              </td>
              <td>\0033a6</td>
              <td>0x33a6</td>
              <td>Kilometre cubed</td>
            </tr>
            <tr>
              <td>13223</td>
              <td style={{ fontSize: "1.628em" }}>㎧</td>
              <td>&amp;#13223;</td>
              <td>
              </td>
              <td>\0033a7</td>
              <td>0x33a7</td>
              <td>Metres per second</td>
            </tr>
            <tr>
              <td>13224</td>
              <td style={{ fontSize: "1.628em" }}>㎨</td>
              <td>&amp;#13224;</td>
              <td>
              </td>
              <td>\0033a8</td>
              <td>0x33a8</td>
              <td>Acceleration (metres per second per second)</td>
            </tr>
            <tr>
              <td>13225</td>
              <td style={{ fontSize: "1.628em" }}>㎩</td>
              <td>&amp;#13225;</td>
              <td>
              </td>
              <td>\0033a9</td>
              <td>0x33a9</td>
              <td>Pascal</td>
            </tr>
            <tr>
              <td>13226</td>
              <td style={{ fontSize: "1.628em" }}>㎪</td>
              <td>&amp;#13226;</td>
              <td>
              </td>
              <td>\0033aa</td>
              <td>0x33aa</td>
              <td>Kilopascal</td>
            </tr>
            <tr>
              <td>13227</td>
              <td style={{ fontSize: "1.628em" }}>㎫</td>
              <td>&amp;#13227;</td>
              <td>
              </td>
              <td>\0033ab</td>
              <td>0x33ab</td>
              <td>Megapascal</td>
            </tr>
            <tr>
              <td>13228</td>
              <td style={{ fontSize: "1.628em" }}>㎬</td>
              <td>&amp;#13228;</td>
              <td>
              </td>
              <td>\0033ac</td>
              <td>0x33ac</td>
              <td>Gigapascal</td>
            </tr>
            <tr>
              <td>13229</td>
              <td style={{ fontSize: "1.628em" }}>㎭</td>
              <td>&amp;#13229;</td>
              <td>
              </td>
              <td>\0033ad</td>
              <td>0x33ad</td>
              <td>Radian</td>
            </tr>
            <tr>
              <td>13230</td>
              <td style={{ fontSize: "1.628em" }}>㎮</td>
              <td>&amp;#13230;</td>
              <td>
              </td>
              <td>\0033ae</td>
              <td>0x33ae</td>
              <td>Radian per second</td>
            </tr>
            <tr>
              <td>13231</td>
              <td style={{ fontSize: "1.628em" }}>㎯</td>
              <td>&amp;#13231;</td>
              <td>
              </td>
              <td>\0033af</td>
              <td>0x33af</td>
              <td>Radian per second per second</td>
            </tr>
            <tr>
              <td>13232</td>
              <td style={{ fontSize: "1.628em" }}>㎰</td>
              <td>&amp;#13232;</td>
              <td>
              </td>
              <td>\0033b0</td>
              <td>0x33b0</td>
              <td>Petasecond</td>
            </tr>
            <tr>
              <td>13233</td>
              <td style={{ fontSize: "1.628em" }}>㎱</td>
              <td>&amp;#13233;</td>
              <td>
              </td>
              <td>\0033b1</td>
              <td>0x33b1</td>
              <td>Nanosecond</td>
            </tr>
            <tr>
              <td>13234</td>
              <td style={{ fontSize: "1.628em" }}>㎲</td>
              <td>&amp;#13234;</td>
              <td>
              </td>
              <td>\0033b2</td>
              <td>0x33b2</td>
              <td>Microsecond</td>
            </tr>
            <tr>
              <td>13235</td>
              <td style={{ fontSize: "1.628em" }}>㎳</td>
              <td>&amp;#13235;</td>
              <td>
              </td>
              <td>\0033b3</td>
              <td>0x33b3</td>
              <td>Millisecond</td>
            </tr>
            <tr>
              <td>13236</td>
              <td style={{ fontSize: "1.628em" }}>㎴</td>
              <td>&amp;#13236;</td>
              <td>
              </td>
              <td>\0033b4</td>
              <td>0x33b4</td>
              <td>Picovolt</td>
            </tr>
            <tr>
              <td>13237</td>
              <td style={{ fontSize: "1.628em" }}>㎵</td>
              <td>&amp;#13237;</td>
              <td>
              </td>
              <td>\0033b5</td>
              <td>0x33b5</td>
              <td>Nanovolt</td>
            </tr>
            <tr>
              <td>13238</td>
              <td style={{ fontSize: "1.628em" }}>㎶</td>
              <td>&amp;#13238;</td>
              <td>
              </td>
              <td>\0033b6</td>
              <td>0x33b6</td>
              <td>Microvolt</td>
            </tr>
            <tr>
              <td>13239</td>
              <td style={{ fontSize: "1.628em" }}>㎷</td>
              <td>&amp;#13239;</td>
              <td>
              </td>
              <td>\0033b7</td>
              <td>0x33b7</td>
              <td>Milivolt</td>
            </tr>
            <tr>
              <td>13240</td>
              <td style={{ fontSize: "1.628em" }}>㎸</td>
              <td>&amp;#13240;</td>
              <td>
              </td>
              <td>\0033b8</td>
              <td>0x33b8</td>
              <td>Kilovolt</td>
            </tr>
            <tr>
              <td>13241</td>
              <td style={{ fontSize: "1.628em" }}>㎹</td>
              <td>&amp;#13241;</td>
              <td>
              </td>
              <td>\0033b9</td>
              <td>0x33b9</td>
              <td>Megavolt</td>
            </tr>
            <tr>
              <td>13242</td>
              <td style={{ fontSize: "1.628em" }}>㎺</td>
              <td>&amp;#13242;</td>
              <td>
              </td>
              <td>\0033ba</td>
              <td>0x33ba</td>
              <td>Picowatt</td>
            </tr>
            <tr>
              <td>13243</td>
              <td style={{ fontSize: "1.628em" }}>㎻</td>
              <td>&amp;#13243;</td>
              <td>
              </td>
              <td>\0033bb</td>
              <td>0x33bb</td>
              <td>Nanowatt</td>
            </tr>
            <tr>
              <td>13244</td>
              <td style={{ fontSize: "1.628em" }}>㎼</td>
              <td>&amp;#13244;</td>
              <td>
              </td>
              <td>\0033bc</td>
              <td>0x33bc</td>
              <td>Microwatt</td>
            </tr>
            <tr>
              <td>13245</td>
              <td style={{ fontSize: "1.628em" }}>㎽</td>
              <td>&amp;#13245;</td>
              <td>
              </td>
              <td>\0033bd</td>
              <td>0x33bd</td>
              <td>Milliwatt</td>
            </tr>
            <tr>
              <td>13246</td>
              <td style={{ fontSize: "1.628em" }}>㎾</td>
              <td>&amp;#13246;</td>
              <td>
              </td>
              <td>\0033be</td>
              <td>0x33be</td>
              <td>Kilowatt</td>
            </tr>
            <tr>
              <td>13247</td>
              <td style={{ fontSize: "1.628em" }}>㎿</td>
              <td>&amp;#13247;</td>
              <td>
              </td>
              <td>\0033bf</td>
              <td>0x33bf</td>
              <td>Megawatt</td>
            </tr>
            <tr>
              <td>13248</td>
              <td style={{ fontSize: "1.628em" }}>㏀</td>
              <td>&amp;#13248;</td>
              <td>
              </td>
              <td>\0033c0</td>
              <td>0x33c0</td>
              <td>Kilo Ohm</td>
            </tr>
            <tr>
              <td>13249</td>
              <td style={{ fontSize: "1.628em" }}>㏁</td>
              <td>&amp;#13249;</td>
              <td>
              </td>
              <td>\0033c1</td>
              <td>0x33c1</td>
              <td>Mega Ohm</td>
            </tr>
            <tr>
              <td>13250</td>
              <td style={{ fontSize: "1.628em" }}>㏂</td>
              <td>&amp;#13250;</td>
              <td>
              </td>
              <td>\0033c2</td>
              <td>0x33c2</td>
              <td>AM</td>
            </tr>
            <tr>
              <td>13251</td>
              <td style={{ fontSize: "1.628em" }}>㏃</td>
              <td>&amp;#13251;</td>
              <td>
              </td>
              <td>\0033c3</td>
              <td>0x33c3</td>
              <td>Becquerel</td>
            </tr>
            <tr>
              <td>13252</td>
              <td style={{ fontSize: "1.628em" }}>㏄</td>
              <td>&amp;#13252;</td>
              <td>
              </td>
              <td>\0033c4</td>
              <td>0x33c4</td>
              <td>Cubic Centilitre</td>
            </tr>
            <tr>
              <td>13253</td>
              <td style={{ fontSize: "1.628em" }}>㏅</td>
              <td>&amp;#13253;</td>
              <td>
              </td>
              <td>\0033c5</td>
              <td>0x33c5</td>
              <td>Candela</td>
            </tr>
            <tr>
              <td>13254</td>
              <td style={{ fontSize: "1.628em" }}>㏆</td>
              <td>&amp;#13254;</td>
              <td>
              </td>
              <td>\0033c6</td>
              <td>0x33c6</td>
              <td>Content Kilogram</td>
            </tr>
            <tr>
              <td>13255</td>
              <td style={{ fontSize: "1.628em" }}>㏇</td>
              <td>&amp;#13255;</td>
              <td>
              </td>
              <td>\0033c7</td>
              <td>0x33c7</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13256</td>
              <td style={{ fontSize: "1.628em" }}>㏈</td>
              <td>&amp;#13256;</td>
              <td>
              </td>
              <td>\0033c8</td>
              <td>0x33c8</td>
              <td>Decibel</td>
            </tr>
            <tr>
              <td>13257</td>
              <td style={{ fontSize: "1.628em" }}>㏉</td>
              <td>&amp;#13257;</td>
              <td>
              </td>
              <td>\0033c9</td>
              <td>0x33c9</td>
              <td>Gray</td>
            </tr>
            <tr>
              <td>13258</td>
              <td style={{ fontSize: "1.628em" }}>㏊</td>
              <td>&amp;#13258;</td>
              <td>
              </td>
              <td>\0033ca</td>
              <td>0x33ca</td>
              <td>Hectare</td>
            </tr>
            <tr>
              <td>13259</td>
              <td style={{ fontSize: "1.628em" }}>㏋</td>
              <td>&amp;#13259;</td>
              <td>
              </td>
              <td>\0033cb</td>
              <td>0x33cb</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13260</td>
              <td style={{ fontSize: "1.628em" }}>㏌</td>
              <td>&amp;#13260;</td>
              <td>
              </td>
              <td>\0033cc</td>
              <td>0x33cc</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13261</td>
              <td style={{ fontSize: "1.628em" }}>㏍</td>
              <td>&amp;#13261;</td>
              <td>
              </td>
              <td>\0033cd</td>
              <td>0x33cd</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13262</td>
              <td style={{ fontSize: "1.628em" }}>㏎</td>
              <td>&amp;#13262;</td>
              <td>
              </td>
              <td>\0033ce</td>
              <td>0x33ce</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13263</td>
              <td style={{ fontSize: "1.628em" }}>㏏</td>
              <td>&amp;#13263;</td>
              <td>
              </td>
              <td>\0033cf</td>
              <td>0x33cf</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13264</td>
              <td style={{ fontSize: "1.628em" }}>㏐</td>
              <td>&amp;#13264;</td>
              <td>
              </td>
              <td>\0033d0</td>
              <td>0x33d0</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13265</td>
              <td style={{ fontSize: "1.628em" }}>㏑</td>
              <td>&amp;#13265;</td>
              <td>
              </td>
              <td>\0033d1</td>
              <td>0x33d1</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13266</td>
              <td style={{ fontSize: "1.628em" }}>㏒</td>
              <td>&amp;#13266;</td>
              <td>
              </td>
              <td>\0033d2</td>
              <td>0x33d2</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13267</td>
              <td style={{ fontSize: "1.628em" }}>㏓</td>
              <td>&amp;#13267;</td>
              <td>
              </td>
              <td>\0033d3</td>
              <td>0x33d3</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13268</td>
              <td style={{ fontSize: "1.628em" }}>㏔</td>
              <td>&amp;#13268;</td>
              <td>
              </td>
              <td>\0033d4</td>
              <td>0x33d4</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13269</td>
              <td style={{ fontSize: "1.628em" }}>㏕</td>
              <td>&amp;#13269;</td>
              <td>
              </td>
              <td>\0033d5</td>
              <td>0x33d5</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13270</td>
              <td style={{ fontSize: "1.628em" }}>㏖</td>
              <td>&amp;#13270;</td>
              <td>
              </td>
              <td>\0033d6</td>
              <td>0x33d6</td>
              <td>Mol</td>
            </tr>
            <tr>
              <td>13271</td>
              <td style={{ fontSize: "1.628em" }}>㏗</td>
              <td>&amp;#13271;</td>
              <td>
              </td>
              <td>\0033d7</td>
              <td>0x33d7</td>
              <td>pH</td>
            </tr>
            <tr>
              <td>13272</td>
              <td style={{ fontSize: "1.628em" }}>㏘</td>
              <td>&amp;#13272;</td>
              <td>
              </td>
              <td>\0033d8</td>
              <td>0x33d8</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13273</td>
              <td style={{ fontSize: "1.628em" }}>㏙</td>
              <td>&amp;#13273;</td>
              <td>
              </td>
              <td>\0033d9</td>
              <td>0x33d9</td>
              <td>Parts Per Million</td>
            </tr>
            <tr>
              <td>13274</td>
              <td style={{ fontSize: "1.628em" }}>㏚</td>
              <td>&amp;#13274;</td>
              <td>
              </td>
              <td>\0033da</td>
              <td>0x33da</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13275</td>
              <td style={{ fontSize: "1.628em" }}>㏛</td>
              <td>&amp;#13275;</td>
              <td>
              </td>
              <td>\0033db</td>
              <td>0x33db</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13276</td>
              <td style={{ fontSize: "1.628em" }}>㏜</td>
              <td>&amp;#13276;</td>
              <td>
              </td>
              <td>\0033dc</td>
              <td>0x33dc</td>
              <td>
              </td>
            </tr>
            <tr>
              <td>13277</td>
              <td style={{ fontSize: "1.628em" }}>㏝</td>
              <td>&amp;#13277;</td>
              <td>
              </td>
              <td>\0033dd</td>
              <td>0x33dd</td>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <small>Original tables by <a href="https://lonewolfonline.net/html-character-codes-ascii-entity-unicode-symbols/" target="_blank" rel="noreferrer">Tim Trott</a></small>
        </p>
    </div>
  )
}

export const HtmlCharacterCodes = Template.bind({});
HtmlCharacterCodes.storyName = 'Html character codes';
