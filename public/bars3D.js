import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import barsVisTemplate from 'plugins/3D_kibana_charts_vis/bars3D.html';

import 'plugins/3D_kibana_charts_vis/bars3D_controller';


export default function bars3DVisProvider(Private) {
    var TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
    const Schemas = Private(VisSchemasProvider);
	
    return new TemplateVisType({
  		name: 'Bars3DChart',
  		title: '3D Bars Chart',
  		icon: 'fa-bar-chart',
  		description: 'A 3D bars chart. Great for representing 3D data',
  		template: barsVisTemplate,
    schemas: new Schemas([
        {
          group: 'metrics',
          name: 'bars_height',
          title: 'Bars Height',
          min: 1,
          max: 1,
          aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'std_dev']
        },
        {
          group: 'buckets',
          name: 'bars',
          title: 'Bars',
          min: 1,
          max: 2,
          aggFilter: '!geohash_grid'
        }
      ])

    });
}