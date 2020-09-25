import React from 'react';
import { Route }from 'react-router-dom'
import Categorypage from './category'
import Demampage from '../pagesCA/demam'
import Batukdanflupage from '../pagesCA/batukdanflu'
import Asmapage from '../pagesCA/asma'
import Vitaminpage from '../pagesCA/vitamin'
import Kulitpage from '../pagesCA/kulit'
import Matapage from '../pagesCA/mata'
import Antiseptikpage from '../pagesCA/antiseptik'
import Antibiotikpage from '../pagesCA/antibiotik'
import P3Kpage from '../pagesCA/p3k'

class CategoryRouter extends React.Component {
  
    render() { 
        console.log(this.props.match)
        return ( 
            <div>
                <Route path={this.props.match.path } component = {Categorypage} exact/>
                <Route path={this.props.match.path + '/demam' } component = {Demampage}/>
                <Route path={this.props.match.path + '/batukdanflu' } component = {Batukdanflupage}/>
                <Route path={this.props.match.path + '/vitamin' } component = {Vitaminpage}/>
                <Route path={this.props.match.path + '/asma' } component = {Asmapage}/>
                <Route path={this.props.match.path + '/penyakitkulit' } component = {Kulitpage}/>
                <Route path={this.props.match.path + '/penyakitmata' } component = {Matapage}/>
                <Route path={this.props.match.path + '/antiseptik' } component = {Antiseptikpage}/>
                <Route path={this.props.match.path + '/antibiotik' } component = {Antibiotikpage}/>
                <Route path={this.props.match.path + '/P3K' } component = {P3Kpage}/>
            </div>
         );
    }
}
 
export default CategoryRouter;